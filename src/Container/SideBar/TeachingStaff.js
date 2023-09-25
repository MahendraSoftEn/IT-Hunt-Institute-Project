import React, {  } from 'react';
import { Text, View,Image,FlatList } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { teachingStaff } from '../../../utilities/AllData/ithuntdata';


 function TeachingStaff() {


  const ListOfTeachingStaff=({item})=>{

    return(
      <View style={{borderRadius:3,borderWidth:1,borderColor:"#e5e5e5",padding:10,marginTop:7,backgroundColor:"white",flexDirection:"row",justifyContent:"space-between"}}>
        <View>
        <Image
         source={item.teacherImage}
         style={{width:60,height:80}}
        />
        </View>
        <View style={{flexDirection:"row"}}>
          <View style={{width:100}}>
          <Text style={{color:"#194880"}}>Teacher Name:</Text>
          <Text style={{color:"#194880"}}>Designation:</Text>
          <Text style={{color:"#194880"}}>Subject:</Text>
          <Text style={{color:"#194880"}}>Qualification:</Text>
          </View>
          <View style={{width:140}}>
          <Text style={{color:"#8C8896"}}> {item.name}</Text>
          <Text style={{color:"#8C8896"}}>{item.designation}</Text>
          <Text style={{color:"#8C8896"}}>{item.subject}</Text>
          <Text style={{color:"#8C8896"}}>{item.qualification}</Text>
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
        <View style={{margin:10,flex:1}}>
          <FlatList 
          data={teachingStaff}
          renderItem={ListOfTeachingStaff}

          />
        </View>
    </View>
  );
}

export default TeachingStaff;
