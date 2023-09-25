import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import BlueHeader from '../../../Component/BlueHeader';
import QuestionComponent from '../../../Component/QuestionComponent';
import MCQQuestion from '../../../Component/MCQQuestion';
import { python_question } from './../../../../utilities/AllData/ithuntdata';


 function PythonQuestion(props) {

  const heading=props?.route?.params?.heading;
  const isQuestion=props?.route?.params?.isQuestion;

  return (
    <View style={{flex:1}}>
        <BlueHeader 
         heading={"Python "+heading}
        />
        <ScrollView>
        {
          isQuestion?
           <QuestionComponent question={python_question} />
           :
             <MCQQuestion />
        }
        </ScrollView>
    </View>
  );
}
export default PythonQuestion;

