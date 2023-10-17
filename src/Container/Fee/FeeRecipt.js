import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { Images } from '../../../utilities/Images';
import { getFontSize, hpx, screenHeight, screenWidth, wpx } from '../../../utilities/responsive';
import { useRef } from 'react';
import ViewShot, { captureRef } from 'react-native-view-shot';
import Share from 'react-native-share'


function FeeRecipt(props) {


    console.log("props===>", props.route.params.feeObj)
    const data = props.route.params.feeObj;


    const viewref=useRef();

    const ShareImage=async ()=>{
    
    try{
      const uri=await captureRef(viewref,{
        format:"jpg",
        quality:0.9,
      });
      
      await Share.open({url:uri});
      
    }
    catch(err){
      
      console.log("err===>",err);
    }
    }



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <BlueHeader
                heading={"Fee Recipt"}
            />
            <ViewShot ref={viewref}>
            <View style={{backgroundColor:"white",paddingVertical:hpx(30)}}>
            <View style={{ alignItems: "center", marginTop: hpx(20),backgroundColor:"white" }} >
                <Image
                    source={Images.ithuntlogo}
                    resizeMode='contain'
                    style={{ width: wpx(140), height: hpx(140), borderRadius: wpx(80) }}

                />
            </View>
            <View style={{ marginTop: hpx(30),backgroundColor:"white" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <View>
                        <Text style={{ color: "#194880", fontSize: getFontSize(16) }}>Paid year:</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#8C8896", fontSize: getFontSize(16) }}>{data.year}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: hpx(20) }}>
                    <View>
                        <Text style={{ color: "#194880", fontSize: getFontSize(16) }}> Registration Id:</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#8C8896", fontSize: getFontSize(16) }}>{data.registerId}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: hpx(20) }}>
                    <View>
                        <Text style={{ color: "#194880", fontSize: getFontSize(16) }}> Student Name:</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#8C8896", fontSize: getFontSize(16) }}>{data.student}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: hpx(20) }}>
                    <View>
                        <Text style={{ color: "#194880", fontSize: getFontSize(16) }}> Paid Amount:</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#8C8896", fontSize: getFontSize(16) }}>{data.amount}</Text>
                    </View>
                </View>
            </View>
            </View>
            </ViewShot>
            <TouchableOpacity 
            onPress={ShareImage}
            style={{
                paddingHorizontal: wpx(30),
                paddingVertical: hpx(12),
                backgroundColor: "#00B2F4",
                alignSelf: 'center',
                borderRadius: 10,
                marginTop:hpx(40)
            }}>
                <Text style={{color:"white",fontSize:getFontSize(14),fontWeight:'bold'}}>Share Recipt</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FeeRecipt;
