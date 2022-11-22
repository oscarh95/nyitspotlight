import React, { useEffect, useContext, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  Image
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'; //https://github.com/oblador/react-native-vector-icons#android
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../Context/AuthContext';


const SignInScreen = ({ navigation }) => {

  const[email, setEmail] = useState(null);
  const[password, setPassword] = useState(null);
  //const[username, setUsername] = useState(null);

  const {signin} = useContext(AuthContext);

  const [data, setData] = useState({
    email: '',
    password: '',
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

  return (
    <View style={styles.container}>
      <View style={[styles.header, {justifyContent: 'center', alignContent: 'center', alignItems: 'center'}]}>
        <Text style={styles.text_header}>Welcome to Spotlight!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder='Your Email'
            style={styles.textInput}
            autoCapitalize='none'
            //onChangeText={(val) => textInputChange(val)}
            value={email}
            onChangeText={text => setEmail(text)}
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
          <Feather
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder='Your Password'
            style={styles.textInput}
            autoCapitalize='none'
            secureTextEntry={data.secureTextEntry ? true : false}
            //onChangeText={(val) => HandlePasswordChange(val)}
            value={password}
            onChangeText={text => setPassword(text)}
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

        <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
          <Text style={[styles.button_label, { color: '#6495ed' }]}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          //onPress={handleLogin}
          //onPress={() => login(data.email, data.password)}
        //onPress={() => navigation.navigate("Home")}

        onPress={() => {
          /*const url = 'http://192.168.56.1:8800/api/auth/loginUser';
          fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: data.email,
              password: data.password
            })
          }).then(res => {
            return res.json()
          }).then(data => console.log(data))
          .catch(error => console.log('ERROR'));*/

          signin(email, password);

        }}
        >
          <View style={styles.button}>
            <LinearGradient
              colors={['#143d7b', '#143d7b']} //Make it NYIT blue
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: '#ffff' }]}>Sign In</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpScreen")}
          style={[styles.signIn, {
            borderColor: '#009387',
            borderWidth: 1,
            marginTop: 10
          }]}
        >
          <Text style={styles.textSign}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2a900'
  },
  header: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 7,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    alignItems: 'center',
    alignContent: 'center',
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
  }
});