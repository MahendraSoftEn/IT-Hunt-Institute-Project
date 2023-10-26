import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { Images } from '../../../utilities/Images';
import { hpx, wpx } from '../../../utilities/responsive';

function Profile() {

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <BlueHeader
                heading={"Profile"}
            />
            <View style={{ alignItems: "center", marginTop: hpx(20), }}>
                <TouchableOpacity
                    style={{ borderWidth: 1, padding: hpx(10), borderColor: "#E6E9EB", backgroundColor: "white", elevation: 1, borderRadius: 10 }}
                >
                    <Image
                        source={Images.teacherImage1}
                        style={{ width: wpx(100), height: hpx(100), resizeMode: "stretch", borderRadius: wpx(10) }}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ width: "100%", height: 1, backgroundColor: "#E6E9EB", marginTop: hpx(20) }} />

            <View style={{ margin: hpx(20) }}>

                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View>
                    <View style={{ top: 15, left: 10, width: wpx(60), backgroundColor: "white", zIndex: 10, alignItems: "center" }}>
                        <Text style={{ color: "#00B2F4" }}>Name:</Text>
                    </View>
                    <ScrollView
                        horizontal
                        style={{ width: wpx(180), height: hpx(50), borderWidth: 1, borderColor: "#8C8896", borderRadius: 5, marginTop: hpx(10), paddingVertical: hpx(10), paddingLeft: wpx(5) }}>
                        <Text>Name mahendra tell me about yourself</Text>
                    </ScrollView>
                    </View>
                    <View>
                    <View style={{ top: 15, left: 10, width: wpx(80), backgroundColor: "white", zIndex: 10, alignItems: "center" }}>
                        <Text style={{ color: "#00B2F4" }}>Email Id:</Text>
                    </View>
                    <ScrollView
                        horizontal
                        style={{ width: wpx(180), height: hpx(50), borderWidth: 1, borderColor: "#8C8896", borderRadius: 5, marginTop: hpx(10), paddingVertical: hpx(10), paddingLeft: wpx(5) }}>
                        <Text>Name </Text>
                    </ScrollView>
                    </View>
                   
                </View>

            </View>
        </View>
    );
}

export default Profile;

