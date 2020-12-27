// This Components is the used to replace the navigation bar from ract native navigation using the header options

import React, { FC } from 'react';
import {Appbar} from 'react-native-paper';


const CreateCustomAppBar= (title:string) => {
    return (
       ()=>{
        return (
        <Appbar.Header>
            <Appbar.Content title={title}/>
         </Appbar.Header>
        );
       }
    )
   
}

export default CreateCustomAppBar;