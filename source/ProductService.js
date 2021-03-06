// import axios from "axios";

// const API_URL='http://localhost:8081/api/v1/Product/api';

// class ProductService {

//     getAllProduct() {
//         return axios.get(API_URL)
//     }

// }
// export default new ProductService();

import React from "react";
import Search from "./component/Search";
import RequestAPI from "./component/RequestAPI";
// import { SearchBar } from "@rneui/themed";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    ImageBackground,
    Button



} from "react-native";
import { Component } from "react";



const ProductService = () => {
    return (
        <ImageBackground
            style={{ height: "100%", width: "100%" }}
            source={require("../assets/back4.jpg")}
            resizeMode="cover"

        >
            <ScrollView>
                <View style={style.container}>

                    <Text style={style.header}> Find your style ! </Text>
                    <Search />
                   
                    <RequestAPI />
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const style = StyleSheet.create({
    container: {
        // flexDirection:'row',
        // flex:1,
        // flex:100
    },
    header: {
        marginTop: 20,
        fontSize: 35,
        fontWeight: "600"
    }

})


export default ProductService;