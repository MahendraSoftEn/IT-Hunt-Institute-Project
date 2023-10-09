import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Text, View,Image, TouchableOpacity, Modal } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { Images } from '../../../utilities/Images';
import { screenHeight, screenWidth } from '../../../utilities/responsive';
import { useNavigation } from '@react-navigation/native';


 function ImageGallery() {

    const [visible,setVisible]=useState(false);
    const [selectedImage,setSelectedImage]=useState("");
    const navigation=useNavigation();

  const data=[
    {
      image:Images.teacherImage1
    },
    {
      image:Images.teacherImage2
    },
    {
      image:Images.teacherImage3
    },
    {
      image:Images.teacherImage4
    },
    {
      image:Images.teacherImage4
    },
    {
      image:Images.teacherImage4
    },
    {
      image:Images.teacherImage2
    },
    {
      image:Images.teacherImage3
    },
    {
      image:Images.teacherImage4
    },
  ];

  const renderImageList=({item,index})=>{

    return(
      <TouchableOpacity 
       onPress={()=>{
        navigation.navigate("PreivewImage",{imageData:item?.image})
       }}
      style={{margin:10}}>
         <Image
          source={item.image}
          resizeMode='stretch'
          style={{width:100,height:100}}
         />
      </TouchableOpacity>
    )
    }
  return (
    <View>
        <BlueHeader
         heading={"Image Gallery"}
        />
        
        <View style={{margin:3}}>
          <FlatList 
          numColumns={3}
          keyExtractor={(item)=>String(item)}
           data={data}
           renderItem={renderImageList}
          />
        </View>
        <View>
       
        </View>
    </View>
  );
}

export default ImageGallery;
