import React, { StyleSheet, Text, View } from 'react'

import SplashScreen from '../Screens/SplashScreen';
import SignInScreen from '../Screens/SignInScreen';
import ResetPassword from '../Screens/ResetPassword.js';
import SignUpScreen from '../Screens/SignUpScreen';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createNativeStackNavigator();
const AuthStack = () => { //This page is used when there is no user currently logged in.
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <RootStack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}}/>
                <RootStack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
                <RootStack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default AuthStack;