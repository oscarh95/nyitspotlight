import React, {useState, useContext} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

function Post() {

    const [message, setMessasge] = useState("");

    return (
        <ScrollView>
            <View>
                <TextInput
                    mode='outlined'
                    multiline={true}
                    numberOfLines={25}
                    focusable={true}
                    placeholder="Your Text"
                    onChangeText={(text) => setMessasge({message:text})}
                >
                    
                </TextInput>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                <TouchableOpacity onPress={() => alert({message})}
                    style={{ alignSelf: 'center' }}
                >
                    <LinearGradient
                        colors={['#143d7b', '#143d7b']}
                        style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Submit</Text>

                    </LinearGradient>
                </TouchableOpacity>


                <View style={{ marginLeft: 50 }}>
                    <TouchableOpacity onPress={() => setMessasge("")}
                        style={{ alignSelf: 'center' }}
                    >
                        <LinearGradient
                            colors={['#143d7b', '#143d7b']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Clear</Text>

                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Post;

const styles = StyleSheet.create({
    topBorder: {
        marginTop: 50
    },
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
})