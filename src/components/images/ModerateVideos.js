import React from 'react';
import Video from 'react-native-video'
import YoutubePlayer from 'react-native-youtube-iframe';
import WebView from 'react-native-webview';
import {View,Button,Text,SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView, SelectInput,Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useState } from 'react';
import { SelectList } from 'react_native_simple_dropdown_select_list';
import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ModerateVideos=({})=> {
  
  return (
    
    
      
        <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
      
        <Text>Level 2 Session 1</Text>
        <YoutubePlayer
      height={300}
      play={false}
      videoId={'lJQ1NbzlaFs'}
    />
            <Text>Level 2 Session 2</Text>
            <YoutubePlayer
      height={300}
      play={false}
      videoId={'tyWZYK0-JX0'}
    />
             <Text>Level 2 Session 3</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'AIlvssmTTJc'} 
          />        
             <Text>Level 2 Session 4</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'mm8Stw7qPuU'} 
          />         
             <Text>Level 2 Session 5</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'aq79Tsz-na0'} 
 />         
             <Text>Level 2 Session 6</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'YqV2EfLFyG4'} 
 />              
      <Text>Uniting Earth and Sky(All Levels)</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'dBuwLXUwUrw'} 
 />         
          
             <Text>Proper Standing Posture(All Levels)</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'ajiGhRoez2g'} 
 />         
        
             <Text>Joint Mobilization(All Levels)</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'wlzaS9q-XsU'} 
 />         
         
             <Text>Chair Exercises(All Levels)</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'_RLwwEE-lI4'} 
 />         
         
             <Text>Healing Sounds(All Levels)</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'av4HD-NkyWc'} 
 />         
          
             <Text>Organ Clensing(All Levels)</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'7rtZtqLRkrI'} 
 />         
        
             <Text>Vitality Cultivation(All Levels)</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'ZRefiU-jNwQ'} 
 />         
   

</ScrollView>
<View style={{marginTop:50}}>
      
        
      </View>
</View>

)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'deepskyblue',
  },
video: {
  width: 300,
  height: 500,
},
buttons: {
  margin: 16
}
});
export default ModerateVideos