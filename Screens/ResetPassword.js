import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  TextInput,
  Image
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'; //https://github.com/oblador/react-native-vector-icons#android
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

const ResetPassword = ({ navigation }) => {

  const [email, setEmail] = useState();

  return (
    <View style={styles.container}>
    <View>
      <Text>
        Please enter the email associated with your account:
      </Text>
    </View>
    
      <View style={styles.footer}>
        <TextInput
            placeholder='Your Email'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => setEmail(val)}
          />
        <View style={styles.action}>
        </View>

        <TouchableOpacity
          onPress={() => alert("Password Reset Request Sent!")}
        >
          <View style={styles.button}>
            <LinearGradient
              colors={['#8800C7', '#8800C7']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: '#ffff' }]}>Reset Password</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text style={styles.forgotPasswordButton}>Have an account already? Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 5,
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
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: '#6495ed'
  },
});