import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import Modal from 'react-native-modal';

function SideBarComponent(props) {

    const navigation = useNavigation();

    return (
        <Modal
            isVisible={props.visible}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            onBackdropPress={props.toggleModal}
            swipeDirection="left"
            style={styles.modal}
        >
            <View style={styles.modalContent}>

                <View style={{ alignSelf: "center", marginTop: 10 }}>
                    <Image
                        source={require('../../../../assets/DashBoard/ithhuntlogo.png')}
                        style={styles.logo}
                    />

                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: "center" }}>IT HUNT INSTITUTE  </Text>
                </View>

                <View style={[styles.sideBarTopBorder]} />

                <View style={{ marginLeft: 15 }}>
                    <TouchableOpacity
                        style={[styles.sideBarListContainer, { marginTop: 25 }]}
                        onPress={() => {
                            navigation.navigate("ITFounder")
                        }}
                    >

                        <View>
                            <Image
                                source={require('../../../../assets/DashBoard/SideBarIcon/ceo.png')}
                                style={[styles.sideBarImage]}
                            />
                        </View>

                        <View style={[styles.sideBarTextView]}>
                            <Text>Founder Of ITHUNT</Text>
                        </View>


                    </TouchableOpacity>
                    <View style={[styles.sideBarListBorder]} />

                    <TouchableOpacity 
                    style={[styles.sideBarListContainer]}
                    onPress={() => {
                        navigation.navigate("TeachingStaff")
                    }}
                    >

                        <View>
                            <Image
                                source={require('../../../../assets/DashBoard/SideBarIcon/teacher.png')}
                                style={[styles.sideBarImage]}
                            />
                        </View>

                        <View style={[styles.sideBarTextView]}>
                            <Text>Teaching Staff</Text>
                        </View>
                        <View />

                    </TouchableOpacity>
                    <View style={[styles.sideBarListBorder]} />
                    <TouchableOpacity 
                    style={[styles.sideBarListContainer]}
                    onPress={() => {
                        navigation.navigate("ITTeam")
                    }}>

                        <View>
                            <Image
                                source={require('../../../../assets/DashBoard/SideBarIcon/team.png')}
                                style={[styles.sideBarImage]}
                            />
                        </View>

                        <View style={[styles.sideBarTextView]}>
                            <Text>IT Team</Text>
                        </View>
                        <View />

                    </TouchableOpacity>
                    <View style={[styles.sideBarListBorder]} />
                    
                    <TouchableOpacity style={[styles.sideBarListContainer]}
                    onPress={() => {
                        navigation.navigate("AboutUs")
                    }}
                    >

                        <View>
                            <Image
                                source={require('../../../../assets/DashBoard/SideBarIcon/info.png')}
                                style={[styles.sideBarImage]}
                            />
                        </View>

                        <View style={[styles.sideBarTextView]}>
                            <Text>About Us</Text>
                        </View>
                        <View />

                    </TouchableOpacity>
                    <View style={[styles.sideBarListBorder]} />
                    <TouchableOpacity style={[styles.sideBarListContainer]}
                     onPress={() => {
                        navigation.navigate("LoginScreen")
                    }}
                    >

                        <View>
                            <Image
                                source={require('../../../../assets/DashBoard/SideBarIcon/feedback.png')}
                                style={[styles.sideBarImage,{tintColor:"red"}]}
                            />
                        </View>

                        <View style={[styles.sideBarTextView]}>
                            <Text style={{color:"red"}}>Logout</Text>
                        </View>
                        <View />

                    </TouchableOpacity> 
                </View>
            </View>
        </Modal>
    )
}
export default SideBarComponent;

const styles = StyleSheet.create({

    sideBarTextView:{
        marginLeft: 10
    },
    sideBarImage:{
        width: 20,
         height: 20,
          tintColor: "#00B2F4"
    },
    sideBarTopBorder:{
        height: 0.4,
         width: "100%", 
         backgroundColor: "#8C8896",
          marginTop: 10
    },
    sideBarListBorder:{
        borderColor: "#E6E9EB",
         borderWidth: 0.8,
          marginTop: 10,
           width: "100%",
            alignSelf: "center"
    },
    modal: {
        justifyContent: 'flex-start', // Align the modal content to the top
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        flex: 1,
        borderTopRightRadius: 25, // Adjust the border radius to make it look like a left side modal
        borderBottomRightRadius: 25,
        width: 200
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    sideBarListContainer: {
        flexDirection: "row",
        // justifyContent:"space-around",
        marginTop: 25
    }
})