import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View ,FlatList,Image} from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { ITTeamData } from '../../../utilities/AllData/ithuntdata';
import { dynamicSize, getFontSize, hpx, wpx } from '../../../utilities/responsive';


 function ITTeam() {


  const ListOfITTeam=({item})=>{

    return(
        <View style={{alignItems:"center",marginTop:hpx(14)}}>
            <View>
                <Image
                 source={item.image}
                 style={{width:dynamicSize(120),height:dynamicSize(120)}}
                />
                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={{color:"#194880",fontSize:getFontSize(16)}}>{item.name}</Text>
                    <Text style={{color:"#8C8896",fontSize:getFontSize(14)}}>{item.designation}</Text>
                </View>
        </View>
    )
  }


  return (
    <View style={{flex:1}}>
        <BlueHeader
         heading={"IT Team"}
        />
        <View style={{margin:wpx(10),flex:1,backgroundColor:"white",padding:wpx(10),borderRadius:5}}>
            <FlatList
            data={ITTeamData}
            renderItem={ListOfITTeam}
            />
        </View>
    </View>
  );
}

export default ITTeam;