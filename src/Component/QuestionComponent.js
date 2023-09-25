import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { python_question } from '../../utilities/AllData/ithuntdata';

  
  const screenWidth=Dimensions.get("screen").width;
  const screenHeight=Dimensions.get("screen").height;

 function QuestionComponent(props) {


   const renderQuestionData=({item,index})=>{

    return(
        <View style={{marginTop:10,width:screenWidth*0.90,backgroundColor:"white",padding:10,borderRadius:5}}>
                  <Text style={{fontSize:15}}>{index+1+". "+item.question}</Text>  
        </View>
    )
   }



  return (
    <View style={{backgroundColor:"#8C889626",padding:10,alignItems:"center"}}>
        <FlatList
         data={props?.question}
         renderItem={renderQuestionData}
        />
    </View>
  );
}

export default QuestionComponent;
