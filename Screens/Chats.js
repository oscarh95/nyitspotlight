import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';

//import icons from icons.expo.fyi
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import spotlight from '../assets/spotlight.png';

import { Container, UserImage, UserImageWrapper, UserInfo, Card, UserInfoText, UserName, MessageContents, TextSection } from '../ScreenStylings/ChatsStyles';
import axios from 'axios';


/*const [users, setUsers] = useState([])

useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("/:id");
      set
    }
})*/


const listOfMessages = [
  {
    id: '1',
    name: 'Harrown',
    userImage: <EvilIcons name="user" size={200} color={"black"} />,
    date: '11/7/2022',
    message: "I'm Harrown"
  },
  {
    id: '2',
    name: 'Kevin',
    //userImage: <EvilIcons name="user" size={15} color="black"/>,
    date: '11/7/2022',
    message: "I'm Kevin"
  },
  {
    id: '3',
    name: 'Oscar',
    //userImage: <EvilIcons name="user" size={15} color="black"/>,
    date: '11/7/2022',
    message: "I'm Oscar"
  },
]

function Chats({ props, navigation }) {
  const [chats, setChats] = useState()

  return (
    <Container>
      <FlatList
        data={listOfMessages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card onPress={() => navigation.navigate("IndividualChat", {UserName: item.name})}>
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

export default Chats;