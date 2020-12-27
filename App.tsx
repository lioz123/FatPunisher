/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {

  View,

} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './src/screens'
import {CreateCustomAppBar} from './src/Components';


import {Appbar} from 'react-native-paper';
import { Header } from 'react-native/Libraries/NewAppScreen';


// declaring globals
declare global {
   var __APP_NAME__ :string;
}
globalThis.__APP_NAME__ ="Fat Punisher";



//Navigation

const Stack = createStackNavigator();

// creating Appbars
const LoginAppBar = CreateCustomAppBar("Login");


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions ={{
        header:LoginAppBar
      }}
      >
        
        <Stack.Screen 
        name="Login"
         component={Login}
         /> 
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
