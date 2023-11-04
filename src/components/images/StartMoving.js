import React from 'react';
import {Picker,Pressable,StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectDropdown from 'react-native-select-dropdown';
import { SelectList } from 'react_native_simple_dropdown_select_list';
const StartMoving= ({navigation})=>{
    const Stack = createNativeStackNavigator();
    const levels= ["Easy","Moderate","Vigorous"]
    const levels1= ["Level 1: Session 1","Level 1: Session 2","Level 1: Session 3",]
    
    return(

      
      <View style = {styles.container}>
    
      <View style={styles.logBox}>
        
      </View>
      
      <SelectDropdown
	data={levels}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem,index) => {
    
    
    if(selectedItem=="Easy"){
      selectedItem=<Button title="Easy" onPress={()=> navigation.navigate("ModerateVideos")}></Button>
          
   return selectedItem
    
   
  

    }
  

    
    if(selectedItem=="Moderate"){
      
    
      selectedItem=<Button title="Moderate" onPress={()=> navigation.navigate("ModerateVideos")}></Button>
      return selectedItem
    }
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
  
      
		return item
	}}
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


})


export default StartMoving