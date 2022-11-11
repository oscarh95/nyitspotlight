import React from 'react';
import { Text, FlatList } from 'react-native';

import { 
  Container, 
  Card, 
  UserInfo, 
  UserInfoSection, 
  UserName, 
  UserImage, 
  PostImage, 
  InteractionWrapper, 
  Interactions, 
  InteractionTexts, 
  MessageContents} from '../ScreenStylings/MainStylings';

import spotlight from '../assets/spotlight.png';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

//Add a search bar at the top in here 

const listOfPosts = [
  {
    id: '1',
    name: 'Harrown',
    userImage: <EvilIcons name="user" size={200} color={"black"} />,
    date: '11/7/2022',
    message: "Registration for the fall semester is tomorrow. I have everything planned out already. Message me for any questions!",
    postImage: spotlight,
    liked: true,
    numberOfLikes: '1',
    numberOfComments: '1'
  },
  {
    id: '2',
    name: 'Kevin',
    //userImage: <EvilIcons name="user" size={15} color="black"/>,
    date: '11/7/2022',
    message: "I saw a professor that I had 2 years ago. We had a nice chat!",
    postImage: null,
    liked: false,
    numberOfLikes: null,
    numberOfComments: '1'
  },
  {
    id: '3',
    name: 'Oscar',
    //userImage: <EvilIcons name="user" size={15} color="black"/>,
    date: '11/7/2022',
    message: "I just took my CSCI 185 exam. Super easy!",
    postImage: null,
    liked: true,
    numberOfLikes: '8',
    numberOfComments: '2'
  },
]

function Home({ props, navigation }) {
  return (
    <Container>
      <FlatList
        data={listOfPosts}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
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
        )}
      />
    </Container>
  )
}

export default Home;