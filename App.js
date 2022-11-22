import 'react-native-gesture-handler';
import { StyleSheet, StatusBar, View } from 'react-native';
import Navigation from './Navigation/Navigation';
import AuthStack from './Navigation/AuthStack';
import SplashScreen from './Screens/SplashScreen';
import RootStackScreen from './Navigation/RootStackScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ChatStack from './Navigation/ChatStack';
import { AuthProvider } from './Context/AuthContext';

import { AppNav } from './Navigation/AppNav';

//https://stackoverflow.com/questions/1125968/how-do-i-force-git-pull-to-overwrite-local-files

export default function App({ props, navigation }) {
  return (
    /*<>
      
        <StatusBar barStyle="auto" />
        <AuthStack />
      
    </>*/

    <AuthProvider>
        <AppNav />
    </AuthProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
