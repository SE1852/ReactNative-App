import React, { Component } from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Button,
    ScrollView,
    Image,
    ActivityIndicator,
    TouchableHighlight,
    ImageBackground,
    StatusBar,
} from "react-native";

import { useState } from "react";
import { NavigationContainer } from "react-navigation";
import { createAppContainer } from "react-navigation";

export default About = ({ navigation }) => {
    return (

        <View>
            <StatusBar barStyle={"light-content"} animated={true} hidden={true} />

            <Text style={style.banner}> About</Text>

            <Text> This is a demo App . Thanks for visit! {'\n'}
                {'\t'}If there is a problem please 
                Contact me:{'\n\t'} tqthai1852@gmail.com
            </Text>
            <Button title='Return' onPress={() => navigation.navigate('Home')} />
        </View>




    )


}


const style = StyleSheet.create({
    banner: {
        margin: 50,
        // color: ,
        fontSize: 50,
        textAlign: 'center',
        // fontFamily: 'vincHand',

    }
})