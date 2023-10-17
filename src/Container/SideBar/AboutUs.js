import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { Images } from '../../../utilities/Images';
import { dynamicSize, getFontSize, hpx, screenHeight, wpx } from '../../../utilities/responsive';


function AboutUs() {

    return (
        <View style={{ flex: 1 }}>
            <BlueHeader
                heading={"About Us"}
            />
            <ScrollView>
                <View style={{ margin: wpx(30) }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ marginRight: wpx(10) }}>
                            <Image
                                source={Images.phoneIcon}
                                style={{ width: dynamicSize(25), height: dynamicSize(25) }}

                            />
                        </View>
                        <View>
                            <Text style={{ color: "#8C8896", fontSize: getFontSize(16) }}>IT HUNT Application Version</Text>
                            <Text style={{ color: "#194880", fontSize: getFontSize(16), marginTop: hpx(6) }}>1.0.1 1</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: wpx(30), flexDirection: "row" }}>
                        <View style={{ marginRight: wpx(10) }}>
                            <Image
                                source={Images.websiteIcon}
                                style={{ width: dynamicSize(25), height: dynamicSize(25) }}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "#8C8896", fontSize: getFontSize(16) }}>Website:</Text>
                            <Text style={{ color: "#194880", fontSize: getFontSize(16), marginTop: hpx(6) }}>www.theithunt.com</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: hpx(30), flexDirection: "row" }}>
                        <View style={{ marginRight: wpx(10) }}>
                            <Image
                                source={Images.emailIcon}
                                style={{ width: dynamicSize(25), height: dynamicSize(25) }}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "#8C8896", fontSize: getFontSize(16) }}>Email ID:</Text>
                            <Text style={{ color: "#194880", fontSize: getFontSize(16), marginTop: hpx(6) }}>aim.chauhan@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: "center", height: screenHeight * 0.50, justifyContent: "flex-end" }}>
                    <Text style={{ color: '#8C8896', fontSize: getFontSize(18) }}>Powered By</Text>
                    <Text style={{ fontSize: getFontSize(15) }}>IT HUNT</Text>
                    <Image
                        source={Images.ithuntlogo}
                        style={{ width: dynamicSize(40), height: dynamicSize(40) }}
                    />
                    <View style={{}}>
                        <Text style={{ color: "#8C8896", fontSize: getFontSize(13) }}>Differ To Other And Deep Knowledge</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default AboutUs;


