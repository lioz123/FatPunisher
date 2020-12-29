// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, { Component, useEffect, useState } from 'react';
import {  View } from 'react-native';
import {  Button, TextInput,HelperText } from 'react-native-paper';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import { CheckFields, CheckPassword, Compare, InputResponse } from '../../../utils/FormChecker';
interface DeliverText{
    onChangeText:(text:string)=>void;
    password:string;
    confirmedPassword?:string;
    label?:string;
  }




    
 
 
 
const Password:React.FC<DeliverText> =(props:DeliverText)=>{
        
       const [secure,setSecure] =useState(true);
       const [response,setResponse] = useState<InputResponse>({success:true}); 
       useEffect(()=>{
         if(props.password==''){
           return setResponse({success:true});
         }
         let comparePassword:InputResponse ={success:true};
        if(props.confirmedPassword){
          comparePassword = Compare(props.password,props.confirmedPassword);
        }
          CheckFields(setResponse,[  CheckPassword(props.password),comparePassword],response);
      ;
        
       },[props.password,props.confirmedPassword]);
      

    return (
        
     <View>
            <TextInput 
        label={props.label?props.label:"Password"}
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
