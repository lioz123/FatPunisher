// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, { Component, useEffect, useState } from 'react';
import {  View } from 'react-native';
import {  Button, TextInput,HelperText } from 'react-native-paper';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import { CheckPassword, Compare, InputResponse } from '../../../utils/FormChecker';
interface DeliverText{
    onChangeText:(text:string)=>void;
    password:string;
    confirmedPassword?:string;
  }

 
const Password:React.FC<DeliverText> =(props)=>{
      console.log(`password:${props.password}`);
       const [secure,setSecure] =useState(true);
       const [response,setResponse] = useState<InputResponse>({success:true}); 
       useEffect(()=>{
         if(!props.password){
           console.log("password is undefined");
           return;
         }
        if(props.confirmedPassword){
          const compareResponse = Compare(props.password,props.confirmedPassword);
          if(compareResponse.success!=response.success){
            return setResponse(compareResponse);
          }

        }
          
          const checkResponse = CheckPassword(props.password);
          if(checkResponse.success!=response.success){
            return setResponse(checkResponse);
          }
       },[props.password,props.confirmedPassword]);


    return (
        
     <View>
            <TextInput 
        label="Password"
        secureTextEntry={secure}
        onChangeText={props.onChangeText}
        value={props.password}
        error={!response.success}
        right={<TextInput.Icon name={secure?"eye-off":"eye"} onPress={()=>{setSecure(!secure)}}/>}
        left
        />
         <HelperText type={"error"} visible={!response.success}>
            {response.reason}
        </HelperText> 
     </View>
              )
}

export default Password;
