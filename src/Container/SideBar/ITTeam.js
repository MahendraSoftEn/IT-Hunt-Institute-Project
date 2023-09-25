import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View ,FlatList,Image} from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { ITTeamData } from '../../../utilities/AllData/ithuntdata';


 function ITTeam() {


  const ListOfITTeam=({item})=>{

    return(
        <View style={{alignItems:"center",marginTop:13}}>
            <View>
                <Image
                 source={item.image}
                 style={{width:120,height:120}}
                />
                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={{color:"#194880",fontSize:16}}>{item.name}</Text>
                    <Text style={{color:"#8C8896",fontSize:12}}>{item.designation}</Text>
                </View>
        </View>
    )
  }


  return (
    <View style={{flex:1}}>
        <BlueHeader
         heading={"IT Team"}
        />
        <View style={{margin:10,flex:1,backgroundColor:"white",padding:10,borderRadius:5}}>
            <FlatList
            data={ITTeamData}
            renderItem={ListOfITTeam}
            />
        </View>
    </View>
  );
}

export default ITTeam;