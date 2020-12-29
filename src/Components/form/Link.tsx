// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, { FC } from 'react';
import { StyleSheet,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text,useTheme } from 'react-native-paper';

interface Props{
    onPress:()=>void;
}

const Link:FC<Props> = ( props)=> {
    const {colors} = useTheme();
    return (
        <TouchableOpacity onPress={event => props.onPress}>
        <Text style={{...styles.Link,color:colors.primary}}>
        {props.children}
        </Text>
        </TouchableOpacity>
    )
   
}
const styles = StyleSheet.create({
    Link: {
       fontWeight:'bold',
    }
});

export default Link;