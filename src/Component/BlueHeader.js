import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View,Image, Dimensions } from 'react-native';
import { COLORS } from '../../utilities/Colors';
import { useNavigation } from '@react-navigation/native';
import { dynamicSize, getFontSize, hpx, wpx } from '../../utilities/responsive';

const height=Dimensions.get("screen").height;
 function BlueHeader(props) {


  const navigation=useNavigation();

  
  return (
    <View 
     style={{height:hpx(70),backgroundColor:COLORS.SECONDARY,justifyContent:"center",paddingLeft:wpx(20)}}
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
           style={{width:dynamicSize(20),height:dynamicSize(20),tintColor:"white",marginRight:wpx(10),marginTop:hpx(5)}}
          />
        </TouchableOpacity>
        <Text style={{color:"white",fontSize:getFontSize(20)}}>{props.heading}</Text>
       </View>
        
    </View>
  );
}

export default BlueHeader;
