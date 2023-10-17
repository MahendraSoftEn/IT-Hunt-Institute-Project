import React, {  } from 'react';
import { Text, View,Image,FlatList } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { teachingStaff } from '../../../utilities/AllData/ithuntdata';
import { dynamicSize, getFontSize, hpx, wpx } from '../../../utilities/responsive';


 function TeachingStaff() {


  const ListOfTeachingStaff=({item})=>{

    return(
      <View style={{borderRadius:3,borderWidth:1,borderColor:"#e5e5e5",padding:wpx(10),marginTop:hpx(7),backgroundColor:"white",flexDirection:"row",justifyContent:"space-between"}}>
        <View>
        <Image
         source={item.teacherImage}
         resizeMode='contain'
         style={{width:dynamicSize(60),height:dynamicSize(60)}}
        />
        </View>
        <View style={{flexDirection:"row"}}>
          <View style={{width:wpx(150),alignItems:"center"}}>
          <Text style={{color:"#194880",fontSize:getFontSize(14)}}>Teacher Name:</Text>
          <Text style={{color:"#194880",fontSize:getFontSize(14)}}>Designation:</Text>
          <Text style={{color:"#194880",fontSize:getFontSize(14)}}>Subject:</Text>
          <Text style={{color:"#194880",fontSize:getFontSize(14)}}>Qualification:</Text>
          </View>
          <View style={{width:wpx(170)}}>
          <Text style={{color:"#8C8896",fontSize:getFontSize(14)}}> {item.name}</Text>
          <Text style={{color:"#8C8896",fontSize:getFontSize(14)}}>{item.designation}</Text>
          <Text style={{color:"#8C8896",fontSize:getFontSize(14)}}>{item.subject}</Text>
          <Text style={{color:"#8C8896",fontSize:getFontSize(14)}}>{item.qualification}</Text>
          </View>
         
        </View>
       
      </View>
    )
  }
  return (
    <View style={{flex:1}}>
        <BlueHeader 
         heading={"Teaching Staff"}
        />
        <View style={{margin:wpx(10),flex:1}}>
          <FlatList 
          data={teachingStaff}
          renderItem={ListOfTeachingStaff}

          />
        </View>
    </View>
  );
}

export default TeachingStaff;
