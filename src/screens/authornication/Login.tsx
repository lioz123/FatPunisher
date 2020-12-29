// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, {  useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FormWrapper from './FormWrapper';
import { TextInput,Button,Text} from 'react-native-paper';
import { AlignRaw, Email, Link, Password, Spacer} from '../../Components';
const Login = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
      
            <FormWrapper>
           
           <Email   
            value={email}
            onChangeText={setEmail}
            />
            <Password password={password} onChangeText={setPassword}/>

                <View style={{alignSelf:'flex-end'}}>
                <Link onPress={()=>{}} >
                Forgot your password?
                </Link>
                </View>
                

         
               <Spacer/>
            <Button mode="contained" >Login</Button>
            <Spacer space={5}/>                

            <AlignRaw>
                <Text>Don't have an account yet? </Text>
                <Link onPress={()=>{}}>
                   Sign up
                </Link>
            </AlignRaw>
           
            </FormWrapper>

          
    );
}
const styles = StyleSheet.create({
    TextInput:{
     
  
        justifyContent:"center"
    }
});

export default Login;