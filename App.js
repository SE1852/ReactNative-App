
import React, { component } from "react";

import Home from "./source/Home"
import About from "./source/About";
import Setting from "./source/Setting";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"

import {
  DrawerLayoutAndroid



} from "react-native-web";
import { ScreenStack } from "react-native-screens";
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      < Stack.Navigator screenOptions={{headerShown:false}}>
 
      <Stack.Screen name="Home" component={Home}   options={{ 
      }}    />
 <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="About" component={About}  options={
        {headerTitle:"About" , headerStyle:{backgroundColor:"green"}
    }} />   
      
       </Stack.Navigator >
    </NavigationContainer>

  )
}


export default App;