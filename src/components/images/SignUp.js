
import {StyleSheet,Button,View,TextInput, Image,Text, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomButton4 from './CustomButton4';
import { auth,firestore } from '../../../../../firebase';
import React, { useState } from 'react';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const handleSignUp = () => {
        auth().createUserWithEmailAndPassword(email, password,username)
            .then((userCredential) => {
                const uid = userCredential.user.uid;
                // Initialize user data in Firestore
                Alert.alert("User "+uid+"created!")
                
                firestore().collection('Users').doc(uid).set({
                    username: username,
                    points: 0,
                })
                .then(() => {
                    console.log("User data initialized in Firestore");
                    console.log(username);
                    navigation.navigate("Home")
                    Alert.alert("User "+username+" created!")
                    console.log(username);

                })
                .catch((error) => {
                    console.error("Error initializing user data in Firestore:", error);
                });
            })
            .catch((error) => {
                console.error("Error creating user:", error);
            });
    };
    <CustomButton4  title="Sign Up" onPress={handleSignUp} />
  const Stack = createStackNavigator();
    return(
      <View style = {styles.container}>
        <View style = {styles.Image}>
         <Image 
           style={{ alignSelf: 'center' }}
         source={require('./newLogo.png')}/>
         </View>
          <Text>
          <Text>Welcome Back! Make sure your username and password are at least 5+ Characters</Text></Text>
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
        <TextInput
        style={{
         backgroundColor:'white',
         height: 40,
         borderWidth: 1,}}
       placeholder="User"
       value={username}
       onChangeText={setUsername}
     
     />
       
 
       <CustomButton4  title="Sign Up" onPress={handleSignUp} />
   
     </>
     
 
       <View style = {styles.Button}>
      <Button title="Alreay have an account? Sign in" onPress={()=> navigation.navigate("Main")}></Button> 
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
 export default SignUp