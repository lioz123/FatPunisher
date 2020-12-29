/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {Login, SignUp} from './src/screens'
import {CreateCustomAppBar} from './src/Components';

//route type
type RootStackParamList = {
  Login:undefined;
  Signup:undefined;


};



// declaring globals
declare global {
   var __APP_NAME__ :string;
}
globalThis.__APP_NAME__ ="Fat Punisher";



//Navigation

const Stack = createStackNavigator<RootStackParamList>();

// creating Appbars
const LoginAppBar = CreateCustomAppBar("Login");

//

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions ={{
        header:LoginAppBar
      }}
      >


        <Stack.Screen name="Signup" component={SignUp}/>

        <Stack.Screen 
        name="Login"
         component={Login}
         /> 
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;
export type {RootStackParamList};
