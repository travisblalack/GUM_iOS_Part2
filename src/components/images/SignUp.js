import React from 'react';
import {Pressable,StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity} from 'react-native';
//import Text from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton from './CustomButton';
const SignUp= ({navigation})=>{
    const Stack = createNativeStackNavigator();
    return(
      <View style = {styles.container}>
    
      <View style={styles.logBox}>
        
      </View>
    
         <Image source={require('./newLogo.png')}/>
          <Text>
          <Text>Welcome Back! Make sure your username and password are at least 5+ Characters</Text></Text>
         <TextInput
           style={{
             height: 40,
             borderColor: 'gray',
             borderWidth: 1,
           }}
           placeholder="Email"
           />
                  <TextInput
             style={{
               height: 40,
               borderColor: 'gray',
               borderWidth: 1,
             }}
             placeholder="Password"
           />
                          <CustomButton title=" Log In" onPress={()=> navigation.navigate("Home")}></CustomButton>
                   <Button title="Already have an account? Login" onPress={()=> navigation.navigate("Main")}></Button>   
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


export default SignUp