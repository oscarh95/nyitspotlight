import React from 'react';
import { Text, View } from 'react-native';

import {
    Card,
    UserInfo,
    UserInfoSection,
    UserName,
    UserImage,
    PostImage,
    InteractionWrapper,
    Interactions,
    InteractionTexts,
    MessageContents
} from '../ScreenStylings/MainStylings';

import spotlight from '../assets/spotlight.png';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


function PostComponent({ item }) {
    return (
        <Card>
            <UserInfo>
                <UserImage source={spotlight} />
                <UserInfoSection>
                    <UserName>{item.name}</UserName>
                    <Text>{item.date}</Text>
                </UserInfoSection>
            </UserInfo>
            <MessageContents>{item.message}</MessageContents>
            {item.postImage != null ? <PostImage source={spotlight} /> : item.postImage = null}
            <InteractionWrapper>
                <Interactions active>
                    <Feather name="heart" size={24} color="black" />
                    <InteractionTexts>Like</InteractionTexts>
                </Interactions>
                <Interactions>
                    <MaterialCommunityIcons name="comment-edit-outline" size={24} color="black" />
                    <InteractionTexts>Comment</InteractionTexts>
                </Interactions>
            </InteractionWrapper>
        </Card>
    )
}

export default PostComponent;