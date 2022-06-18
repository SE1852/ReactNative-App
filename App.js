import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class App extends Component {
    render() {
        return (
            <View style={styles.view}>
                
                <Text style={styles.red}>  just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view:{
      marginTop: 50,
       flex:1,
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center'
    },
    bigblue: {
      flex:1,
        color: 'green',
        fontWeight: 'bold',
        fontSize: 30,
       // font-fam

    },
    red: {
     
      flex:1,
      //fontFamily:'bigblue',
        color: 'red',

    },
});

export default App;