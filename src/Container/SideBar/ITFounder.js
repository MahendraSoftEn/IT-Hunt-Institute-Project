import React, {  } from 'react';
import { Text, View ,Image, ScrollView} from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { dynamicSize, getFontSize, hpx, screenHeight, screenWidth, wpx } from '../../../utilities/responsive';


 function ITFounder() {

  return (
    <View style={{flex:1}}>
      <BlueHeader
       heading={"Founder Of ITHUNT"}
      />
      <ScrollView>
        <View style={{backgroundColor:"white",padding:wpx(20),alignItems:"center",justifyContent:"center",margin:wpx(10),elevation:2}}>
        <Text style={{fontSize:getFontSize(15),color:"#00509d",textAlign:'center'}}>IT HUNT THE INSTITUTE OF COMPUTER TECHNOLOGY</Text>
        </View>
        

        <View style={{alignItems:"center",marginTop:hpx(10)}}>
          
          <Image 
           source={require("../../../assets/DashBoard/SideBarIcon/ITSir.jpeg")}
           resizeMode='cover'
           style={{width:dynamicSize(300),height:dynamicSize(400)}}
          />

        </View>
       
        <View style={{margin:wpx(10),alignItems:"center",backgroundColor:"#E6E9EB",padding:wpx(10),borderRadius:20}}>
        <Text style={{color:'#386641',fontSize:getFontSize(20),fontWeight:'300'}}>Deep Knowledge and Differ to other</Text>
          <View style={{alignItems:"center"}}>
              <Text style={{fontSize:getFontSize(18),color:"#6a994e"}}>Mr. Lakshman Singh Chauhan</Text>
              <Text style={{color:"#38a3a5",fontSize:getFontSize(16),}}>Motivational Speaker</Text>
              <Text style={{color:"#0aa09e",fontSize:getFontSize(14),}}>Teacher Trainer</Text>
              <Text style={{color:"#1a759f",fontSize:getFontSize(12),}}>Life Coach</Text>
              <Text style={{color:"#2ec4b6",fontSize:getFontSize(10),}}>CEO</Text>
          </View>
         
        </View>
        </ScrollView>

    </View>
  );
}

export default ITFounder;
