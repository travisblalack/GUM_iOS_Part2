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
const EasyVideos=({})=> {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const video = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false); 
  const [isPlaying1, setIsPlaying1] = React.useState(false);
  const [isPlaying2, setIsPlaying2] = React.useState(false);
  const [isPlaying3, setIsPlaying3] = React.useState(false);
  const [isPlaying4, setIsPlaying4] = React.useState(false);
  const [isPlaying5, setIsPlaying5] = React.useState(false);
  const [isPlaying6, setIsPlaying6] = React.useState(false);
  const [isPlaying7, setIsPlaying7] = React.useState(false);
  const [isPlaying8, setIsPlaying8] = React.useState(false);
  const [isPlaying9, setIsPlaying9] = React.useState(false);
  const [isPlaying10, setIsPlaying10] = React.useState(false);
  const [isPlaying11, setIsPlaying11] = React.useState(false);

  const firstVideo = React.useRef(null);
  const secondVideo = React.useRef(null);
  const thirdVideo = React.useRef(null);
  const fourthVideo = React.useRef(null);
  const fifthVideo = React.useRef(null);
  const sixthVideo = React.useRef(null);
  const seventhVideo = React.useRef(null);
  const eighthVideo = React.useRef(null);
  const ninthVideo = React.useRef(null);

  const tenthVideo = React.useRef(null);

  const eleventhVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusFirstVideo, setStatusFirstVideo] = React.useState({})
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
  const [statusThirdVideo, setStatusThirdVideo] = React.useState({});
  const [statusFourthVideo, setStatusFourthVideo] = React.useState({});
  const [statusFifthVideo, setStatusFifthVideo] = React.useState({});
  const [statusSixthVideo, setStatusSixthVideo] = React.useState({});
  const [statusSeventhVideo, setStatusSeventhVideo] = React.useState({});
  const [statusEighthVideo, setStatusEighthVideo] = React.useState({});
  const [statusNinthVideo, setStatusNinthVideo] = React.useState({});
  const [statusTenthVideo, setStatusTenthVideo] = React.useState({});
  const [statusEleventhVideo, setStatusEleventhVideo] = React.useState({});
  const [selectedValue, setSelectedValue] = useState('');

   
  
  return (
    
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
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
    
            
        <Video
  ref={secondVideo}
  style={styles.video}
  paused={!isPlaying1} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusSecondVideo}
 />         
 
            <Text>Level 1 Session 2</Text>
          <Button
              onPress={() => setIsPlaying1(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          /> 
      <Video
      
  ref={thirdVideo}
  style={styles.video}
  paused={!isPlaying2} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusThirdVideo}
 />         
             <Text>Level 1 Session 3</Text>
          <Button
              onPress={() => setIsPlaying2(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          /> 
      <Video
  ref={fourthVideo}
  style={styles.video}
  paused={!isPlaying3} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusThirdVideo}
 />         
             <Text>Level 1 Session 4</Text>
          <Button
              onPress={() => setIsPlaying3(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          /> 
     <Video
  ref={fifthVideo}
  style={styles.video}
  paused={!isPlaying4} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusFourthVideo}
 />         
             <Text>Level 1 Session 5</Text>
          <Button
              onPress={() => setIsPlaying4(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          />
    <Video
  ref={sixthVideo}
  style={styles.video}
  paused={!isPlaying5} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusFifthVideo}
 />         
             <Text>Level 1 Session 6</Text>
          <Button
              onPress={() => setIsPlaying5(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          /> 
          
    <Video
  ref={sixthVideo}
  style={styles.video}
  paused={!isPlaying5} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusFifthVideo}
 />         
             <Text>Uniting Earth and Sky(All Levels)</Text>
          <Button
              onPress={() => setIsPlaying6(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          /> 
 <Video
  ref={sixthVideo}
  style={styles.video}
  paused={!isPlaying6} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusSixthVideo}
 />         
             <Text>Proper Standing Posture(All Levels)</Text>
          <Button
              onPress={() => setIsPlaying7(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          /> 
<Video
  ref={seventhVideo}
  style={styles.video}
  paused={!isPlaying7} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusSeventhVideo}
 />         
             <Text>Joint Mobilization(All Levels)</Text>
          <Button
              onPress={() => setIsPlaying8(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          /> 
<Video
  ref={eighthVideo}
  style={styles.video}
  paused={!isPlaying8} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusEighthVideo}
 />         
             <Text>Joint Mobilization(All Levels)</Text>
          <Button
              onPress={() => setIsPlaying9(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          /> 
<Video
  ref={ninthVideo}
  style={styles.video}
  paused={!isPlaying9} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusNinthVideo}
 />         
             <Text>Healing Sounds(All Levels)</Text>
          <Button
              onPress={() => setIsPlaying10(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          /> 
<Video
  ref={tenthVideo}
  style={styles.video}
  paused={!isPlaying10} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusTenthVideo}
 />         
             <Text>Organ Clensing(All Levels)</Text>
          <Button
              onPress={() => setIsPlaying10(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          /> 
<Video
  ref={eleventhVideo}
  style={styles.video}
  paused={!isPlaying10} 
  useNativeControls
  resizeMode="contain"
  onPlaybackStatusUpdate={setStatusEleventhVideo}
 />         
             <Text>Vitality Cultivation(All Levels)</Text>
          <Button
              onPress={() => setIsPlaying10(p => !p)}  
              title={isPlaying ? 'Stop' : 'Play'}  
          /> 

</ScrollView>
<View style={{marginTop:50}}>
        <Text style={{marginTop:10,color:'gray'}}>{selectedValue}</Text>
        
      </View>
</View>

)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'1000px',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 60px'
  },
 
  video: {
    width: 300,
    height: 500,
  },
  buttons: {
    margin: 16
  }
});
export default EasyVideos