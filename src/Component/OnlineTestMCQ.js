import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';
import BlueHeader from './BlueHeader';
import { python_question } from '../../utilities/AllData/ithuntdata';
import OnlineSubmitView from './OnlineSubmitView';



function OnlineTestMCQ() {

  const mcqData = ["Object Oriented", "Procedure Language", "Both", "None of the above"];
  const [selectedOption, setSelectionOption] =useState(null);
  const [visible,setVisible]=useState(false);
  const [questionIndex,setQuestionIndex]=useState(0);
  const [submit,setSubmit]=useState(false);
  const [submitView,setSubmitVisible]=useState(false);


  const nextFunction=()=>{
    if(questionIndex<python_question.length-1){
      setQuestionIndex(questionIndex+1);
      setSelectionOption(null);
      setVisible(false);
      
    }else{
      setSubmit(true);
    }

  }
  return (
    <View style={{ flex: 1 }}>
      <BlueHeader
        heading={"Python Online Test "}
      />
      <View style={[styles.container]}>

      <View style={[styles.buttonContainer]}>
          <TouchableOpacity style={{ padding: 10, backgroundColor: "#00B2F4", borderRadius: 10 }}>
            <Text style={{ color: "white" }}>Correct Answer</Text>
            <Text style={{color:"white",textAlign:"center"}}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, backgroundColor: "#FF515D", borderRadius: 10 }}>
            <Text style={{ color: "white" }}>Wrong Answer</Text>
            <Text style={{color:"white",textAlign:"center"}}>0</Text>
          </TouchableOpacity>
        </View>

        {
          submitView?
            <OnlineSubmitView />
        :
<View style={[styles.optionViewContainer]}>
  
       
        <View style={[styles.questionOptionContainer]}>

          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.questionText]}>{(questionIndex+1+".") + python_question[questionIndex]?.question}</Text>
          </View>
          <View style={[styles.optionContainer]}>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={[styles.circleButton,{backgroundColor:selectedOption==0&&visible?"green":"white"}]}
                onPress={()=>{
                  setSelectionOption(0);
                  setVisible(true);
                }}
              />
              <View>
                <Text style={{ fontSize: 16, color: "#8C8896" }}> {python_question[questionIndex]?.option[0]}</Text>
              </View>

            </View>

            <View style={[styles.optionMainView]}>
              <TouchableOpacity style={[styles.circleButton,{backgroundColor:selectedOption==1&&visible?"green":"white"}]}
                 onPress={()=>{
                  setSelectionOption(1);
                  setVisible(true);
                }}
              />
              <View style={{}}>
                <Text style={[styles.optionText]}> {python_question[questionIndex]?.option[1]}</Text>
              </View>
            </View>

            <View style={[styles.optionMainView]}>
              <TouchableOpacity style={[styles.circleButton,{backgroundColor:selectedOption==2&&visible?"green":"white"}]} 
                onPress={()=>{
                  setSelectionOption(2);
                  setVisible(true);
                }}
              />
              <View style={{}}>
                <Text style={[styles.optionText]}> {python_question[questionIndex]?.option[2]}</Text>
              </View>
            </View>

            <View style={[styles.optionMainView]}>
              <TouchableOpacity style={[styles.circleButton,{backgroundColor:selectedOption==3&&visible?"green":"white"}]}
                onPress={()=>{
                  setSelectionOption(3);
                  setVisible(true);
                }}
              />
              <View style={{}}>
                <Text style={[styles.optionText]}> {python_question[questionIndex]?.option[3]}</Text>
              </View>
            </View>

          </View>
        </View>

        <TouchableOpacity style={[styles.nextButton]}
          onPress={()=>{

            if(submit){
              setSubmitVisible(true);
            }else{
              nextFunction();
            }
           
            
          }}
        >
          <Text style={{fontSize:16,color:"white"}}>{submit?"Submit":"Next"}</Text>
        </TouchableOpacity>
      </View>
      }
      
</View>
    </View>
  );
}

export default OnlineTestMCQ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 10
  },
  optionViewContainer:{
    backgroundColor:"white",
    elevation:4,
    padding:1,
    marginTop:10
  },
  questionOptionContainer: {
    // borderWidth: 1,
    borderColor: "#8C889626",
    marginHorizontal: 4,
    marginTop: 10,
    borderRadius: 4,
    padding: 10,
    // elevation: 5,
    backgroundColor: "white"
  },
  questionText: {
    fontSize: 18,
    textAlign: 'center',
    color: "#194880"
  },
  optionContainer: {
    marginStart: 20,
    marginTop: 20,
    alignItems: "flex-start"
  },
  optionMainView: {
    flexDirection: "row",
    marginTop: 7
  },
  optionText: {
    fontSize: 16,
    color: "#8C8896"
  },
  circleButton: {
    borderWidth: 0.4,
    borderColor: "#8C8896",
    borderRadius: 50,
    width: 20,
    height: 20,
    marginRight: 10
  },
  nextButton:{
    backgroundColor:"#194880",
    padding:10,
    alignSelf:"flex-end",
    margin:10,
    paddingHorizontal:20,
    borderRadius:10
  }
})