
import {Pressable,StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity, StatusBar,PaperProvider,Linking} from 'react-native';
//import Text from 'react-native'
import { Link, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useCallback} from 'react';
import ImageButton from './ImageButton';
import ImageButton1 from './ImageButton1';
import ImageButton2 from './ImageButton2';
import ImageButton3 from './ImageButton3';
import MenuExample from './MenuExample';


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

    const Stack = createStackNavigator();
    return(

      

     
      
        
      <View style = {styles.container}>
        <Text>Longevity Points</Text>
        <Text>Streak:0</Text>
        
          <View style = {styles.button}>
            <ImageButton onPress={()=> navigation.navigate("StartMoving")}></ImageButton></View>
            <View style = {styles.button1}>
        <ImageButton1 onPress={()=> navigation.navigate("TeachingDemos")}></ImageButton1></View>
    
        <View style = {styles.button2}>
        <ImageButton2 onPress={()=> navigation.navigate("UpdateSchedule")}></ImageButton2></View>
      
        <View style = {styles.button3}>
        <ImageButton3 onPress={()=> navigation.navigate("Teams")}></ImageButton3></View>
      
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
    top:250,
  
  },
  button1:{
    width:100,
    height:100, // is 50% of container width
    left:200,
    right:100,
    top:150,
  
  
  },
  button2:{
    width:100,
    height:100, // is 50% of container width
    left:50,
    right:100,
    top:200,
    
  },
  button3:{
    width:100,
    height:100, // is 50% of container width
    left:200,
    top:100,
    right:100,
   
  },
  
})
export default Home
  
  




 



