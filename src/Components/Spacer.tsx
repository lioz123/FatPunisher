// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, { FC } from 'react';
import { StyleSheet,View} from 'react-native';

interface Props{    
space?:number
}
const Spacer :FC<Props>= ( props)=> {
    
    return (
    <View style={{margin:props.space||15}}>

    </View>)
   
}
const styles = StyleSheet.create({
    spacer: {
        margin:15,
    }
});

export default Spacer;