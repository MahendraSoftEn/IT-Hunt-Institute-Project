import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { Images } from '../../../utilities/Images';
import { screenHeight, screenWidth } from '../../../utilities/responsive';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingModal from '../../Component/LoadingModal';
import { removeImageData, setImageList } from '../../../utilities/MyStore/Dashboard/ImageGallery';
import { useDispatch, useSelector } from 'react-redux';


function ImageGallery() {

  const dispatch=useDispatch();
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading,setLoading]=useState(false);
  const navigation = useNavigation();
  const [imageData, setImageData] = useState([]);

  const imageList=useSelector(state=>state.imageData.imageList);
  console.log("imageList===>",imageList)
  
 useEffect(()=>{

  // retrieveData();
  // removeData();
  // dispatch(removeImageData())
  
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
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('image');
      console.log('Data removed successfully.');
    } catch (error) {
      console.error('Error removing data: ', error);
    }
  };
  const retrieveData = async () => {
    try {
     
        const data = await AsyncStorage.getItem('image');
        
      if (data !== null) {
        // Data is retrieved successfully
        const user = JSON.parse(data);
       
        setImageData(user);
                
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
        includeBase64: true,
        selectionLimit: 5
      },
      (response) => {
        
        setImageData(response?.assets);
        storeData(response?.assets);
        setLoading(false);
        // setSelectedFile(response)
        dispatch(setImageList([...imageList,...response.assets]));
      },
    )

  };


  const renderImageList = ({ item, index }) => {

    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PreivewImage", { imageData: item?.uri })
        }}
        style={{ margin: 7 }}
        key={item.id}
        >

        <Image
          source={{ uri: item?.uri }}
          resizeMode='stretch'
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
    )
  }

  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={{flex:1}}>
      <BlueHeader
        heading={"Image Gallery"}
      />
<LoadingModal isVisible={isLoading} />
      <View style={{margin:5,flex:1}}>
       
          <FlatList 
          numColumns={3}
          keyExtractor={keyExtractor}
           data={imageList}
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
