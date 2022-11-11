import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Need nativestack, not just stack
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view and //npm install @react-navigation/bottom-tabs 

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

//import icons from icons.expo.fyi
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

//Import screens
import Home from '../Screens/Home';
import Post from '../Screens/Post';
import Events from '../Screens/Events';
import DrawerContents from '../Screens/DrawerContents';
import Profile from '../Screens/Profile';
import ChatStack from './ChatStack';

import spotlight from '../assets/spotlight.png';
import Settings from '../Screens/Settings';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

//https://stackoverflow.com/questions/67815289/error-when-using-toggledrawer-navigation-toggledrawer-is-not-a-function
//https://stackoverflow.com/questions/65493618/navigation-is-undefined-in-drawer-content
//https://github.com/react-navigation/react-navigation/issues/9878

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Events':
      return 'Events';
    case 'Post':
      return 'Post';
    case 'Chats':
      return 'Messages';
    case 'Profile':
      return 'Profile';
  }
}

function NavigationDrawer({ props, navigation }) {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: false,
        headerRight: ({ size, color }) => (
          <TouchableOpacity
            style={[{ paddingRight: 10 }]}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <EvilIcons name="user" size={50} color={color} />
          </TouchableOpacity>),
        headerTitleAlign: 'center',
        drawerPosition: 'right',
        drawerType: 'slide',
      }}
      drawerContent={(props) => <DrawerContents {...props} />}>
      <Drawer.Screen name="Welcome!" component={BottomTabs} options={({ route }) => ({
        title: getHeaderTitle(route),
        headerShown: true, headerTitleAlign: 'center'
      })} />
      <Drawer.Screen name='asd' component={DrawerContents} />

    </Drawer.Navigator>
  )
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      initialRouteName="Home" //What automatically shows when openning the page that has this navigation
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <FontAwesome5
                name="home"
                size={size}
                style={{
                  color: focused ? "#f2a900" : "#748c94"
                }}
              />
              <Text>HOME</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <AntDesign
                name="calendar"
                size={size}
                style={{
                  color: focused ? "#f2a900" : "#748c94"
                }}
              />
              <Text>EVENTS</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <Ionicons
                name="add-circle"
                size={size}
                style={{
                  color: focused ? "#f2a900" : "#748c94"
                }}
              />
              <Text>POST</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatStack}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="thought-bubble"
                size={size}
                style={{
                  color: focused ? "#f2a900" : "#748c94"
                }}
              />
              <Text>CHATS</Text>
            </View>
          )
        }} />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <AntDesign
                name="profile"
                size={size}
                style={{
                  color: focused ? "#f2a900" : "#748c94"
                }}
              />
              <Text>PROFILE</Text>
            </View>
          )
        }} />
    </Tab.Navigator>
  )
}


function RootStackScreen() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name='Drawer' component={NavigationDrawer} />
        <RootStack.Screen name='BottomTabs' component={BottomTabs} />
        <RootStack.Screen name='ChatStack' component={ChatStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootStackScreen;

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  }
})