import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import BlueHeader from '../../../Component/BlueHeader';
import MCQQuestion from '../../../Component/MCQQuestion';
import QuestionComponent from '../../../Component/QuestionComponent';
import { HTML_question } from '../../../../utilities/AllData/ithuntdata';


 function HTMLQuestion(props) {

  const heading=props?.route?.params?.heading;
  const isQuestion=props?.route?.params?.isQuestion;
  return (
    <View>
        <BlueHeader 
         heading={"HTML "+heading}
        />
          {
          isQuestion?
           <QuestionComponent question={HTML_question} />
           :
             <MCQQuestion />
        }
    </View>
  );
}
export default HTMLQuestion;

