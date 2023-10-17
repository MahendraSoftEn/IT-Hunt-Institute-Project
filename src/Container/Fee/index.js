import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import { getFontSize, hpx, wpx } from '../../../utilities/responsive';

function Fee() {

  const data = [
    { label: '2023', value: '2023' },
    { label: '2022', value: '2022' },
    { label: '2020', value: '2020' },
    { label: '2019', value: '2019' },
    { label: '2018', value: '2018' },
    { label: '2017', value: '2017' },
  ];
  const studentData=[
    {
      value:"mohan",
      label:"mohan",
    },
    {
      value:"Rajendra",
      label:"Rajendra",
    },
    {
      value:"Ravi",
      label:"Ravi",
    },
    {
      value:"Anil",
      label:"Anil",
    },
    {
      value:"Anuj",
      label:"Anuj",
    },
    {
      value:"Lokesh",
      label:"Lokesh",
    },
  ]

  const registerId=[
    {
      value:"1121",
      label:"1121",
    },
    {
      value:"1122",
      label:"1122",
    },
    {
      value:"1123",
      label:"1123",
    },
    {
      value:"1124",
      label:"1124",
    },
  ]
  const [selectedYear,setSelectedYear]=useState("");
  const [selectedStudent,setSelectedStudent]=useState("");
  const [registrationId,setRegistrationId]=useState("");
  const [amount,setAmount]=useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  
  const navigation=useNavigation();

  const handleSubmit=()=>{

    let feeObj={
      year:selectedYear,
      registerId:registrationId,
      student:selectedStudent,
      amount:amount
    }
     navigation.navigate("FeeRecipt",{feeObj});
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <BlueHeader
        heading={"Fee"}
      />
  
      <View style={{ alignItems: "center" ,marginTop:hpx(20)}}>
        <Text style={{fontSize:getFontSize(20),color:"#194880"}}>Student Fee Management</Text>
      </View>

      <ScrollView style={{ margin: wpx(15) }}>

        <View style={{ marginTop: hpx(20) }}>

          <View style={{top:hpx(10),left:wpx(10),backgroundColor:"white",zIndex:1,width:wpx(90),alignItems:"center"}}>
            <Text style={{color:"#00B2F4",fontSize:getFontSize(15)}}>Select Year</Text>
          </View>
           <Dropdown
          style={[style.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={style.placeholderStyle}
          selectedTextStyle={style.selectedTextStyle}
          inputSearchStyle={style.inputSearchStyle}
          iconStyle={style.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={selectedYear}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSelectedYear(item.value);
            setIsFocus(false);
          }}
        />
        </View>
        <View style={{ marginTop: hpx(20) }}>
        <View style={{top:hpx(8),left:wpx(10),backgroundColor:"white",zIndex:1,width:wpx(110),alignItems:"center"}}>
            <Text style={{color:"#00B2F4",fontSize:getFontSize(15)}}> Registration ID</Text>
          </View>
        <Dropdown
          style={[style.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={style.placeholderStyle}
          selectedTextStyle={style.selectedTextStyle}
          inputSearchStyle={style.inputSearchStyle}
          iconStyle={style.iconStyle}
          data={registerId}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={registrationId}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setRegistrationId(item.value);
            setIsFocus(false);
          }}
        />
        </View>
        <View style={{ marginTop: hpx(20) }}>
        <View style={{top:hpx(8),left:wpx(10),backgroundColor:"white",zIndex:1,width:wpx(110),alignItems:"center"}}>
            <Text style={{color:"#00B2F4",fontSize:getFontSize(15)}}> Student Name</Text>
          </View>
        <Dropdown
          style={[style.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={style.placeholderStyle}
          selectedTextStyle={style.selectedTextStyle}
          inputSearchStyle={style.inputSearchStyle}
          iconStyle={style.iconStyle}
          data={studentData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={selectedStudent}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSelectedStudent(item.value);
            setIsFocus(false);
          }}
        />
        </View>
        <View style={[{ marginTop: hpx(20) }]}>
        <View style={{top:hpx(10),left:wpx(10),backgroundColor:"white",zIndex:1,width:wpx(70),alignItems:"center"}}>
            <Text style={{color:"#00B2F4",fontSize:getFontSize(15)}}>Amount</Text>
          </View>
          <TextInput
            style={[style.dropdown]}
            keyboardType='numeric'
            onChangeText={(value)=>setAmount(value)}
            value={amount}
            placeholder='Enter amount'
          />
        </View>
        <View style={{ marginTop: hpx(30) }}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={style.loginButton}>
            <Text style={style.loginText}>Pay</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

export default Fee;

const style = StyleSheet.create({
  textInput: {
    padding: wpx(8),
    borderColor: "#70707033",
    borderWidth: 2,
    borderRadius: 7,
    // backgroundColor:"white"
  },
  loginButton: {
    paddingHorizontal: wpx(40),
    paddingVertical: hpx(10),
    backgroundColor: "#00B2F4",
    marginTop: hpx(30),
    alignSelf: 'center',
    borderRadius: 10,
    // marginLeft: 20
  },
  loginText: {
    color: "white",
    fontSize: getFontSize(16)
  },
  dropdown: {
    height: hpx(55),
    // width:200,
    borderColor: '#8C8896',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: wpx(8),
  },
  icon: {
    marginRight: wpx(6),
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: wpx(22),
    top: hpx(8),
    zIndex: 9,
    paddingHorizontal: wpx(8),
    fontSize: getFontSize(14),
  },
  placeholderStyle: {
    fontSize: getFontSize(14),
    color: "#8C8896"
  },
  selectedTextStyle: {
    fontSize: getFontSize(16),
  },
  iconStyle: {
    width: wpx(20),
    // height: 20,
  },
  inputSearchStyle: {
    // height: 40,
    fontSize: getFontSize(16),
  },
})
