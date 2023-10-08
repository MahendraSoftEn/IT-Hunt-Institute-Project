
import { createSlice } from '@reduxjs/toolkit'
// import { stat } from 'react-native-fs'


 export const QuizData = createSlice({
  name: 'quizData',
  initialState:{
    attemptQuestion:0,
    nonAttemptQuestion:0,
    correctAnswer:0,
    wrongAnswer:0,
  },
  reducers: {
    setAttemptQuestion(state,action){
        state.attemptQuestion=action.payload;
    },
    setNonAttemptQuestion(state,action){
        state.nonAttemptQuestion=action.payload;
    },
    setCorrectAnswer(state,action){
      console.log("action===>",action)
        state.correctAnswer=action.payload;
    },
    setWrongAnswer(state,action){
        state.wrongAnswer=action.payload;
    },
    removeQuizState(state,action){
      state.attemptQuestion=0,
      state.nonAttemptQuestion=0,
      state.correctAnswer=0,
      state.wrongAnswer=0
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { removeQuizState,setAttemptQuestion,setNonAttemptQuestion,setCorrectAnswer,setWrongAnswer } = QuizData.actions;

export default QuizData.reducer;