// import React, { Component } from 'react'
// import {
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   View,
//   Button,
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
//     <Button
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