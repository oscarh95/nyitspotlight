import React, {useContext} from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Need nativestack, not just stack
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view and //npm install @react-navigation/bottom-tabs 
//import { Picker } from '@react-native-picker/picker';
import { Image, Text, View, StyleSheet } from 'react-native';

//import icons from icons.expo.fyi
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import { Avatar, Drawer, Title, } from 'react-native-paper';

//Import screens
import Home from './Home';
import Post from './Post';
import Chats from './Chats';
import Events from './Events';
import Profile from './Profile';
import Settings from './Settings';
import ChatStack from '../Navigation/ChatStack';
import { AuthContext } from '../Context/AuthContext';

//Add a switch to tell people if they're online

function DrawerContents({ props, navigation }) {

    const {signout} = useContext(AuthContext)

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ alignContent: 'center', justifyContent: 'center' }} >

            <View style={[{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }]}>
                <EvilIcons name="user" size={100} />
                <View style={[{ flexDirection: 'column', marginTop: 10 }]}>
                    <Text style={[{ fontWeight: 'bold' }]}>
                        Name
                    </Text>
                    <Text style={[{ fontWeight: 'bold', marginTop: 10 }]}>
                        NYIT ID
                    </Text>
                    
                        <Text style={[{ fontWeight: 'bold' }]}>
                            Set Status:
                        </Text>
                        <View>
                        {/* <Picker>
                            <Picker.Item label="Online" value="Online" />
                            <Picker.Item label="Away" value="Away" />
                            <Picker.Item label="Offline" value="Offline" />
                        </Picker> */}
                        </View>
                    
                </View>

            </View>


            <Drawer.Item
                icon={({ color, size }) => (
                    <FontAwesome5 name="home" size={size} color={color} />
                )}
                label="Home"
                onPress={() => navigation.navigate(Home)}
            />

            <Drawer.Item
                icon={({ color, size }) => (
                    <AntDesign name="calendar" size={size} color={color} />
                )}
                label="Events"
                onPress={() => navigation.navigate(Events)}
            />

            <Drawer.Item
                icon={({ color, size }) => (
                    <Ionicons name="add-circle" size={size} color={color} />
                )}
                label="Post"
                onPress={() => navigation.navigate(Post)}
            />

            <Drawer.Item
                icon={({ color, size }) => (
                    <MaterialCommunityIcons name="thought-bubble" size={size} color={color} />
                )}
                label="Chats"
                onPress={() => navigation.navigate(ChatStack)}
            />

            <Drawer.Item
                icon={({ color, size }) => (
                    <AntDesign name="profile" size={size} color={color} />
                )}
                label="Profile"
                onPress={() => navigation.navigate(Profile)}
            />

            <Drawer.Item
                icon={({ color, size }) => (
                    <Feather name="settings" size={size} color={color} />
                )}
                label="Settings"
                onPress={() => navigation.navigate(Settings)}
            />

            <Drawer.Item
                icon={({ color, size }) => (
                    <MaterialCommunityIcons name="exit-to-app" size={size} color={color} />
                )}
                label="Sign Out"
                //onPress={() => alert("Logged out!")}
                onPress={() => signout()}
            />

        </DrawerContentScrollView>
    )
}

export default DrawerContents;

const styles = StyleSheet.create({
    topBorder: {
        marginTop: 50
    }
})