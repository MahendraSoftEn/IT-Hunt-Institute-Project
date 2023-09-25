import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import BlueHeader from '../../../Component/BlueHeader';
import QuestionComponent from '../../../Component/QuestionComponent';
import MCQQuestion from '../../../Component/MCQQuestion';
import { javascript_question } from '../../../../utilities/AllData/ithuntdata';

 function JavascriptQuestion(props) {

  const heading=props?.route?.params?.heading;
  const isQuestion=props?.route?.params?.isQuestion;

  return (
    <View>
        <BlueHeader
         heading={"Javascript "+heading}
        />
         {
          isQuestion?
           <QuestionComponent question={javascript_question} />
           :
             <MCQQuestion />
        }
    </View>
  );
}
export default JavascriptQuestion;
