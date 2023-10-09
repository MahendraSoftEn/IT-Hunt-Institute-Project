import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';
import BlueHeader from './BlueHeader';
import { python_question } from '../../utilities/AllData/ithuntdata';
import OnlineSubmitView from './OnlineSubmitView';
import { useDispatch, useSelector } from 'react-redux';
import { removeQuizState, setAttemptQuestion, setCorrectAnswer, setNonAttemptQuestion, setWrongAnswer } from '../../utilities/MyStore/MCQTest/QuizData';




function OnlineTestMCQ(props) {

   const OnlineTestData=props?.route?.params?.data;
   const heading=props?.route?.params?.heading;
  const dispatch = useDispatch();
  const [selectedOption, setSelectionOption] = useState(null);
  const [visible, setVisible] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [submitView, setSubmitVisible] = useState(false);


  useEffect(() => {

    dispatch(removeQuizState());
  }, [])

  const attemptQuestion = useSelector((state) => state.QuizData.attemptQuestion);
  const nonAttemptQuestion = useSelector((state) => state.QuizData.nonAttemptQuestion);
  const correctAnswer = useSelector((state) => state.QuizData.correctAnswer);
  const wrongAnswer = useSelector((state) => state.QuizData.wrongAnswer);


  const nextFunction = () => {
    if (questionIndex < OnlineTestData.length - 1) {

      if (selectedOption != null) {
        dispatch(setAttemptQuestion(attemptQuestion + 1));
      } else {
        dispatch(setNonAttemptQuestion(nonAttemptQuestion + 1));
      }
      checkAnswerCorrect();
      setQuestionIndex(questionIndex + 1);
      setSelectionOption(null);
      setVisible(false);
      if (questionIndex == OnlineTestData.length - 2) {
        setSubmit(true);
      }

    } else {
      if (selectedOption != null) {
        checkAnswerCorrect();
        dispatch(setAttemptQuestion(attemptQuestion + 1));
      } else {
        dispatch(setNonAttemptQuestion(nonAttemptQuestion + 1));
      }

    }

  }

  const checkAnswerCorrect = () => {

    if ((selectedOption + 1) == OnlineTestData[questionIndex].answer) {
      
      dispatch(setCorrectAnswer(1 + correctAnswer));
      
    } else {
      dispatch(setWrongAnswer(wrongAnswer + 1));
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <BlueHeader
        heading={heading}
      />
      <View style={[styles.container]}>

        <View style={[styles.buttonContainer]}>
          <View style={{ padding: 10, borderRadius: 10 }}>
            <Text style={{ color: "#194880", fontSize: 20 }}>Attempted Question</Text>
            <View style={{ backgroundColor: "#00B2F4", width: 50, height: 30, justifyContent: "center", alignSelf: "center", borderRadius: 3, marginVertical: 10 }}>
              <Text style={{ color: "white", textAlign: "center", }}>{attemptQuestion}</Text>
            </View>

          </View>

        </View>

        {
          submitView ?
            <OnlineSubmitView />
            :
            <View style={[styles.optionViewContainer]}>
              <View style={[styles.questionOptionContainer]}>
                <View style={{ alignItems: 'center' }}>
                  <Text style={[styles.questionText]}>{(questionIndex + 1 + ".") + OnlineTestData[questionIndex]?.question}</Text>
                </View>
                <View style={[styles.optionContainer]}>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={[styles.circleButton, { backgroundColor: selectedOption == 0 && visible ? "green" : "white" }]}
                      onPress={() => {
                        setSelectionOption(0);
                        setVisible(true);
                      }}
                    />
                    <View style={{width:250}}>
                      <Text style={{ fontSize: 16, color: "#8C8896" }}> {OnlineTestData[questionIndex]?.option[0]}</Text>
                    </View>
                  </View>
                  <View style={[styles.optionMainView]}>
                    <TouchableOpacity style={[styles.circleButton, { backgroundColor: selectedOption == 1 && visible ? "green" : "white" }]}
                      onPress={() => {
                        setSelectionOption(1);
                        setVisible(true);
                      }}
                    />
                    <View style={{width:250}}>
                      <Text style={[styles.optionText]}> {OnlineTestData[questionIndex]?.option[1]}</Text>
                    </View>
                  </View>
                  <View style={[styles.optionMainView]}>
                    <TouchableOpacity style={[styles.circleButton, { backgroundColor: selectedOption == 2 && visible ? "green" : "white" }]}
                      onPress={() => {
                        setSelectionOption(2);
                        setVisible(true);
                      }}
                    />
                    <View style={{width:250}}>
                      <Text style={[styles.optionText]}> {OnlineTestData[questionIndex]?.option[2]}</Text>
                    </View>
                  </View>
                  <View style={[styles.optionMainView]}>
                    <TouchableOpacity style={[styles.circleButton, { backgroundColor: selectedOption == 3 && visible ? "green" : "white" }]}
                      onPress={() => {
                        setSelectionOption(3);
                        setVisible(true);
                      }}
                    />
                    <View style={{width:250}}>
                      <Text style={[styles.optionText]}> {OnlineTestData[questionIndex]?.option[3]}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={[styles.nextButton]}
                onPress={() => {
                  if (submit) {
                    nextFunction();
                    setSubmitVisible(true);
                  } else {
                    nextFunction();
                  }
                }}
              >
                <Text style={{ fontSize: 16, color: "white" }}>{submit ? "Submit" : "Next"}</Text>
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
    // justifyContent: "space-between",
    // flexDirection: "row",
    marginHorizontal: 10,
    alignSelf: "center"
  },
  optionViewContainer: {
    backgroundColor: "white",
    elevation: 4,
    padding: 1,
    marginTop: 10
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
  nextButton: {
    backgroundColor: "#194880",
    padding: 10,
    alignSelf: "flex-end",
    margin: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  }
})