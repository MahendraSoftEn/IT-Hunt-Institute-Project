import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity,Image } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';




function RegisterStudent() {

    const navigation=useNavigation();
    const [gender, setGender] = useState(-1);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [image, setImage] = useState(null);
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [age,setAge]=useState(null);
    const [selectedGender,setSelectedGender]=useState(0);
    const [mobile,setMobileNumber]=useState(null);
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [course,setCourse]=useState("");

    // first name
    // last name
    // date of birth
    // gender
    // course selection
    // phone number
    // email
    // address
    // photo
    const data = [
        { label: 'O Level', value: '1' },
        { label: 'A Level', value: '2' },
        { label: 'B Level', value: '3' },
        { label: 'MCA', value: '4' },
        { label: 'CCC', value: '5' },
    ];

    useEffect(()=>{
        // let obj={
        //     name:"mohan",
        //     age:23,
        //     address:"Pratapgarh"
        // }
        //  storeObjectData("myData",obj);
        //  retrieveObjectData("myData");
    },[])
    // Storing object data
const storeObjectData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      console.log('Object data stored successfully!');
    } catch (error) {
      console.log('Error storing object data:', error);
    }
  };

  // Retrieving object data
// const retrieveObjectData = async (key) => {
//     try {
//       const jsonValue = await AsyncStorage.getItem(key);
//       if (jsonValue !== null) {
//         const value = JSON.parse(jsonValue);
//         console.log('Retrieved object data:', value);
//       } else {
//         console.log('No object data found with the specified key');
//       }
//     } catch (error) {
//       console.log('Error retrieving object data:', error);
//     }
//   };


const setStudentValue=()=>{

    let studentListValue=
        {
            firstName_value:firstName,
            lastName_value:lastName,
            age_value:age,
            gender_value:selectedGender,
            course_value:course,
            mobile_number:mobile,
            Email:email,
            Address:address
        };
        storeObjectData("studentData",[studentListValue]);
    navigation.navigate("StudentList",{
      studentData:studentListValue
    });
}
   
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <BlueHeader
                heading={"Register Student"}
            />
            <ScrollView>
                <View style={{ padding: 20, flex: 1 }}>
                    <View style={{ marginTop: 10 }}>
                        <Text>First Name</Text>
                        <TextInput
                            style={[style.textInput]}
                            keyboardType='text'
                            onChangeText={(text)=>{
                                setFirstName(text);
                                
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>Last Name</Text>
                        <TextInput
                            style={[style.textInput]}
                            keyboardType='text'
                            onChangeText={(text)=>{
                                setLastName(text);
                                
                            }}
                        />
                    </View>
                    <View
                        style={{ marginTop: 10 }}>
                        <Text>Age</Text>
                        <TextInput
                            style={[style.textInput]}
                           keyboardType='numeric'
                           maxLength={2}
                           onChangeText={(number)=>{
                            setAge(number);
                            
                        }}
                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
                        <Text style={{ fontSize: 16, color: "#194880" }}>Gender</Text>
                        <TouchableOpacity
                            onPress={() => {
                                setGender(0);
                                setSelectedGender(0);
                            }}
                            style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: gender == 0 ? "#00B2F4" : "white", marginTop: 3, borderWidth: 1, borderColor: "#8C8896" }} />
                        <Text style={{ fontSize: 16, color: "#194880" }}>Male</Text>
                        <TouchableOpacity
                            onPress={() => {
                                setGender(1);
                                setSelectedGender(1);
                            }}
                            style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: gender == 1 ? "#00B2F4" : "white", marginTop: 3, borderWidth: 1, borderColor: "#8C8896" }} />
                        <Text style={{ fontSize: 16, color: "#194880" }}>Female</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>Course</Text>
                        <Dropdown
                            style={[style.dropdown, { borderColor: 'blue' }]}
                            placeholderStyle={style.placeholderStyle}
                            selectedTextStyle={style.selectedTextStyle}
                            inputSearchStyle={style.inputSearchStyle}
                            iconStyle={style.iconStyle}
                            data={data}
                            //   search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={'Select item'}
                            searchPlaceholder="Search..."
                            //   value={value}
                            //   onFocus={() => setIsFocus(true)}
                            //   onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setCourse(item.label);
                                // setIsFocus(false);
                            }}

                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>Phone Number</Text>
                        <TextInput
                            style={[style.textInput]}
                            keyboardType='numeric'
                            maxLength={10}
                            onChangeText={(number)=>{
                                setMobileNumber(number);
                                
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>Email</Text>
                        <TextInput
                            style={[style.textInput]}
                            keyboardType='email'
                            onChangeText={(text)=>{
                                setEmail(text);
                                
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>Address</Text>
                        <TextInput
                            style={[style.textInput]}
                            keyboardType='text'
                            onChangeText={(text)=>{
                                setAddress(text);
                                
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <TouchableOpacity 
                        style={{ width: 150, height: 60, borderWidth: 1, borderRadius: 10, alignItems: "center", justifyContent: "center", borderColor: "#8C8896" }}>
                            <Text style={{ fontSize: 15 }}>Upload Photo</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={{ marginTop: 10, alignItems: "center" }}>
                        <TouchableOpacity
                           onPress={()=>{
                             setStudentValue();
                           
                           }}
                            style={{ backgroundColor: "#00B2F4", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}
                        >
                            <Text style={{ color: 'white', fontSize: 16 }}>Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                {/* <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                /> */}
            </ScrollView>
        </SafeAreaView>
    );
}

export default RegisterStudent;

const style = StyleSheet.create({

    textInput: {
        padding: 8,
        borderColor: "#70707033",
        borderWidth: 2,
        borderRadius: 7,
        // backgroundColor:"white"
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})