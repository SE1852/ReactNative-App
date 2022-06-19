
import React, { Component } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,

    ScrollView,
    Image,
    ActivityIndicator,
    TouchableHighlight,
    ImageBackground,
    StatusBar,
   Dimensions
} from "react-native";


const windowWidth =Math.floor(Dimensions.get('window').width)
const windowHeight = Dimensions.get('window').height;
import Icon from "react-native-vector-icons/Ionicons";
import {Icon as IconAnt } from "react-native-vector-icons/AntDesign";
// import Option from "./Option";
// import  Icon from "react-native-vector-icons/AntDesign";
const Setting = () => {
    

    return (
        <View style={style.setting}>
            <ScrollView>

                <Icon name="settings" color="#323f43" size={50} style={{ margin: 20 }} />
                <Text style={style.typeSetting}> Option  </Text>


                <View style={{ flexDirection: "row" }}>
                    <Icon name="chatbubbles" color="#ddca3c" size={30}
                        style={{ margin: 10 }}
                    />
                    <Text style={{ marginVertical: 15, fontSize: 15 }}> Notification</Text>
                    
                    {/* <Text style={{ marginStart:{windowWidth}}}>
                    <Icon name="ios-caret-back" color="#ddca3c" size={30}
                        //  style={{ marginStart:{windowWidth}}}
                    />
                    </Text> */}
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Icon name="musical-notes" color="#156647" size={30}
                        style={{ margin: 10 }}
                    />
                    <Text style={{ marginVertical: 15, fontSize: 15 }}> Notification</Text>
                </View>

                <Text style={style.typeSetting}> Profile  </Text>

                <View style={{ flexDirection: "row" }}>
                    <Icon name="create" color="#c2622e" size={30}
                        style={{ margin: 10 }}
                    />
                    <Text style={{ marginVertical: 15, fontSize: 15 }}> Edit Profile</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Icon name="ios-keypad-outline" color="#719532" size={30}
                        style={{ margin: 10 }}
                    />
                    <Text style={{ marginVertical: 15, fontSize: 15 }}> Change PassWord</Text>
                </View>

                <Text style={style.typeSetting}> Regional  </Text>
                <View style={{ flexDirection: "row" }}>
                    <Icon name="language" color="#325195" size={30}
                        style={{ margin: 10 }}
                    />
                    <Text style={{ marginVertical: 15, fontSize: 15 }}> Notification</Text>
                </View>


            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    setting: {
        flex: 1,
        // backgroundColor:'#666666'
        marginLeft: 10

    },
    typeSetting: {
        color: '#323f43',
        fontWeight: "bold",
        fontSize: 15,
        paddingStart: 10,
        marginBottom:10,
        marginTop:15
        // backgroundColor: "#a3dd64",
        // textShadowColor:"#0B7220"

    }



})

export default Setting;

