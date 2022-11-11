import React, { useState, useCallback, useEffect } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Bubble, GiftedChat } from 'react-native-gifted-chat'

function IndividualChat({ props, navigation }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

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
    }

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            renderBubble={bubble}
        />
    )
}

export default IndividualChat;