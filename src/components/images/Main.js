import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app'; 
import {Pressable,StyleSheet,Button,TouchableOpacity,View,SafeAreaView,Alert,TextInput, Image,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton from './CustomButton';
import {createAppContainer} from 'react=navigation';
import CustomButton4 from './CustomButton4';

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
        navigation.navigate("Home")
        
      })
      .catch(error => {
        console.error(error);
      });
  };
  const Stack = createStackNavigator();
    return(
      <View style = {styles.container}>
        <View style = {styles.Image}>
         <Image 
           style={{ alignSelf: 'center' }}
         source={require('./newLogo.png')}/>
         </View>
          <Text>
          <Text>Welcome Back! Remeber to stay signed in and never miss a workout!</Text></Text>
          <>
          <TextInput
       
       style={{
         backgroundColor:'white',
         height: 40,
         borderWidth: 1,}}
       placeholder="Email"
       value={email}
       onChangeText={setEmail}
     />
       <TextInput
        style={{
         backgroundColor:'white',
         height: 40,
         borderWidth: 1,}}
       placeholder="Password"
       value={password}
       onChangeText={setPassword}
       secureTextEntry
     />
      

      <CustomButton4  title="Sign In" onPress={handleSignIn} />
  
    </>
    

      <View style = {styles.Button}>
     <Button title="New to GUM? Sign Up" onPress={()=> navigation.navigate("SignUp")}></Button> 
     </View>  
                  
   
        <Text testID="pressable_press_console"></Text>
      </View>
   
             
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'deepskyblue',
  },
  CustomButton4:{
    bottom:-50
  },
  Button:{
    bottom:-50,
    text:'darkseagreen'
  },
  Image:{
      top:-100,
      height:100,
     
  }
});
export default Main