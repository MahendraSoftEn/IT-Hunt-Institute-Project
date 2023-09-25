import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View,Image, ScrollView, StyleSheet } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { Images } from '../../../utilities/Images';
import { screenHeight } from '../../../utilities/responsive';


 function AboutUs() {

  return (
    <View style={{flex:1}}>
        <BlueHeader
         heading={"About Us"}
        />
        <ScrollView>
        <View style={{margin:screenHeight*0.05}}>
         <View style={{flexDirection:"row"}}>
            <View style={{marginRight:10}}>
                <Image
                 source={Images.phoneIcon}
                 style={{width:25,height:25}}

                />
            </View>
            <View>
                <Text style={{color:"#8C8896",fontSize:14}}>IT HUNT Application Version:</Text>
                <Text style={{color:"#194880",fontSize:16,marginTop:5}}>1.0.1 1</Text>
            </View>
         </View>
         <View style={{marginTop:screenHeight*0.04,flexDirection:"row"}}>
            <View style={{marginRight:10}}>
                <Image
                 source={Images.websiteIcon}
                 style={{width:25,height:25}}
                />
            </View>
            <View>
                <Text style={{color:"#8C8896",fontSize:14}}>Website:</Text>
                <Text style={{color:"#194880",fontSize:16, marginTop:5}}>www.theithunt.com</Text>
            </View>
         </View>
         <View style={{marginTop:screenHeight*0.04,flexDirection:"row"}}>
            <View style={{marginRight:10}}>
                <Image
                 source={Images.emailIcon}
                 style={{width:25,height:25}}
                />
            </View>
            <View>
                <Text style={{color:"#8C8896",fontSize:14}}>Email ID:</Text>
                <Text style={{color:"#194880",fontSize:16,marginTop:5}}>aim.chauhan@gmail.com</Text>
            </View>
         </View>
         </View>
         <View style={{alignItems:"center",height:screenHeight*0.50,justifyContent:"flex-end"}}>
            <Text style={{color:'#8C8896',fontSize:14}}>Powered By</Text>
            <Text>IT HUNT</Text>
            <Image 
              source={Images.ithuntlogo}
              style={{width:35,height:35}}
            />
            <View style={{}}>
                <Text style={{color:"#8C8896",fontSize:13}}>Differ To Other And Deep Knowledge</Text>
            </View>
         </View>
        </ScrollView>
    </View>
  );
}

export default AboutUs;

const styles=StyleSheet.create({
    
})
