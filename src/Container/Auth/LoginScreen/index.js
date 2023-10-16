import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    Keyboard,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from 'react-native';


import { Formik } from "formik";
import { Images } from "../../../../utilities/Images";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import LoadingModal from "../../../Component/LoadingModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginValidationSchema } from "../../../../utilities/Validation";
import { dynamicSize, getFontSize, hpx, screenHeight, screenWidth, wpx } from "../../../../utilities/responsive";
import { removeState, setCount, setRegistrationData } from "../../../../utilities/MyStore/Dashboard/dashboard";

function LoginScreen() {

    const navigation = useNavigation();
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [activeView, setActiveView] = useState(0);
    const [signUpUserName, setSignUpUserName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showhidePassword, setshowhidePassword] = useState(true);
    const [LoginInfo, setLoginInfo] = useState([]);
    const dispatch = useDispatch();

    const data = useSelector((state) => state?.dashboardData?.registrationData);
    const register_count = useSelector((state) => state.dashboardData.count);


    useEffect(() => {
        retrieveData();
        //   removeData();
    }, [])


    const storeData = async (data) => {
        try {
            // You can store a key-value pair

            let array = [...LoginInfo, data];
            const userJSON = JSON.stringify(array);
            await AsyncStorage.setItem('logindata', userJSON);
            console.log('Data stored successfully.');
        } catch (error) {
            console.error('Error storing data: ', error);
        }
        retrieveData();
    };
    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('logindata');
            console.log('Data removed successfully.');
        } catch (error) {
            console.error('Error removing data: ', error);
        }
    };
    const retrieveData = async () => {
        try {
            const data = await AsyncStorage.getItem('logindata');
            if (data !== null) {
                // Data is retrieved successfully
                const user = JSON.parse(data);

                setLoginInfo(user);

            } else {
                // Data doesn't exist
                console.log('No data found.');
            }
        } catch (error) {
            console.error('Error retrieving data: ', error);
        }
    };
    const handleButtonClick = (values) => {



        setIsLoading(true);
        setTimeout(() => {
            var isExist = false;
            if (LoginInfo.length > 0) {
                LoginInfo?.map((item, index) => {
                    if (values?.username?.toLowerCase() == item?.name?.toLowerCase() && values?.password == item?.password) {
                        isExist = true;
                        return;
                    }
                })
            }

            if (isExist) {
                navigation.navigate("NewDashBoard");
            } else {
                alert("Invalid User id and Password");
            }
            setIsLoading(false);
            setUserName("");
            setPassword("");
        }, 3000);
    }
    const registerStudent = () => {

        setIsLoading(true);
        setTimeout(() => {
            let user_obj = {
                id: register_count,
                name: signUpUserName,
                email: signUpEmail,
                password: signUpPassword
            };
            dispatch(setCount(register_count + 1));
            dispatch(setRegistrationData(user_obj));
            storeData(user_obj);
            alert("SuccessFully Registered");
            setSignUpEmail("");
            setSignUpPassword("");
            setSignUpUserName("");
            setIsLoading(false);
            setActiveView(0);
        }, 3000)
    }
    return (
        <KeyboardAvoidingView style={Styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={Styles.BackgroundLoginImage}
                >
                    <LoadingModal isVisible={isLoading} />
                    <ScrollView>
                        <View style={{ alignItems: "center", backgroundColor: "white", padding: 10, marginTop: screenHeight * 0.06 }}>
                            <Image
                                source={Images.ithuntlogo}
                                style={Styles.loginLogo}
                            />
                            <Text style={{ fontSize: getFontSize(14), color: "#194880", marginTop: screenHeight * 0.02 }}>IT Hunt the Institute of Computer Technology</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: screenHeight * 0.03, padding: 3 }}>
                            <TouchableOpacity
                                style={{ padding: 3 }}
                                onPress={() => {
                                    setActiveView(1);
                                }}
                            >
                                <Text style={{ color: activeView == 1 ? "#FF515D" : "#194880", fontWeight: "bold" }}>Sign Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setActiveView(0);
                                }}
                            >
                                <Text style={{ color: activeView == 0 ? "#FF515D" : "#194880", fontWeight: "bold" }}>Sign In</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ width: screenWidth, height: 1, backgroundColor: "#8C8896", opacity: 0.4 }} />

                        {
                            activeView == 0 ?
                                <>
                                    <View style={{ alignItems: "center", marginTop: screenHeight * 0.06 }}>
                                        <Text style={{ fontSize: getFontSize(20), color: "#194880" }}>Welcome</Text>
                                        <Text style={{ color: "#8C8896", fontSize: getFontSize(16) }}>Kindly provide your login credentials.</Text>
                                    </View>

                                    <Formik
                                        initialValues={{ username: '', password: '' }}
                                        onSubmit={values => handleButtonClick(values)}
                                        validationSchema={loginValidationSchema}
                                    >
                                        {({ handleChange, handleBlur, handleSubmit, errors, values }) => (

                                            <View style={Styles.inputView}>

                                                <View style={{ marginTop: hpx(10) }}>
                                                    <View style={{ top: 8, left: 10, backgroundColor: "white", width: wpx(60), zIndex: 10 }}>
                                                        <Text style={{ color: "#00B2F4", fontSize: getFontSize(15), }}>User Id:</Text>
                                                    </View>
                                                    <TextInput
                                                        name="username"
                                                        placeholder="Enter the user id"
                                                        style={Styles.inputBox}
                                                        onChangeText={handleChange('username')}
                                                        onBlur={handleBlur('username')}
                                                        value={values.username}
                                                        keyboardType="text"
                                                    />
                                                    {errors.username &&
                                                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.username}</Text>
                                                    }
                                                </View>

                                                <View style={{ marginTop: hpx(10) }}>
                                                    <View style={{ top: 8, left: 10, backgroundColor: "white", width: wpx(80), zIndex: 10 }}>
                                                        <Text style={{ color: "#00B2F4", fontSize: getFontSize(15) }}>Password:</Text>
                                                    </View>
                                                    <TextInput
                                                        name="password"
                                                        placeholder="Enter the password"
                                                        style={Styles.inputBox}
                                                        onChangeText={handleChange('password')}
                                                        onBlur={handleBlur('password')}
                                                        value={values.password}
                                                        secureTextEntry={showhidePassword ? true : false}
                                                    />
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setshowhidePassword(!showhidePassword);
                                                        }}
                                                    >

                                                        <Image
                                                            source={showhidePassword ? Images.Password_Show : Images.Password_Hide}
                                                            style={{ width: dynamicSize(20), height: dynamicSize(20), alignSelf: "flex-end", top: -33, right: 16, }}
                                                        />

                                                    </TouchableOpacity>
                                                    {errors.password &&
                                                        <Text style={{ fontSize: getFontSize(10), color: 'red', top: -20 }}>{errors.password}</Text>
                                                    }
                                                </View>
                                                <View style={{}}>
                                                    <TouchableOpacity
                                                        onPress={handleSubmit}
                                                        style={Styles.loginButton}>
                                                        <Text style={Styles.loginText}>Sign In</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )}
                                    </Formik>
                                </>
                                :
                                <View style={Styles.inputView}>
                                    <View style={{ alignItems: "center", marginTop: screenHeight * 0.02 }}>
                                        <Text style={{ fontSize: getFontSize(18), color: "#194880" }}>Welcome</Text>
                                        <Text style={{ color: "#8C8896", fontSize: getFontSize(14) }}>Kindly Fill your Details.</Text>
                                    </View>
                                    <View style={{ marginTop: hpx(10) }}>
                                        <View style={{ top: 8, left: 10, backgroundColor: "white", width: wpx(60), zIndex: 10 }}>
                                            <Text style={{ color: "#00B2F4", fontSize: getFontSize(15), }}> Name:</Text>
                                        </View>
                                        <TextInput
                                            name="username"
                                            placeholder="Enter Your name"
                                            style={Styles.inputBox}
                                            value={signUpUserName}
                                            onChangeText={(text) => setSignUpUserName(text)}
                                            keyboardType="text"
                                        />

                                    </View>
                                    <View style={{ marginTop: hpx(10) }}>
                                        <View style={{ top: 8, left: 10, backgroundColor: "white", width: wpx(50), zIndex: 10 }}>
                                            <Text style={{ color: "#00B2F4", fontSize: getFontSize(15), }}>Email:</Text>
                                        </View>
                                        <TextInput
                                            name="email"
                                            inputMode="email"
                                            placeholder="Enter email"
                                            value={signUpEmail}
                                            style={Styles.inputBox}
                                            onChangeText={(text) => setSignUpEmail(text)}
                                        />

                                    </View>

                                    <View style={{ marginTop: hpx(10) }}>
                                        <View style={{ top: 8, left: 10, backgroundColor: "white", width: wpx(80), zIndex: 10 }}>
                                            <Text style={{ color: "#00B2F4", fontSize: getFontSize(15) }}>Password:</Text>
                                        </View>
                                        <TextInput
                                            name="password"
                                            placeholder="Enter the password"
                                            style={Styles.inputBox}
                                            onChangeText={(text) => setSignUpPassword(text)}
                                            secureTextEntry={true}
                                        />
                                    </View>
                                    <View style={{}}>
                                        <TouchableOpacity
                                            onPress={registerStudent}
                                            style={Styles.loginButton}>
                                            <Text style={Styles.loginText}>Sign Up</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                        }
                        <View style={{ alignItems: "center", marginTop: screenHeight * 0.02, marginBottom: 10 }}>
                            <Text style={{ color: "#8C8896", fontSize: getFontSize(14) }}>Powered By</Text>
                            <Text style={{ color: "#194880", fontSize: getFontSize(12) }}>IT HUNT</Text>
                        </View>
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}
export default LoginScreen;

const Styles = StyleSheet.create({

    container: {
        flex: 1,

    },
    BackgroundLoginImage: {
        flex: 1,
        backgroundColor: "white",
    },
    inputBox: {
        width: screenWidth * 0.85,
        height: screenHeight * 0.07,
        borderWidth: 0.6,
        borderColor: "#8C8896",
        borderRadius: 7,
        paddingHorizontal: wpx(10),
        color: "#194880",
        fontSize: getFontSize(16)
    },
    headerImage: {
        height: hpx(110),
        width: "100%",
    },
    loginLogo: {
        width: dynamicSize(130),
        height: dynamicSize(130),
        borderRadius: hpx(80),
        resizeMode: "cover",

    },
    inputView: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingHorizontal: wpx(20),
        paddingVertical: hpx(20),
    },
    loginButton: {
        paddingHorizontal: wpx(30),
        paddingVertical: hpx(12),
        backgroundColor: "#00B2F4",
        marginTop: screenHeight * 0.04,
        alignSelf: 'center',
        borderRadius: 10,
        // marginLeft: 20
    },
    loginText: {
        color: "white",
        fontSize: getFontSize(16)
    },


})