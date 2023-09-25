import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import SideBarComponent from './SideBar';
import dashBoardStyle from './dashboardStyle';
import { moduelData, topic } from '../../../../utilities/AllData/ithuntdata';
import { Courses } from '../../../../utilities/AllData/ithuntdata';
import { teachingStaff } from '../../../../utilities/AllData/ithuntdata';
import { View, Text, Image, dashBoardStylehee, TouchableOpacity, FlatList, ScrollView, LogBox, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
function NewDashBoard() {

    const [visible, setVisible] = useState(false);
    const navigation = useNavigation();

    console.log("visible===>", visible)
    useEffect(() => {
        LogBox.ignoreAllLogs();
        navigation.addListener("focus", () => {
            setVisible(false);
        });
        const unsubscribe = () => navigation.removeListener("focus");
        return unsubscribe;

    }, [])

    const getRedirectTopicComponent = (id) => {

        switch (id) {

            case 1:
                return "PythonQuestion";
            case 2:
                return "JavascriptQuestion";
            case 3:
                return "HTMLQuestion";
            case 4:
                return "ITToolsQuestion";
            default:
                return "NewDashBoard";
        }
    }

    const renderTeachingStaff = ({ item, index }) => {

        return (
            <TouchableOpacity style={dashBoardStyle.TeachingList}>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Image
                            source={item.teacherImage}
                            style={[dashBoardStyle.teacherLogo]}
                        />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={[dashBoardStyle.teachingText]}>{item.name}</Text>
                        <Text style={[dashBoardStyle.teachingSubject]}>{item.subject}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const renderCourseItem = ({ item, index }) => {

        return (

            <View style={[dashBoardStyle.courseContainerList]}>
                <View style={{ alignSelf: "center" }}>

                    <Image
                        source={item.course_logo}
                        style={[dashBoardStyle.courseImage]}
                    />
                </View>
                <View style={[dashBoardStyle.courseItem]}>
                    <View>
                        <Text style={{ fontSize: 14 }}>{item.course}</Text>
                    </View>

                    <View style={{ width: 50 }}>
                        <Text style={[dashBoardStyle.courseDescription]}>{item.description}</Text>
                    </View>

                </View>
            </View>


        )
    }

    const renderTopicList = ({ item, index }) => {

        return (
            <View
                style={[dashBoardStyle.programmingContainer]}>
                <View style={{}}>
                    <Image
                        source={item.logo}
                        style={[dashBoardStyle.topicImage]}
                    />

                </View>
                <View />

                <View style={{ justifyContent: "center" }}>
                    <View>
                        <Text style={[dashBoardStyle.topicText]}>{item.name}</Text>
                    </View>
                    <View style={[dashBoardStyle.topicDescriptionView]}>
                        <Text style={[dashBoardStyle.topicDescription]}>{item.description}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf:"center", margin: 5 }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(getRedirectTopicComponent(item.id), { heading: "MCQ Test", isQuestion: false });
                            }}
                            style={[dashBoardStyle.buttonStyle("#00B2F4")]}>
                            <Text style={{ color: "white" }}>MCQ</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(getRedirectTopicComponent(item.id), { heading: "Question", isQuestion: true });
                            }}
                            style={dashBoardStyle.buttonStyle("#FF515D")}>
                            <Text style={{ color: "white" }}>Question</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>

            </View>
        )
    }

    const communicationModule = () => {

        return (

            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                <TouchableOpacity style={{}}
                 onPress={()=>{
                    navigation.navigate("News")
                 }}
                >
                    <Image style={{ width: 50, height: 50, alignSelf: "center" }} source={moduelData[0].Icon} />
                    <Text style={{textAlign:"center"}}>{moduelData[0].name}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{}}
                 onPress={()=>{
                    navigation.navigate("Fee")
                 }}
                >
                    <Image style={{ width: 50, height: 50, alignSelf: "center" }} source={moduelData[1].Icon} />
                    <Text style={{ textAlign: "center" }}>{moduelData[1].name}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 onPress={()=>{
                    navigation.navigate("ImageGallery")
                 }}
                >
                    <Image style={{ width: 50, height: 50, alignSelf: "center" }} source={moduelData[2].Icon} />
                    <Text>{moduelData[2].name}</Text>
                </TouchableOpacity>
                <View>
                </View>
            </View>


        )
    }


    const toggleModal = () => {
        setVisible(!visible);
    }


    return (
        <View style={dashBoardStyle.container}>

            <View style={[dashBoardStyle.headerMain]}>
                <View style={dashBoardStyle.headerContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setVisible(true);
                        }}
                        style={{ margin: 10, width: 40, height: 30 }}>
                        <Image
                            source={require('../../../../assets/DashBoard/menu.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center', width: width * 0.60 }}>
                        <Text style={dashBoardStyle.headerText}>
                            IT HUNT THE INSTITUTE OF COMPUTER TECHNOLOGY
                        </Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../../assets/DashBoard/ithhuntlogo.png')}
                            style={dashBoardStyle.logo}
                        />
                    </View>
                </View>
            </View>
            <View style={[dashBoardStyle.topBorder]} />
            <ScrollView
                onScroll={false}
                overScrollMode='never'
                style={[dashBoardStyle.mainScrollableContainer]}
            >
                <View style={dashBoardStyle.headingView}>
                    <Text style={[dashBoardStyle.headingText]}>Teaching Staff</Text>
                </View>
                <View style={{ marginTop: 15 }}>

                    <FlatList
                        horizontal
                        data={teachingStaff}
                        renderItem={renderTeachingStaff}
                    />

                </View>
                <View style={[dashBoardStyle.borderStyle]} />
                <View style={[dashBoardStyle.courseView]}>
                    <Text style={[dashBoardStyle.courseText]}>Courses</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <FlatList
                        horizontal
                        data={Courses}
                        renderItem={renderCourseItem}
                    />
                </View>

                <View style={[dashBoardStyle.borderStyle]} />
                <View>
                    <View style={[dashBoardStyle.courseView]}>
                        <Text style={[dashBoardStyle.courseText]}>Communication</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        {communicationModule()}
                    </View>
                </View>
                <View style={[dashBoardStyle.borderStyle]} />
                <View style={[dashBoardStyle.headingView]}>
                    <Text style={[dashBoardStyle.headingText]}>Programming Question</Text>
                </View>
                <View style={[dashBoardStyle.topicContainer]}>
                    <FlatList
                        data={topic}
                        renderItem={renderTopicList}
                    />
                </View>

            </ScrollView>

            <SideBarComponent
                visible={visible}
                toggleModal={toggleModal} />
        </View>
    );
}

export default NewDashBoard;


