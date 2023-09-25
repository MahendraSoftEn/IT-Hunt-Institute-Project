import { Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { mcq_python } from '../../utilities/AllData/ithuntdata';

const width = Dimensions.get("screen").width;

function MCQQuestion() {


    const renderMCQ = ({ item, index }) => {

        return (
            <View style={{ backgroundColor: "white", borderRadius: 6, padding: 10, elevation: 4, marginTop: 10 }}>

                <View style={{ backgroundColor: "#C2EBFC", padding: 9, borderRadius: 4 }}>
                    <Text>{index + 1}) {". " + item?.question}</Text>
                </View>
                {
                    item?.option?.map((item, index) => 
                        <View style={{ margin: 10, backgroundColor: "#F1F9FF", padding: 7, width: width * 0.70 }}>
                            <Text>{item}</Text>
                        </View>
                    )
                }
                
            </View>
        )
    }



    return (
        <ScrollView style={{ backgroundColor: "#F6F7FB", padding: 10 }}>
            <View style={{}}>
                <FlatList
                    style={{ flex: 1 }}
                    data={mcq_python}
                    keyExtractor={(item) => String(item)}
                    renderItem={renderMCQ}
                />
            </View>
           

        </ScrollView>
    );
}

export default MCQQuestion;

