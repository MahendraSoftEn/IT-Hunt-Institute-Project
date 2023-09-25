import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View,Image, Dimensions } from 'react-native';
import { COLORS } from '../../utilities/Colors';
import { useNavigation } from '@react-navigation/native';

const height=Dimensions.get("screen").height;
 function BlueHeader(props) {


  const navigation=useNavigation();

  
  return (
    <View 
     style={{height:height*0.07,backgroundColor:COLORS.SECONDARY,justifyContent:"center",paddingLeft:20}}
     >
      {/* <View style={{height:height*0.03}} /> */}
       <View style={{flexDirection:"row"}}>
       <TouchableOpacity 
        onPress={()=>{
          navigation.goBack();
        }}
       style={{}}>
          <Image
           source={require('../../assets/DashBoard/back.png')}
           style={{width:20,height:20,tintColor:"white",marginRight:10,marginTop:4}}
          />
        </TouchableOpacity>
        <Text style={{color:"white",fontSize:20}}>{props.heading}</Text>
       </View>
        
    </View>
  );
}

export default BlueHeader;
