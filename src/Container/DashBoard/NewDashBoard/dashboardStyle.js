
import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

 const dashBoardStyle=StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 20
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        // backgroundColor: "white"
    },
    borderStyle: {
        width: width,
        height: 3,
        backgroundColor: "#E6E9EB",
        marginVertical: 10
    },
    courseView: {
        marginTop: 10,
        marginHorizontal: 10
    },
    headingView: {
        marginTop: 10,
        marginHorizontal: 10
    },
    headingText: {
        fontSize: 17,
        color: "#194880"
    },
    topicContainer: {
        alignItems: "center",
        marginTop: 15
    },
    courseText: {
        fontSize: 17,
        color: "#194880"
    },
    headerMain: {
        height: height * 0.12,
        backgroundColor: 'white',
        justifyContent: "center",
        padding: 10
    },
    topBorder: {
        width: width,
        height: 3,
        backgroundColor: "#E6E9EB"
    },
    mainScrollableContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    TeachingList: {
        flexDirection: "row",
        marginLeft: 15,
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 5,
        borderColor: "#8C8896",
        marginVertical: 10
    },
    teacherLogo: {
        width: 40,
        height: 40,
        resizeMode: "cover",
        borderRadius: 50
    },
    teachingText: {
        fontSize: 13,
        color: "#194880"
    },
    teachingSubject: {
        fontSize: 10,
        color: "#8C8896"
    },
    headerText: {
        fontSize: 14,
        textAlign: "center",
        color: "#194880"
    },
    programmingContainer: {
        marginTop: 10,
        flexDirection: "row",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#E6E9EB",
        borderRadius: 7,
        width: width * 0.90,
        paddingHorizontal: 10,
        justifyContent: "space-around"
    },
    courseContainerList: {
        flexDirection: "row",
        marginLeft: 10,
        borderRadius: 10,
        padding: 5,
        width: 170,
        backgroundColor: "white",
        elevation: 5,
        marginVertical: 10,
        height: 90
    },
    courseImage: {
        width: 80,
        height: 80,
        resizeMode: "contain"
    },
    courseItem: {
        marginLeft: 13,
        alignSelf: "center"
    },
    courseDescription: {
        fontSize: 10,
        color: "#8C8896"
    },
    topicImage: {
        width: width * 0.13,
        height: height * 0.08,
        resizeMode: "contain"
    },
    topicText: {
        textAlign: "center",
        fontSize: 16,
        color: "#194880"
    },
    topicDescription: {
        fontSize: 12,
        color: "#8C8896",
        textAlign: "center"
    },
    topicDescriptionView: {
        width: width * 0.50,
        alignItems: "center"
    },
    buttonStyle:(color)=>({
        width:width*0.20,
        height:height*0.03,
        backgroundColor:color,
        // backgroundColor:"#00B2F4",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    })

});

export default dashBoardStyle;