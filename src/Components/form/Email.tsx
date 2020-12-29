// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, {  useEffect, useState } from 'react';
import {  View } from 'react-native';
import {   TextInput,HelperText } from 'react-native-paper';
import {CheckEmail,  InputResponse} from '../../../utils/FormChecker';
interface DeliverText{
    onChangeText:(text:string)=>void;
    value:string;
  }
const Email:React.FC<DeliverText> =(props)=>{
       const [response,setResponse] =useState<InputResponse>({success:true});
       useEffect(()=>{
           if(!props.value||props.value==''){
               return;
           }
           console.log("mail is:  " + CheckEmail(props.value));
            const checkResponse = CheckEmail(props.value);
           if(response.success!=checkResponse.success){
                setResponse(checkResponse);
           }
       },[props.value]);
    return (
        
     <View>
            <TextInput 
        label="Email"
        onChangeText={(text)=>{
            props.onChangeText(text)
        }}
        value={props.value}
        error={!response.success}
        right={props.value.length>0?<TextInput.Icon name="close" onPress={()=>{props.onChangeText("")}}/>:null}
        left
        />
        <HelperText type={"error"} visible={!response.success}>
            {response.reason}
        </HelperText>
     </View>
              )
}

export default Email;
