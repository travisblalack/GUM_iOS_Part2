/* eslint-disable no-undef */
import React from 'react';
import Video from 'react-native-video'
import {View,Button,Text,SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView, SelectInput,Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { WebView } from 'react-native';
import { useState } from 'react';
import { SelectList } from 'react_native_simple_dropdown_select_list';
import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const L1S1=({})=> {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const video = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false); 


  const firstVideo = React.useRef(null);

  const [status, setStatus] = React.useState({});
  const [statusFirstVideo, setStatusFirstVideo] = React.useState({})
  const [selectedValue, setSelectedValue] = useState('');

   
  
  return (    
    <View style={styles.container}>
      <Video
  
    ref={firstVideo}
    style={styles.video}
    paused={!isPlaying} 
    useNativeControls
    resizeMode="contain"
    onPlaybackStatusUpdate={setStatusFirstVideo}
   />       
        <Text>Level 1 Session 1</Text>
            <Button
            
                onPress={() => setIsPlaying(p => !p)}  
                title={isPlaying ? 'Stop' : 'Play'}  
            />  
 </View>
 );
};
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
  },
  video: {
    width: 300,
    height: 500,
  },


})


export default L1S1