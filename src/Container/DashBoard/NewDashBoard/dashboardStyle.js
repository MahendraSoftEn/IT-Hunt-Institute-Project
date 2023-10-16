
import { Dimensions, StyleSheet } from "react-native";
import { dynamicSize, getFontSize, hpx, wpx } from "../../../../utilities/responsive";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

 const dashBoardStyle=StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 20
    },
    logo: {
        width: dynamicSize(55),
        height: dynamicSize(55),
        resizeMode: 'contain',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        // backgroundColor: "white"
    },
    borderStyle: {
        width: width,
        height: hpx(3),
        backgroundColor: "#E6E9EB",
        marginVertical: hpx(11)
    },
    courseView: {
        marginTop: hpx(11),
        marginHorizontal: wpx(10)
    },
    headingView: {
        marginTop: hpx(15),
        marginHorizontal: wpx(10)
    },
    headingText: {
        fontSize: getFontSize(17),
        color: "#194880"
    },
    topicContainer: {
        alignItems: "center",
        marginTop: hpx(17)
    },
    courseText: {
        fontSize: getFontSize(17),
        color: "#194880"
    },
    headerMain: {
        height: hpx(120),
        backgroundColor: 'white',
        justifyContent: "center",
        padding: wpx(13)
    },
    topBorder: {
        width: width,
        height: hpx(3),
        backgroundColor: "#E6E9EB"
    },
    mainScrollableContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    TeachingList: {
        flexDirection: "row",
        marginLeft: wpx(15),
        justifyContent: 'space-between',
        padding: wpx(20),
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 5,
        borderColor: "#8C8896",
        marginVertical: hpx(14)
    },
    teacherLogo: {
        width: dynamicSize(45),
        height: dynamicSize(45),
        resizeMode: "contain",
        borderRadius: 50
    },
    teachingText: {
        fontSize: getFontSize(15),
        color: "#194880"
    },
    teachingSubject: {
        fontSize: getFontSize(13),
        color: "#8C8896"
    },
    headerText: {
        fontSize: getFontSize(14),
        textAlign: "center",
        color: "#194880"
    },
    programmingContainer: {
        marginTop: hpx(14),
        flexDirection: "row",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#E6E9EB",
        borderRadius: 7,
        width: width * 0.90,
        paddingHorizontal: wpx(12),
        justifyContent: "space-around"
    },
    courseContainerList: {
        flexDirection: "row",
        marginLeft: wpx(12),
        borderRadius: 10,
        padding: wpx(6),
        width: wpx(210),
        backgroundColor: "white",
        elevation: 5,
        marginVertical: hpx(13),
        height: hpx(100)
    },
    courseImage: {
        width: dynamicSize(85),
        height: dynamicSize(85),
        resizeMode: "contain"
    },
    courseItem: {
        marginLeft: wpx(13),
        alignSelf: "center"
    },
    courseDescription: {
        fontSize: getFontSize(10),
        color: "#8C8896"
    },
    topicImage: {
        width: dynamicSize(70),
        height: dynamicSize(80),
        resizeMode: "contain"
    },
    topicText: {
        textAlign: "center",
        fontSize: getFontSize(16),
        color: "#194880"
    },
    topicDescription: {
        fontSize: getFontSize(13),
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