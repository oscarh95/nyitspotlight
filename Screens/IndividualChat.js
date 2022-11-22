import React, { useState, useCallback, useEffect, useContext } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Bubble, GiftedChat } from 'react-native-gifted-chat'
import {AuthContext} from '../context/AuthContext'
import axios from 'axios';


function IndividualChat() { 
    //const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    
    const url = "http://192.168.2.66:8800/messages/637b09581f2c0b43ac4e1079"

    useEffect(() => {
        fetch(url).then((res) => res.json())
                  .then((json) => setMessages(json))
                  .catch((err) => console.log(err))
                  .finally(() => setLoading(false))
    }, []);

    const bubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#f2a900'
                    },
                    left:{
                        backgroundColor: '#143d7b'
                    }
                }}
                textStyle={{
                    right: {
                        color: '#143d7b'
                    },
                    left:{
                        color: '#f2a900'
                    }
                }}
            />
        )
    };
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])


    return (
        <GiftedChat 
        messages = {messages}
        renderBubble={bubble}/>

    )
}

export default IndividualChat;