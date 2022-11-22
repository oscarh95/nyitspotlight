import {View, Text, ActivityIndicator} from 'react-native';
import React, { useContext } from 'react';

import AuthStack from './AuthStack';
import RootStackScreen from './RootStackScreen';
import { AuthContext } from '../Context/AuthContext';

export const AppNav = () => {
    const {isLoading, userToken} = useContext(AuthContext)

    if(isLoading){
        return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        );
    }

    return(
        <>
        {userToken !== null ? <RootStackScreen /> : <AuthStack />}
    
      </>
    );
}