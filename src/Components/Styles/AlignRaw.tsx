// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, { FC } from 'react';
import { StyleSheet,View} from 'react-native';


const AlignRow:FC = ( props)=> {
    
    return (
    <View style={styles.AlignRaw}>
        {props.children}
    </View>)
   
}
const styles = StyleSheet.create({
    AlignRaw: {
        flexDirection:'row',
        alignItems:'center',
     
    }
});

export default AlignRow;