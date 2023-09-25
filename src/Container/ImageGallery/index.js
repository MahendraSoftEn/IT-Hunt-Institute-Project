import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Text, View,Image, TouchableOpacity, Modal } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { Images } from '../../../utilities/Images';
import { screenHeight, screenWidth } from '../../../utilities/responsive';


 function ImageGallery() {

    const [visible,setVisible]=useState(false);
    const [selectedImage,setSelectedImage]=useState("");

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
        setSelectedImage(item.image);
        setVisible(true)
       }}
      style={{margin:10}}>
         <Image
          source={item.image}
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
        <Modal
        visible={visible}
        transparent={true}
        >
            <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.5)",marginTop:screenHeight*0.02}}>
              <TouchableOpacity
              style={{backgroundColor:"white",flexDirection:"row",justifyContent:"space-between",paddingHorizontal:10,borderBottomWidth:1,borderColor:"#8C8896"}}
               onPress={()=>{
                setVisible(false)
               }}
              >
                <Text style={{fontSize:18,paddingHorizontal:10}}>{"Back"}</Text>
                <Text>20 Apr 2023</Text>

              </TouchableOpacity>
              {
                selectedImage?
                <Image 
                source={selectedImage}
                style={{width:screenWidth,height:screenHeight}}
               />
               :
                null
              }
              
            
            </View>

        </Modal>
        </View>
    </View>
  );
}

export default ImageGallery;
