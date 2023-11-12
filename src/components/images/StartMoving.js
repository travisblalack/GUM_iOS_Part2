import React from 'react';
import {Picker,Pressable,StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectDropdown from 'react-native-select-dropdown';
import YoutubePlayer from 'react-native-youtube-iframe';
import { SelectList } from 'react_native_simple_dropdown_select_list';
const StartMoving= ({navigation})=>{
    const Stack = createNativeStackNavigator();
    const levels= ["Easy","Moderate","Vigorous"]
    const levels1= ["Level 1: Session 1","Level 1: Session 2","Level 1: Session 3"]
    const [selected, setSelected] = React.useState([]);
    return(
      <View style = {styles.container}>
       <View style = {styles.Button}>
      <SelectDropdown data={levels} onSelect={(selectedItem, index) => {
       
		console.log(selectedItem, index)}
  }
  
	buttonTextAfterSelection={(selectedItem, index) => {
    if(selectedItem=="Easy"){
      selectedItem= <Button title='Easy' onPress={()=> navigation.navigate("EasyVideos")}></Button>}
     if(selectedItem=="Moderate"){
      selectedItem= <Button title='Moderate' onPress={()=> navigation.navigate("ModerateVideos")}></Button>}
     if(selectedItem=="Vigorous"){
      selectedItem= <Button title='Vigorous' onPress={()=> navigation.navigate("VigorousVideos")}></Button>}

     
    
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
        
    }
	}

	rowTextForSelection={(item, index) => {
    if(item=="Easy"){
      item="Easy"
    }

		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}


      


          />
          </View>
          </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:2,
    marginHorizontal: 16,
    borderColor:'red'
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
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'deepskyblue',
  },
  dropdown4BtnStyle: {
    width: '50%',
    height: 50,
    backgroundColor: 'darkseagreen',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    
    Button:{
      bottom:-50,
      text:'darkseagreen'
    },
  },

})


export default StartMoving