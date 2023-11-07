import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app'; 
import {Pressable,StyleSheet,Button,TouchableOpacity,View,SafeAreaView,Alert,TextInput, Image,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton from './CustomButton';
import {createAppContainer} from 'react=navigation';

const Main = ({navigation})=>{
  const firebaseConfig = {
    apiKey: "AIzaSyBfagTE-ImAy1n1J6rdNMHmD3E886H8oQk",
    authDomain: "gum-android.firebaseapp.com",
    projectId: "gum-android",
    storageBucket: "gum-android.appspot.com",
    messagingSenderId: "462866559865",
    appId: "1:462866559865:web:533f931cb6a18cb31db5a8",
    measurementId: "G-K88BJV87S3"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } 
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        console.error(error);
      });
  };
  const Stack = createStackNavigator();
  

    return(
      <View style = {styles.container}>
    
      <View style={styles.logBox}>
        
      </View>
    
         <Image source={require('./newLogo.png')}/>
          <Text>
          <Text>Welcome Back! Make sure your username and password are at least 5+ Characters</Text></Text>
          <>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton title="Sign In" onPress={handleSignIn}></CustomButton> 
    </>
                          <CustomButton title=" Log In" onPress={()=> navigation.navigate("Home")}></CustomButton>
                   <Button title="New to GUM? Sign Up" onPress={()=> navigation.navigate("SignUp")}></Button>   
                   <View style={styles.container}>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console"></Text>
      </View>
    </View> 
              </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'deepskyblue',
  },
  
});
export default Main