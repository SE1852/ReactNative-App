import React, { Component } from "react";
import { render } from "react-dom";


import { View, TextInput, Text,StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";




// export default function Search() {
//     return (
//         <View>
//             {/* <TextInput /> */}
//             <Text>sd sdk</Text>
//         </View>
//     );
// };
export default class Search extends React.Component {
    render() {
        return (
            <View style={style.bar}>
                {/* <Text style={{ marginVertical: 15, fontSize: 15 }}>sd sdsdk</Text> */}
                <FontAwesome name='search' size={20} style={{marginRight:10, marginTop:5,marginLeft:5}}/>
                <TextInput  placeholder="USD,EUR,VND,..." style={{fontSize:20 ,
                    }}/>
            </View>
        );
    }
}

const style=StyleSheet.create({
    bar :{
        marginHorizontal:15,
        flexDirection:"row",
        // fontSize:100,
        marginTop:20,
          backgroundColor:"#cb782a4a",
        borderRadius:10,
        marginBottom:100
        // shadowOpacity:10
        
    }
})