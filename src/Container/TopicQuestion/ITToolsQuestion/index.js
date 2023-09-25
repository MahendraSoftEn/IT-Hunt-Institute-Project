import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import BlueHeader from '../../../Component/BlueHeader';
import QuestionComponent from '../../../Component/QuestionComponent';
import MCQQuestion from '../../../Component/MCQQuestion';
import { IT_Tools_question } from '../../../../utilities/AllData/ithuntdata';


 function ITToolsQuestion(props) {

  const heading=props?.route?.params?.heading;
  const isQuestion=props?.route?.params?.isQuestion;

  return (
    <View>
        <BlueHeader
         heading={"IT Tool "+heading}
        />
          {
          isQuestion?
           <QuestionComponent question={IT_Tools_question} />
           :
             <MCQQuestion />
        }
    </View>
  );
}
export default ITToolsQuestion;

