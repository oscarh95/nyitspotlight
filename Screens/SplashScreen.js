import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ScrollView
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import NYITCampuses from '../assets/NYITCampuses.png';
//import LinearGradient from 'react-native-linear-gradient'; //npm install react-native-linear-gradient
//https://reactnavigation.org/docs/getting-started/

const SplashScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>

            {/* <Image
                style={{height:100, width:100, tintColor: "white", alignSelf: 'center', marginTop: 250, marginBottom: 20}}
                source={{uri: 'https://www.serrureoutaouais.ca/wp-content/uploads/2020/07/maple.png'}}
            /> */}

            <Text
                style={{ color: "white", fontSize: 30, alignSelf: 'center', marginBottom: 50 }}
            >
                NYIT SPOTLIGHT
            </Text>
            <View>
                <Image source={NYITCampuses} style={{flex:1, width:'250%', length: '100%', resizeMode:'contain'}}/>
            </View>

            <View>
                <Text
                    style={{ color: "white", fontSize: 30, alignSelf: 'center', marginBottom: 50 }}
                >
                    THE APP THAT CONNECTS NYIT
                </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}
                    style={{ alignSelf: 'center' }}
                >
                    <LinearGradient
                        colors={['#143d7b', '#143d7b']}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Log In</Text>

                    </LinearGradient>
                </TouchableOpacity>


                <View style={{ marginLeft: 50 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}
                        style={{ alignSelf: 'center' }}
                    >
                        <LinearGradient
                            colors={['#143d7b', '#143d7b']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Sign Up</Text>

                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2a900'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});