// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, {  FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FormWrapper from './FormWrapper';
import { TextInput,Button,Text, Portal, HelperText} from 'react-native-paper';
import { AlignRaw, Email, Link, Password, Spacer} from '../../Components';

import { StackNavigationProp } from '@react-navigation/stack';

import { RouteProp } from '@react-navigation/native';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;



type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;

};
import { CheckEmail, CheckFields, CheckPassword, InputResponse } from '../../../utils/FormChecker';
import { RootStackParamList } from '../../../App';
const Login:FC<Props> = (props) =>{
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [inputReponse,setInputResponse] = useState<InputResponse>({success:true});

    const LoginButtonClicked = (email:string,password:string)=>{
        const emailResponse= CheckEmail(email);
        const passwordResponse =CheckPassword(password);
        if(CheckFields(setInputResponse,[emailResponse,passwordResponse],inputReponse)){
            // login
        }
        
        
     }
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
            <HelperText type="error" visible={!inputReponse.success}>
                Check your fields
                </HelperText>          

            <AlignRaw>
                <Text>Don't have an account yet? </Text>
                <Link onPress={()=>{props.navigation.navigate("Signup")}}>
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