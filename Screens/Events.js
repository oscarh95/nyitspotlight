import React from 'react';
import { Image, Text, View, StyleSheet, FlatList } from 'react-native';

import { } from '../ScreenStylings/MainStylings';
import { Container, UserImage, UserImageWrapper, UserInfo, Card, UserInfoText, UserName, MessageContents, TextSection } from '../ScreenStylings/ChatsStyles';
import spotlight from '../assets/spotlight.png';
import { EvilIcons } from '@expo/vector-icons';

const listOfEvents = [
  {
    id: '1',
    name: 'NYIT School of Engineering',
    userImage: <EvilIcons name="user" size={200} color={"black"} />,
    date: '11/7/2022',
    message: "Join us for a seminar next tuesday!"
  },
  {
    id: '2',
    name: "President's Office",
    //userImage: <EvilIcons name="user" size={15} color="black"/>,
    date: '11/7/2022',
    message: "Join the president for lunch tomorrow"
  },
  {
    id: '3',
    name: 'Handshake',
    //userImage: <EvilIcons name="user" size={15} color="black"/>,
    date: '11/7/2022',
    message: "Reminder - Career Fair on Friday."
  },
]

function Events({props, navigation}) {
    return (
      <Container>
      <FlatList
        data={listOfEvents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card onPress={() => alert("Open event link in new window")}>
            <UserInfo>
              <UserImageWrapper>
                <UserImage source={spotlight} />
              </UserImageWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.name}</UserName>
                  <Text>{item.date}</Text>
                </UserInfoText>
                <MessageContents>{item.message}</MessageContents>
              </TextSection>
            </UserInfo>
          </Card>

        )}
      />
    </Container>
    )
  }

export default Events;