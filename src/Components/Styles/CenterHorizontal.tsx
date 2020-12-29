// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, { FC } from 'react';
import { StyleSheet,View} from 'react-native';


const CenterHorizontal:FC = ( props)=> {
    
    return (
    <View style={styles.CenterHorizontal}>
        {props.children}
    </View>)
   
}
const styles = StyleSheet.create({
    CenterHorizontal: {
        alignItems:'center',
    }
});

export default CenterHorizontal;