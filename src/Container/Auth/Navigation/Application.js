import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "../LoginScreen";
import DashBoard from "../../DashBoard";
import CopyLogin from "../LoginScreen/CopyLogin";
import RegisterStudent from "../../RegisterStudent";
import StudentList from "../../RegisterStudent/StudentList";
import StudentDetail from "../../RegisterStudent/StudentDetail";
import NewDashBoard from "../../DashBoard/NewDashBoard";
import PythonQuestion from "../../TopicQuestion/PythonQuestion";
import JavascriptQuestion from './../../TopicQuestion/JavascriptQuestion/index';
import HTMLQuestion from './../../TopicQuestion/HTMLQuestion/index';
import ITToolsQuestion from './../../TopicQuestion/ITToolsQuestion/index';
import ITFounder from "../../SideBar/ITFounder";
import TeachingStaff from "../../SideBar/TeachingStaff";
import ITTeam from "../../SideBar/ITTeam";
import AboutUs from "../../SideBar/AboutUs";
import News from "../../News";
import Fee from "../../Fee";
import ImageGallery from "../../ImageGallery";
import FeeRecipt from "../../Fee/FeeRecipt";
import OnlineTestMCQ from "../../../Component/OnlineTestMCQ";
import PreivewImage from "../../ImageGallery/PreivewImage";
import Profile from "../../SideBar/Profile";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setIsLoggedIn } from "../../../../utilities/MyStore/Dashboard/dashboard";
import { useEffect } from "react";



function Application() {

    const Stack = createStackNavigator();
    const dispatch = useDispatch();
    const isLoggin = useSelector((state) => state.dashboardData.isloggedIn);


    useEffect(() => {

        retrieveData();

    }, [])
    console.log("login====>", isLoggin);
    const retrieveData = async () => {


        try {
            const data = await AsyncStorage.getItem('islogged');
            if (data !== null) {
                // Data is retrieved successfully
                const value = JSON.parse(data);

                dispatch(setIsLoggedIn(value));

            } else {
                // Data doesn't exist
                dispatch(setIsLoggedIn(false));
                console.log('No data found.');
            }
        } catch (error) {
            console.error('Error retrieving data: ', error);
        }
    };



    const stackContainer = () => {

        return (
            <>
                <Stack.Screen
                    name="NewDashBoard"
                    component={NewDashBoard}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CopyLogin"
                    component={CopyLogin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DashBoard"
                    component={DashBoard}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RegisterStudent"
                    component={RegisterStudent}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="StudentList"
                    component={StudentList}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="StudentDetail"
                    component={StudentDetail}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PythonQuestion"
                    component={PythonQuestion}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="JavascriptQuestion"
                    component={JavascriptQuestion}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HTMLQuestion"
                    component={HTMLQuestion}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ITToolsQuestion"
                    component={ITToolsQuestion}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ITFounder"
                    component={ITFounder}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TeachingStaff"
                    component={TeachingStaff}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ITTeam"
                    component={ITTeam}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AboutUs"
                    component={AboutUs}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="News"
                    component={News}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Fee"
                    component={Fee}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ImageGallery"
                    component={ImageGallery}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FeeRecipt"
                    component={FeeRecipt}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="OnlineTestMCQ"
                    component={OnlineTestMCQ}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PreivewImage"
                    component={PreivewImage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerShown: false }}
                />
            </>
        )
    }

    const loginAuthContainer = () => {

        return (
            <>

                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}

                />
                {stackContainer()}
            </>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    isLoggin ?
                        stackContainer()
                        :
                        loginAuthContainer()
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Application;