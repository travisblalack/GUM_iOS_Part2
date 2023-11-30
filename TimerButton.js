import YoutubePlayer from 'react-native-youtube-iframe';
import {View,Text,StyleSheet, ScrollView, Alert,TouchableOpacity} from 'react-native';
import { auth, firestore } from '../../../../../firebase';
import { DocumentSnapshot, collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import CustomButton5 from './CustomButton5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const TimerButton = (props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  useEffect(() => {
    // Set the timeout when the component mounts
    const timer = setTimeout(() => {
      setIsButtonDisabled(false);
    }, 900000); // 300000 milliseconds = 5 minutes
    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
    <TouchableOpacity 
        onPress={()=> props.onPress?.() }
        style={styles.button}
        disabled={isButtonDisabled}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
      {isButtonDisabled && <Text>Button will be enabled in 15 minutes</Text>}
      </View>
  );
};
export default TimerButton;

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    button:{
        borderRadius:10,
        padding:10,
        backgroundColor:'darkseagreen',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#ggg'
    }
})