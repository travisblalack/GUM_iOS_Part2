
import {Pressable,StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity, StatusBar,PaperProvider,Linking} from 'react-native';
import firebase from '@react-native-firebase/app';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import ImageButton from './ImageButton';
import ImageButton1 from './ImageButton1';
import ImageButton2 from './ImageButton2';
import ImageButton3 from './ImageButton3';
import CustomButton4 from './CustomButton4';
import MenuExample from './MenuExample';
import { Provider,Divider } from 'react-native-paper'; 
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';




import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
 } from "react-native-popup-menu";
const link1 = 'https://www.paypal.com/paypalme/getupandmove?country.x=US&locale.x=en_US';


const Home= ({navigation,text, iconName, value})=>{
  const [visible, setVisible] = React.useState(false);

  const [videos, setVideos] = useState([]);
  const [userPoints, setUserPoints] = useState(null);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth().currentUser;
        if (currentUser) {
          const userRef = firestore().collection('Users').doc(currentUser.uid);
          const userDoc = await userRef.get();
          if (userDoc.exists) {
            setUserPoints(userDoc.data().points);
            setUserName(userDoc.data().username);
            console.log(userDoc.data());
          } else {
            // Handle case where document doesn't exist
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle the error appropriately
      }
    };
    fetchUserData();
  }, []);

    const Stack = createStackNavigator();


    return(
      <View style = {styles.container}>
      

         
      
      
      
        <Text>Longevity Points</Text>
        <Text>Streak: {userPoints}</Text>
        <MenuExample></MenuExample>
        

          
       
        
          <View style = {styles.button}>
          
            <ImageButton onPress={()=> navigation.navigate("StartMoving")}></ImageButton></View>
            
            <View style = {styles.button1}>
        <ImageButton1 onPress={()=> navigation.navigate("TeachingDemos")}></ImageButton1></View>
    
        <View style = {styles.button2}>
        <ImageButton2 onPress={()=> navigation.navigate("UpdateSchedule")}></ImageButton2></View>
      
        <View style = {styles.button3}>
          
        <ImageButton3 onPress={()=> navigation.navigate("Teams")}></ImageButton3></View>
        <View style = {styles.button4}>
        <CustomButton4 title="Log out" onPress={()=> navigation.navigate("Main")}></CustomButton4></View>
       
       
        
        </View>
     

    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
 // if you want to fill rows left to right
  },

  button:{
    width:100,
    height:100, // is 50% of container width
    left:50,
    right:100,
    top:150,
  
  },
  button1:{
    width:100,
    height:100, // is 50% of container width
    left:200,
    right:100,
    top:50,
  
  
  },
  button2:{
    width:100,
    height:100, // is 50% of container width
    left:50,
    right:100,
    top:60,
    
  },
  button3:{
    width:100,
    height:100, // is 50% of container width
    left:200,
    top:-20,
    right:100,
   
  },
  button4:{
    
    borderRadius:30,
    margin:-1,
    left:100,
    width: 150,
    height: 110,
    


    },
    buttonText:{
        color:'black'
    },
    menu:{
      left:100,
      right:50,
      top:10
    }
    
   
  
  
})
export default Home
  
  




 



