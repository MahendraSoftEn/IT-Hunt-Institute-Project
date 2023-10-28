import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { Images } from '../../../utilities/Images';
import { getFontSize, hpx, wpx } from '../../../utilities/responsive';

function Profile() {

    return (
        <View style={[styles.container]}>
            <BlueHeader
                heading={"Profile"}
            />
            <View style={[styles.imageView]}>
                <TouchableOpacity
                    style={[styles.imageContainer]}
                >
                    <Image
                        source={Images.teacherImage1}
                        style={[styles.imageStyle]}
                    />
                </TouchableOpacity>
            </View>

            <View style={[styles.borderStyle]} />

            <View style={{ margin: hpx(20) }}>

                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View>
                    <View style={[styles.labelView,{width:wpx(60)}]}>
                        <Text style={{ color: "#00B2F4" }}>Name:</Text>
                    </View>
                    <ScrollView
                        horizontal
                        style={{ width: wpx(180), height: hpx(30), borderWidth: 0.5, borderColor: "#8C8896", borderRadius: 5, marginTop: hpx(10), paddingVertical: hpx(10), paddingLeft: wpx(5) }}>
                        <Text style={{fontSize:getFontSize(14),color:"#194880"}}>Mohan Kumar</Text>
                    </ScrollView>
                    </View>
                    <View>
                    <View style={[styles.labelView,{width:wpx(80)}]}>
                        <Text style={{ color: "#00B2F4" }}>Email Id:</Text>
                    </View>
                    <ScrollView
                        horizontal
                        style={{ width: wpx(180), height: hpx(50), borderWidth: 0.5, borderColor: "#8C8896", borderRadius: 5, marginTop: hpx(10), paddingVertical: hpx(10), paddingLeft: wpx(5) }}>
                        <Text style={{fontSize:getFontSize(14),color:"#194880"}}>Mohan@gmail.com </Text>
                    </ScrollView>
                    </View>
                   
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:hpx(10)}}>
                    <View>
                    <View style={[styles.labelView,{width:wpx(50)}]}>
                        <Text style={{ color: "#00B2F4" }}>DOB:</Text>
                    </View>
                    <ScrollView
                        horizontal
                        style={{ width: wpx(180), height: hpx(50), borderWidth: 0.5, borderColor: "#8C8896", borderRadius: 5, marginTop: hpx(10), paddingVertical: hpx(10), paddingLeft: wpx(5) }}>
                        <Text style={{fontSize:getFontSize(14),color:"#194880"}}>12 jul 2002</Text>
                    </ScrollView>
                    </View>
                    <View>
                    <View style={[styles.labelView,{width:wpx(120)}]}>
                        <Text style={{ color: "#00B2F4" }}>Mobile Number:</Text>
                    </View>
                    <ScrollView
                        horizontal
                        style={{ width: wpx(180), height: hpx(50), borderWidth: 0.5, borderColor: "#8C8896", borderRadius: 5, marginTop: hpx(10), paddingVertical: hpx(10), paddingLeft: wpx(5) }}>
                        <Text style={{fontSize:getFontSize(14),color:"#194880"}}>8002345988 </Text>
                    </ScrollView>
                    </View>
                   
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:hpx(10)}}>
                    <View>
                    <View style={[styles.labelView,{width:wpx(70)}]}>
                        <Text style={{ color: "#00B2F4" }}>Course:</Text>
                    </View>
                    <ScrollView
                        horizontal
                        style={{ width: wpx(180), height: hpx(50), borderWidth: 0.5, borderColor: "#8C8896", borderRadius: 5, marginTop: hpx(10), paddingVertical: hpx(10), paddingLeft: wpx(5) }}>
                        <Text style={{fontSize:getFontSize(14),color:"#194880"}}>O Level</Text>
                    </ScrollView>
                    </View>
                    <View>
                    <View style={[styles.labelView,{width:wpx(120)}]}>
                        <Text style={{ color: "#00B2F4" }}>Registration Id</Text>
                    </View>
                    <ScrollView
                        horizontal
                        style={{ width: wpx(180), height: hpx(50), borderWidth: 0.5, borderColor: "#8C8896", borderRadius: 5, marginTop: hpx(10), paddingVertical: hpx(10), paddingLeft: wpx(5) }}>
                        <Text style={{fontSize:getFontSize(13),color:"#194880"}}>123 </Text>
                    </ScrollView>
                    </View>
                   
                </View>
                <View style={{marginTop:hpx(10)}}>
                    <View>
                    <View style={[styles.labelView,{width:wpx(70)}]}>
                        <Text style={{ color: "#00B2F4" }}>Address:</Text>
                    </View>
                    <ScrollView
                        horizontal
                        style={{  height: hpx(50), borderWidth: 0.5, borderColor: "#8C8896", borderRadius: 5, marginTop: hpx(10), paddingVertical: hpx(10), paddingLeft: wpx(5) }}>
                        <Text style={{fontSize:getFontSize(14),color:"#194880"}}>Dahiyawana Holagarh Soraon Prayagraj</Text>
                    </ScrollView>
                    </View>
                  
                   
                </View>

            </View>
        </View>
    );
}

export default Profile;

const styles=StyleSheet.create({

    container:{
        flex: 1, 
        backgroundColor: "white" 
    },
    imageView:{
        alignItems: "center",
         marginTop: hpx(20),
    },
   imageContainer:{
    borderWidth: 1,
     padding: hpx(10), 
     borderColor: "#E6E9EB",
      backgroundColor: "white",
       elevation: 1,
        borderRadius: 10 
   },
   imageStyle:{
    width: wpx(100),
     height: hpx(100),
      resizeMode: "stretch",
       borderRadius: wpx(10)
   },
   borderStyle:{
    width: "100%",
     height: 1,
      backgroundColor: "#E6E9EB",
       marginTop: hpx(20)
   },
   labelView:{
    top: 15,
     left: 10, 
      backgroundColor: "white",
       zIndex: 10,
        alignItems: "center"
   }
})

