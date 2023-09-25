import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BlueHeader from './../../Component/BlueHeader';
import { NewsData } from './../../../utilities/AllData/ithuntdata';


 function News() {


    const NewsList=({item,index})=>{

        return(
            <View style={[styles.listContainer]}>
                <View style={[styles.dateContainer]}>
                    <Text style={[styles.textStyle]}>{item.date}</Text>
                </View>
                <View style={[styles.titleContainer]}>
                    <Text style={[styles.textStyle]}>{item.name}</Text>
                </View>
                <View style={{padding:10}}>
                    <Text style={[styles.descriptionText]}>{item.description}</Text>
                </View>
            </View>
        )
    }

  return (
    <View style={[styles.container]}>
        <BlueHeader
         heading={"News"}
        />
        
        <View style={{margin:10,flex:1}}>
            <FlatList
             data={NewsData}
             renderItem={NewsList}
            />
        </View>
    </View>
  );
}

export default News;

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"white"
    },
    listContainer:{
        margin:10,
        borderWidth:1,
        borderColor:"#8C889626",
        borderRadius:4
    },
    dateContainer:{
        backgroundColor:"#E5F7FE",
        padding:10
    },
    textStyle:{
        color:"#194880",
        fontSize:16
    },
    descriptionText:{
        color:"#8C8896",
        fontSize:14
    },
    titleContainer:{
        paddingHorizontal:10,
        marginTop:4
    }
})
