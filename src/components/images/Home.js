
import {Pressable,StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity, StatusBar,PaperProvider,Linking} from 'react-native';
//import Text from 'react-native'
import { Link, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useCallback} from 'react';
import ImageButton from './ImageButton';

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
        <SafeAreaView>
                    <ImageButton title="start moving" onPress={()=> navigation.push("StartMoving")}></ImageButton>
                   <Button title="Teaching Demos" onPress={()=> navigation.navigate("TeachingDemos")}></Button>  
                   <Button title="Update Schedule" onPress={()=> navigation.navigate("UpdateSchedule")}></Button> 
                   <Button title="Teams" onPress={()=> navigation.navigate("Teams")}></Button> 
                   <Button title="Image" onPress={()=> navigation.navigate("ImageButton")}></Button> 
                   
                   <ImageButton title="start moving" onPress={()=> navigation.push("StartMoving")}></ImageButton>
                  <StatusBar style="auto"/>
                   </SafeAreaView>
                   <MenuProvider style={styles.container}>
     <Menu>
       <MenuTrigger
         text="..."
         customStyles={{
           triggerWrapper: {
             top: -365,
             left:175
           },
         }}
       />
       <MenuOptions>
       <MenuOption onSelect={() =>  navigation.navigate("Main")} text='Logout' />
         <MenuOption onSelect={()=>Linking.openURL("https://getupandmove.net")}text="Website"/>
         <MenuOption onSelect={()=>Linking.openURL("https://getupandmove.net/pages/contact.html")}text="Contact"/>
         <MenuOption onSelect={()=>Linking.openURL("https://www.markangelhealingarts.com/about.html")}text="About"/>
         <MenuOption onSelect={()=>Linking.openURL("https://www.paypal.com/donate?token=TqFzOP28ue0kW3lhMai_p6Y_tNxVxnlZJU4T4guV3LdU-g5QRl6Q-FiFfqPv501POcN-CM5LWZt4cuVh")}text="Donate"/>
       </MenuOptions>
     </Menu>
   </MenuProvider>
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



export default Home