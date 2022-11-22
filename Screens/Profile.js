import React, {useState, useEffect, useContext} from 'react';
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import { Container } from '../ScreenStylings/MainStylings';


//import icons from icons.expo.fyi
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import PostComponent from '../DynamicComponents/PostComponent';
import spotlight from '../assets/spotlight.png';
import { AuthContext } from '../Context/AuthContext';

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

function Profile({ props, navigation }) {

 const [data, setData] = useState([]);
 const [loading, setLoading] = useState([]);

 const {info} = useContext(AuthContext);

 const url = 'http://192.168.56.1:8800/api/users/6341a6a0e1fd81300ecdecfb'

 useEffect(() => {
   fetch(url)
   .then((response)=>response.json())
   .then((json)=>setData(json))
   .catch((error)=>console.error(error))
   .finally(()=>setLoading(false));
 }, []);

  return (
    <FlatList
      data={listOfPosts}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <PostComponent item={item} />
      )}

      ListHeaderComponent={
        <View>
          <View style={[{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }]}>
            {/*<EvilIcons name="user" size={100} />*/}
            <Image style={{height: 110, width: 110, marginTop: 20, borderRadius:100, borderWidth: 10, borderColor: '#f2a900'}} source={{uri: info.profilePicture}}/>
          </View>
          <View style={[{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: 30 }]}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>{info.username}</Text>
          </View>
          <View style={[{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: 30 }]}>
            <Text style={{fontSize:12, marginTop: 10}}>{info.email}</Text>
          </View>
          <View style={[{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: 30 }]}>
            <TouchableOpacity style={{backgroundColor: "#f2a900", height: 30, width: 90, alignItems: 'center', borderRadius: 50}}>
              <Text style={{alignSelf: 'center', marginTop: 5}}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{ marginLeft: 35 }]}>
              <Text>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    />
  )
}

export default Profile;