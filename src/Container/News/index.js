import React, {  } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BlueHeader from './../../Component/BlueHeader';
import { NewsData } from './../../../utilities/AllData/ithuntdata';
import { getFontSize, hpx, wpx } from '../../../utilities/responsive';


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
                <View style={{padding:wpx(10)}}>
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
        
        <View style={{margin:wpx(10),flex:1}}>
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
        margin:wpx(5),
        borderWidth:1,
        borderColor:"#8C889626",
        borderRadius:4
    },
    dateContainer:{
        backgroundColor:"#E5F7FE",
        padding:wpx(10)
    },
    textStyle:{
        color:"#194880",
        fontSize:getFontSize(16)
    },
    descriptionText:{
        color:"#8C8896",
        fontSize:getFontSize(14)
    },
    titleContainer:{
        paddingHorizontal:wpx(10),
        marginTop:hpx(5)
    }
})
