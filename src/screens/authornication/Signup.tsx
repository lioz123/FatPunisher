// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, {  FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FormWrapper from './FormWrapper';
import { TextInput,Button,Text, Portal, HelperText} from 'react-native-paper';
import { AlignRaw, Email, Link, Password, Spacer} from '../../Components';
import { CheckEmail, CheckFields, CheckPassword, Compare, InputResponse } from '../../../utils/FormChecker';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Signup'>;



type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Signup'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;

};
const SignUp:FC<Props> = (props) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const [inputReponse,setInputResponse] = useState<InputResponse>({success:true});

    const SignUpButtonClicked = (email:string,password:string,confirmPassword:string)=>{
        const emailResponse= CheckEmail(email);
        const passwordResponse =CheckPassword(password);
        const confirmedPasswordResponse = Compare(confirmPassword,password);
        if(CheckFields(setInputResponse,[emailResponse,passwordResponse,confirmedPasswordResponse],inputReponse)){
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
            <Password password={confirmPassword} confirmedPassword={password} onChangeText={setConfirmPassword}/>

      
               <Spacer/>
            <Button mode="contained" onPress={()=>{SignUpButtonClicked(email,password,confirmPassword)}}>Sign Up</Button>
            <HelperText type="error" visible={!inputReponse.success}>
                Check your fields
                </HelperText>          

            <AlignRaw>
                <Text>Already have an account? </Text>
                <Link onPress={()=>{
                    props.navigation.navigate("Login");
                }}>
                    Login
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

export default SignUp;