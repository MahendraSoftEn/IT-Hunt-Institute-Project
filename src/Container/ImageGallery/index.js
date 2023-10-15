import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { Images } from '../../../utilities/Images';
import { screenHeight, screenWidth } from '../../../utilities/responsive';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingModal from '../../Component/LoadingModal';


function ImageGallery() {

  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading,setLoading]=useState(false);
  const navigation = useNavigation();
  const [imageData, setImageData] = useState([]);
  
 useEffect(()=>{

  retrieveData();
 },[])
  const storeData = async (data) => {
    try {
      // You can store a key-value pair
      
      let array=[...imageData,data];
      const userJSON = JSON.stringify(array);
      await AsyncStorage.setItem('image', userJSON);
      console.log('Data stored successfully.');
    } catch (error) {
      console.error('Error storing data: ', error);
    }
    retrieveData();
  };
  const retrieveData = async () => {
    try {
        const data = await AsyncStorage.getItem('image');
      if (data !== null) {
        // Data is retrieved successfully
        const user = JSON.parse(data);

        setImageData(user);
        console.log("image data====>12",user);
        
      } else {
        // Data doesn't exist
        console.log('No data found.');
      }
    } catch (error) {
      console.error('Error retrieving data: ', error);
    }
  };
  const pickImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    setLoading(true);
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 5
      },
      (response) => {
        console.log(response);
        setImageData(response?.assets);
        storeData(response?.assets);
        setLoading(false);
        // setSelectedFile(response)
        // dispatch(setImageData([...imageData,...response.assets]));
      },
    )

  };


  const renderImageList = ({ item, index }) => {

    console.log("item===>",item)
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PreivewImage", { imageData: item[0]?.uri })
        }}
        style={{ margin: 7 }}>
        <Image
          source={{ uri: item[0]?.uri }}
          resizeMode='stretch'
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
    )
  }



  return (
    <View style={{flex:1}}>
      <BlueHeader
        heading={"Image Gallery"}
      />
<LoadingModal isVisible={isLoading} />
      <View style={{margin:5,flex:1}}>
          <FlatList 
          numColumns={3}
          keyExtractor={(item)=>String(item.id)}
           data={imageData}
           renderItem={renderImageList}
          />
        </View>

     
      <View style={{alignItems:'center',marginTop:20}}>
        <TouchableOpacity
          onPress={() => {
            pickImage();
          }}
          style={{padding:10,backgroundColor:"#00B2F4",borderRadius:10}}
        >
          <Text style={{fontSize:16,color:"white"}}>Upload Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ImageGallery;
