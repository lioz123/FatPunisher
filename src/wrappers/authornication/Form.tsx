// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Text, Title,useTheme } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { AlignRaw, Spacer } from '../../Components';
import {Link} from '../../Components';

interface Props {
    action:()=>void;
    actionName:string;
    moveToScreenName:string,
    moveToScreenAction:()=>void,

}

const Form:FC<Props> = (props) =>{
    const {colors} = useTheme();
    return (
        <View style={styles.container}>
            <Title style={{...styles.title, color:colors.primary}} >{globalThis.__APP_NAME__}</Title>
            <Spacer/>
          

           {props.children}
           <Spacer/>
            <View style={styles.footer}>
            <Button mode="contained" onPress={props.action}>{props.actionName}</Button>
            <Spacer space={5}/>
            <AlignRaw>
                <Text>Don't have an account yet? </Text>
                <Link onPress={props.moveToScreenAction}>
                    {props.moveToScreenName}
                </Link>
            </AlignRaw>
           
         
            
              
            </View>
           
        </View>
       
    );
}

const styles = StyleSheet.create({
    container:{
        
        padding:50,
        flex:1


    },
    footer: {
        alignItems:'center'
    },
    AlignRaw: {
        flexDirection:'row'
    },
    title: {
        alignSelf:'center',
        fontSize:30,
        
    }
});
export default Form;