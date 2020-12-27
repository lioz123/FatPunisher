// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Form}  from '../../wrappers';
import { TextInput } from 'react-native-paper';
import {Spacer} from '../../Components';

const Login = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <Form action={()=>{}} actionName="Login" moveToScreenAction={()=>{}} moveToScreenName="Sign Up">
            <TextInput  style={styles.TextInput}
            label="Email" 
            
            value={email}
            onChangeText={setEmail}
            />
            <Spacer/>
            <TextInput 
            label="Password" 
            secureTextEntry={true}
            value={password}
           
            onChangeText={setPassword}
            />
        </Form>
    );
}
const styles = StyleSheet.create({
    TextInput:{
     
  
        justifyContent:"center"
    }
});
export default Login;