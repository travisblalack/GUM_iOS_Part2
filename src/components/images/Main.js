import React from 'react';
import {Pressable,StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react=navigation';
const Main = ({navigation})=>{
  const Stack = createStackNavigator();
    return(
      
      
    
      <View style={styles.logBox}>
        
         <Image source={require('./newLogo.png')}/>
          <Text>
          <Text>Welcome Back! Remember to stay signed in to never miss an exercise</Text></Text>
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
           
  
                   <Button title=" Log In" onPress={()=> navigation.navigate("Home")}></Button>
                   <Button title=" New to GUM? Sign up" onPress={()=> navigation.navigate("Sign Up")}></Button> 
                   <View style={styles.container}>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console"></Text>
        
      </View>
    </View> 
      
              </View>
              
              
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:2,
    marginHorizontal: 16,
    borderColor:'blue'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:2,
    marginHorizontal: 16,
    borderColor:'blue'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    ios: {
      backgroundColor: 'red',
    },
  },
  ios: {
    backgroundColor: 'red',
  },


})
export default Main