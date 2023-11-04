
import React, {useCallback} from 'react';
import {StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity,Linking,Pressable} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const link1 = 'https://www.paypal.com/paypalme/getupandmove?country.x=US&locale.x=en_US';
const link2='https://www.paypal.com/paypalme/getupandmove?country.x=US&locale.x=en_US'


const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const Teams = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return(
    <View style = {styles.container}>
      
      <SafeAreaView>
                  <OpenURLButton url={link1}>Create Teams</OpenURLButton>
                  <Button title="Join Team" onPress={()=> navigation.push("JoinTeam")}></Button>
                  <Button title="Current Teams" onPress={()=> navigation.push("CurrentTeams")}></Button>
                  <Button title="About Teams" onPress={()=> navigation.push("AboutTeams")}></Button>
                  <OpenURLButton url={link2}>Paypal</OpenURLButton>
          
                 </SafeAreaView>
 
    <View style={styles.logBox}>
      <Text testID="pressable_press_console"></Text>
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
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  }

});

export default Teams