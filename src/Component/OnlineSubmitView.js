import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';


function OnlineSubmitView() {


  const nonAttemptQuestion=useSelector((state)=> state.QuizData.nonAttemptQuestion);
  const correctAnswer=useSelector((state)=> state.QuizData.correctAnswer);
  const wrongAnswer=useSelector((state)=> state.QuizData.wrongAnswer);


  return (
    <View>
    <View style={[styles.buttonContainer]}>
      <View style={[styles.textView]}>
        <Text style={[styles.textStyle]}>Non Attempted Question</Text>
        <View style={[styles.countButton]}>
          <Text style={[styles.buttonTextStyle]}>{nonAttemptQuestion}</Text>
        </View>
      </View>
    </View>
    <View style={[styles.buttonContainer]}>
      <View style={[styles.textView]}>
        <Text style={[styles.textStyle]}>Correct Answer</Text>
        <View style={[styles.countButton,{backgroundColor:"green"}]}>
          <Text style={[styles.buttonTextStyle]}>{correctAnswer}</Text>
        </View>
      </View>
    </View>
    <View style={[styles.buttonContainer]}>
      <View style={[styles.textView]}>
        <Text style={[styles.textStyle]}>Wrong Answer</Text>
        <View style={[styles.countButton,{ backgroundColor: "#FF515D" }]}>
          <Text style={[styles.buttonTextStyle]}>{wrongAnswer}</Text>
        </View>
      </View>
    </View>


    </View>
  );
}

export default OnlineSubmitView;

const styles=StyleSheet.create({
  buttonContainer:{
    marginHorizontal: 10,
    alignSelf:"center"
  },
  textView:{
    padding: 10,
     borderRadius: 10
  },
  countButton:{
    backgroundColor: "grey", 
    width: 50,
    height:30,
     alignSelf: "center",
      borderRadius: 3,
       marginVertical: 10,
       justifyContent:"center"
  },
  buttonTextStyle:{
    color: "white",
     textAlign: "center",
  },
  textStyle:{
    color: "#194880",
     fontSize: 20
  }
})
