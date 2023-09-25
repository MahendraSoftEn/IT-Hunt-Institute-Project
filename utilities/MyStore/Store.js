import { configureStore } from '@reduxjs/toolkit'
import ReduxSlice from './ReduxSlice'
import StudentStore from './StudentStore'
import dashboard from './Dashboard/dashboard'


export const store = configureStore({
  reducer: {
    reduxData: ReduxSlice,
    studentList:StudentStore,
    dashboardData:dashboard
    
  },
})