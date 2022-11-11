import React, { useState, useEffect, useContext } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  ScrollView
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'; //https://github.com/oblador/react-native-vector-icons#android
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

//import icons from icons.expo.fyi
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const SignUpScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    name: '',
    age: '',
    AccountType: '',
    check_TextInputChange: false,
    secureTextEntry: true
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_TextInputChange: true
      })
    }
    else {
      setData({
        ...data,
        email: val,
        check_TextInputChange: false
      })
    }
  }

  const HandlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const HandleNameChange = (val) => {
    setData({
      ...data,
      name: val
    });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.footer}>
        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <Text style={[styles.text_footer, styles.nyitBlue, {fontWeight: 'bold'}]}>Welcome! Please fill out the fields below to register.{"\n"}</Text>
        </View>
        <Text style={styles.text_footer}>Email(Please use only your NYIT email)</Text>
        <View style={styles.action}>
          <MaterialIcons name="email" size={20} color="black" />
          <TextInput
            placeholder='Your Email'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_TextInputChange ?
            <Feather
              name="check-circle"
              color="green"
              size={20}
            />
            : null}
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome5 name="lock" size={20} color="black" />
          <TextInput
            placeholder='Your Password'
            style={styles.textInput}
            autoCapitalize='none'
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => HandlePasswordChange(val)}
          />
          <TouchableOpacity onPress={(updateSecureTextEntry)}>
            {data.secureTextEntry ?
              <Feather
                name="eye-off"
                color="#05375a"
                size={20}
              />
              :
              <Feather
                name="eye"
                color="#05375a"
                size={20}
              />
            }
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>What is your first name?</Text>
        <View style={styles.action}>
          <FontAwesome5 name="user-alt" size={20} color="black" />
          <TextInput
            placeholder='Your First Name'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => HandleNameChange(val)}
          />
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>What is your last name?</Text>
        <View style={styles.action}>
          <FontAwesome5 name="user-alt" size={20} color="black" />
          <TextInput
            placeholder='Your Last Name'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => HandleNameChange(val)}
          />
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>What is your NYIT ID?</Text>
        <View style={styles.action}>
          <Entypo name="v-card" size={24} color="black" />
          <TextInput
            placeholder='Your NYIT ID'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => HandleNameChange(val)}
          />
        </View>
        {/* <Picker //Drop down menu for their age                  //https://www.youtube.com/watch?v=dAB_-mDR-Rs Maybe so that i dont have to add age manually
          selectedValue={data.age}
          onValueChange={(itemValue) =>
            HandleAgeChange(itemValue)
          }>
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="35" value="35" />
          <Picker.Item label="36" value="36" />
          <Picker.Item label="37" value="37" />
          <Picker.Item label="38" value="38" />
          <Picker.Item label="39" value="39" />

        </Picker> */}

        <TouchableOpacity
          /* onPress={() => {
            firestore()
              .collection('userInfo')
              .doc()
              .set({
                email: data.email,
                password: data.password,
                name: data.name,
                age: data.age,
                AccountType: data.AccountType,
              })
              .then(() => {
                console.log('User added!');
              });
            register(data.email, data.password);
          }
          } */
          style={[styles.signIn, {
            borderColor: '#009387',
            borderWidth: 1,
            marginTop: 30
          }]}
        >
          <Text style={styles.textSign}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text style={styles.forgotPasswordButton}>Have an account already? Sign In</Text>
        </TouchableOpacity>

        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <Text style={[styles.text_footer, { marginTop: 35 }]}>-------------------Alternatives:------------------</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2a900'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    //marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  forgotPasswordButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: '#6495ed'
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  nyitBlue: {
    color: '#143d7b'
  }
});