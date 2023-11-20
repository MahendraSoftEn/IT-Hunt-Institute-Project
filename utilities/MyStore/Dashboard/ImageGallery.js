
import { createSlice } from '@reduxjs/toolkit'
// import { stat } from 'react-native-fs'


 export const ImageGallery = createSlice({
  name: 'imageData',
  initialState:{
   imageList:[]
  },
  reducers: {
    setImageList(state,action){
        state.imageList=action.payload;
    },
   
    removeImageData(state,action){
     (state.imageList=[])
      
    }
  },
})

// Action creators are generated for each case reducer function
export const {removeImageData,setImageList  } = ImageGallery.actions;

export default ImageGallery.reducer;