import { createSlice } from '@reduxjs/toolkit'
// import { stat } from 'react-native-fs'


 export const dashboard = createSlice({
  name: 'dashboarddata',
  initialState:{
    registrationData:[],
    count:0,
    isloggedIn:false
  },
  reducers: {
    setRegistrationData(state,action){
        // state.registrationData=action.payload;
        var exists = state.registrationData.some(item => item.id === action.payload.id);
        if(!exists){
          state.registrationData.push(action.payload)
        }
    },
    setCount(state,action){
      state.count=action.payload;
    },
    setIsLoggedIn(state,action){
      state.isloggedIn=action.payload;
    },
    removeState(state,action){
      state.registrationData=[];
      state.isloggedIn=false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRegistrationData,removeState,setCount,setIsLoggedIn } = dashboard.actions

export default dashboard.reducer;