/* eslint-disable no-undef */
import YoutubePlayer from 'react-native-youtube-iframe';
import {View,Text,StyleSheet, ScrollView} from 'react-native';
import { auth, firestore } from '../../../../../firebase';
import { DocumentSnapshot, collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

const EasyVideos=({})=> {
  console.log("rendering page")
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
        const querySnapshot = await firestore().collection("GuidingVideos").get();
        const videoData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setVideos(videoData);
    };
    fetchVideos();
}, []);
    const firstVideoUrl = videos.length > 0 ? videos[0].YtUrl : null;
  return (
    
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
      <Text>{videos}</Text>
        <Text>Level 1 Session 1</Text>
        <YoutubePlayer
      height={300}
      play={false}
      videoId={firstVideoUrl}
    />
            <Text>Level 1 Session 2</Text>
            <YoutubePlayer
      height={300}
      play={false}
      videoId={'KAk5BvGV76I'}
    />
             <Text>Level 1 Session 3</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'lTqvW32S3NQ'} 
          />        
             <Text>Level 1 Session 4</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'csCZ7OZx8ME'} 
          />         
             <Text>Level 1 Session 5</Text>
             <YoutubePlayer
      height={300}
      play={false}
      videoId={'aq79Tsz-na0'} 
 />         
             <Text>Level 1 Session 6</Text>
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
export default EasyVideos