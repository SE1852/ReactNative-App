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
    Alert
} from "react-native";

import { useState } from "react";
import { NavigationContainer } from "react-navigation";
import { createAppContainer } from "react-navigation";
import About from "./About";
export default Home = ({ navigation }) => {

    return (

        <View>
            <StatusBar barStyle={"light-content"} animated={true} hidden={false} />
            <ImageBackground
                style={{ height: "100%", width: "100%" }}
                source={require("../assets/banner.jpg")}
                resizeMode="cover"

            >
                <View style={{ flex: 1 }}>
                    <Text style={style.banner}> HOME</Text>

                    <View style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        marginBottom: 50,
                        flex: 5,
                        // flexDirection:'row'
                    }}>
                        {/* <View style={{flexDirection:"row"}}> */}
                        <View style={style.option}>
                            <TouchableOpacity
                              onPress={() => navigation.navigate('Store')}>
                            {/* //   onPress={() => Alert.alert('Warnning','Service not provided')}>  */}
                                <Text style={style.textchoose}>Store </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.option}>
                            <TouchableOpacity style={style.Touch} onPress={() => navigation.navigate('About')}>
                                <Text style={style.textchoose}>About</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.option}>

                            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                                <Text style={style.textchoose}>Setting</Text>
                            </TouchableOpacity>
                        </View>

                        {/* </View> */}
                    </View>
                </View>
            </ImageBackground>
        </View>




    )


}
const style = StyleSheet.create({
    banner: {
        flex: 5,
        margin: 60,
        color: "#072d3bcc",
        fontSize: 50,
        textAlign: 'center',
        // backgroundColor:'red'
        // fontFamily: 'vincHand',

    },
    option: {
        //  flex:0.5,
        // position:2 3,
        flexDirection: 'row',
        fontSize:20,
        // center:"center",
        textAlign: "center",

        justifyContent: 'center',
        // backgroundColor: '#97C449',
        // height: 50,
        // width: 100,
        // margin: 5,
        // borderColor: '#ADFF1F',
        borderRadius: 5,
        borderWidth: 0,
        // color:'red'

    },
    Touch: {
        // flex:2,
        // fontSize:50,
        // backgroundColor: '#657568',
        textAlign: 'center',
        padding: 10
    },
    textchoose:{
        color:'#0B7220',
        fontSize:30
    }
})



//  Home;

// import React, { Component } from 'react'
// import {
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   ActivityIndicator,
//   TouchableHighlight,

// } from 'react-native'

// import { useState } from 'react';
// //import { ScrollView } from 'react-native-web';

// const Index = () => {
//   const [titleText, setTitleText] = useState(1);
//   const bodyText = "This is not really a bird nest.";
//  // this.state.first=1
//   const onPressTitle = () => {
//     setTitleText(titleText+1);
//     alert('good')
//   };

//   return (

//     <ScrollView>

//     <Text style={styles.baseText}>
//       <Text style={styles.titleText} onPress={onPressTitle}>
//         {titleText}
//         {"\n"}
//         {"\n"}
//         <ActivityIndicator size="small" color="blue" />
//         {"\n"}
//       </Text>
//       <Text numberOfLines={0}>{bodyText}</Text>
//     </Text>
//     <View style={{}}>
//     <TouchableOpacity
//         onPress={onPressTitle}
//        // onPress={onPressTitle}
//         title="click me Thái đẹp-tr  ai !!!"
//         color="green"

//         />
//         <TouchableOpacity style={{backgroundColor:'grey'}}>
//           <Text style={{
//             textAlign:"center",
//              margin:10

//             //marginLeft:3,
//             //marginRight:5
//         }}> HAHAAHAH</Text>
//          </TouchableOpacity>
//         </View>

//        <View>
//         <Image
//         style={{alignItems:"center" , resizeMode:"cover",
//          width:400 ,height:700
//       }}
//         source={{uri:'https://i.pinimg.com/564x/30/ae/2d/30ae2d6127496596ff9a39b63866d97c.jpg'}} />

//     </View>

//     </ScrollView>

//   );
// };

// const styles = StyleSheet.create({
//   baseText: {
//    // fontFamily: ""
//    marginLeft:100,
//    marginTop:50,
//   //  letterSpacing:50,
//    alignItems:"center",

//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: "bold"
//   }
// });

// export default Index;

// // class App extends Component {
// //     render() {
// //         return (
// //             <View style={styles.view}>

// //                 <Text style={styles.red}>  just red</Text>
// //                 <Text style={styles.bigblue}>just bigblue</Text>
// //                 <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
// //                 <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
// //             </View>
// //         );
// //     }
// // }

// // const styles = StyleSheet.create({
// //     view:{
// //       marginTop: 50,
// //        flex:1,
// //        flexDirection:'column',
// //        justifyContent:'center',
// //        alignItems:'center'
// //     },
// //     bigblue: {
// //       flex:1,
// //         color: 'green',
// //         fontWeight: 'bold',
// //         fontSize: 30,
// //        // font-fam

// //     },
// //     red: {

// //       flex:1,
// //       //fontFamily:'bigblue',
// //         color: 'red',

// //     },
// // });

// // export default App;
