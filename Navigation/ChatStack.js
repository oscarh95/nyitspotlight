import React, { StyleSheet, Text, View } from 'react'

import Chats from '../Screens/Chats';
import IndividualChat from '../Screens/IndividualChat';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

const cs = createNativeStackNavigator();
const ChatStack = () => { //This page is used when there is no user currently logged in.
    return (
        
            <cs.Navigator>
                <cs.Screen name="ChatMain" component={Chats} options={{ headerShown: true, headerTitle: "Messages", headerTitleAlign:'center' }} />
                <cs.Screen name="IndividualChat" component={IndividualChat} options={
                    ({route}) => ({
                        title:route.params.UserName,
                        headerShown: true, headerTitleAlign:'center'
                    })} />
            </cs.Navigator>
        
    )
}

export default ChatStack;