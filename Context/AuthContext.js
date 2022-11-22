import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {Children, createContext, useState, useEffect} from "react";

export const AuthContext = createContext();

//download this package for AsyncStorage
//https://react-native-async-storage.github.io/async-storage/docs/install/

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const [info, setUserInfo] = useState(null);
    //const [data, setData] = useState(null);

    //let info = {};

    const signin = (email, password) => {
        setIsLoading(true);

        const url = 'http://192.168.2.66:8800/api/auth/loginUser';
        /*fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        }).then(function(res) {
                let userInfo = res.data;
                setUserInfo(userInfo);
                setUserToken(userInfo._id); //userId = token

                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                AsyncStorage.setItem('userToken', JSON.stringify(userInfo._id));

                console.log(userInfo);
                console.log("User Token" + userInfo._id)
            })
        .catch(error => console.log('ERROR'));*/
        fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password
            })
          }).then(res => {
            return res.json()
          }).then(
            data => {console.log(data)
            let info = data;
            console.log("Info Stored to let", info);

            setUserInfo(info);
            setUserToken(info._id); //userId = token

            AsyncStorage.setItem('userInfo', JSON.stringify(info));
            AsyncStorage.setItem('userToken', JSON.stringify(info._id));

            console.log(info._id);
            }
          )
          .catch(error => console.log('ERROR'));

        //setUserToken('Haasf1');
        //AsyncStorage.setItem('userToken', 'Haasf1');
        setIsLoading(false);
    }

    const signout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
        console.log("User signed out");
    }

    const isSignedIn = async() => {
        try{
            setIsLoading(true);
            let info = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            info = JSON.parse(info);

            if(info){
                setUserToken(userToken);
                setUserInfo(info);
            }

            setIsLoading(false);
        }catch(e){
            console.log("isSignedIn error")
        }
    }

    useEffect(() => {
        isSignedIn();
    }, []);

    return(
        <AuthContext.Provider value={{signin, signout, isLoading, userToken, info}}>
            {children}
        </AuthContext.Provider>
    );
}