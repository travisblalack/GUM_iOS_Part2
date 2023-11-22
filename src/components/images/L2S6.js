/* eslint-disable no-undef */
import YoutubePlayer from 'react-native-youtube-iframe';
import {View,Text,StyleSheet, ScrollView} from 'react-native';
import { auth, firestore } from '../../../../../firebase';
import { DocumentSnapshot, collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

const L2S6=({})=> {
  console.log("rendering page")
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const fetchVideos = async () => {
        const querySnapshot =  await firestore().collection('TeachingVideos').where("Level","==",2).where("Title","==","Power Exercises").orderBy("Session").get();
        const videoData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setVideos(videoData);
        console.log(querySnapshot)
    };
    fetchVideos();
}, []);
   
  return (
    
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        {videos.map(video => (
          <View>
          
          <Text></Text>
           
                 <YoutubePlayer
                 key={video.id}
                 height={300}
                 play={false}
                 videoId={video.YtUrl}
               />
               <Text>{video.Desc}</Text>
              </View>
            ))}
     

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
export default L2S6