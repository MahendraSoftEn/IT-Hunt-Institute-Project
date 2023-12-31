import { configureStore } from '@reduxjs/toolkit'
import ReduxSlice from './ReduxSlice'
import StudentStore from './StudentStore'
import dashboard from './Dashboard/dashboard'
import QuizData from './MCQTest/QuizData'
import ImageGallery from './Dashboard/ImageGallery'


export const store = configureStore({
  reducer: {
    reduxData: ReduxSlice,
    studentList:StudentStore,
    dashboardData:dashboard,
    QuizData:QuizData,
    imageData:ImageGallery
    
  },
})