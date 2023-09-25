import React, {  } from 'react';
import { Text, View ,Image, ScrollView} from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { screenHeight, screenWidth } from '../../../utilities/responsive';


 function ITFounder() {

  return (
    <View style={{flex:1}}>
      <BlueHeader
       heading={"Founder Of ITHUNT"}
      />
      <ScrollView>
        <View style={{backgroundColor:"white",padding:20,alignItems:"center",justifyContent:"center",margin:10,elevation:2}}>
        <Text style={{fontSize:15,color:"#00509d",textAlign:'center'}}>IT HUNT THE INSTITUTE OF COMPUTER TECHNOLOGY</Text>
        </View>
        

        <View style={{alignItems:"center",marginTop:10}}>
          
          <Image 
           source={require("../../../assets/DashBoard/SideBarIcon/ITSir.jpeg")}
           resizeMode='cover'
           style={{width:screenWidth-20,height:screenHeight*0.50}}
          />

        </View>
       
        <View style={{margin:10,alignItems:"center",backgroundColor:"#E6E9EB",padding:10,borderRadius:20}}>
        <Text style={{color:'#386641',fontSize:18,fontWeight:'300'}}>Deep Knowledge and Differ to other</Text>
          <View style={{alignItems:"center"}}>
              <Text style={{fontSize:16,color:"#6a994e"}}>Mr. Lakshman Singh Chauhan</Text>
              <Text style={{color:"#38a3a5"}}>Motivational Speaker</Text>
              <Text style={{color:"#0aa09e"}}>Teacher Trainer</Text>
              <Text style={{color:"#1a759f"}}>Life Coach</Text>
              <Text style={{color:"#2ec4b6"}}>CEO</Text>
          </View>
         
        </View>
        </ScrollView>

    </View>
  );
}

export default ITFounder;
