
import { StyleSheet, Button, View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton4 from "./CustomButton4";
export default function App() {
  
  const [date, setDate] = useState(new Date());
  const [reminder, setReminder] = useState('');
  const [open, setOpen] = useState(false);

  


  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <Text>Update your moving schedule!</Text>

<Text>Workout 1:</Text>
      <DateTimePicker
      
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
        style={styles.button}
      />
      <Text>Workout 2:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
        style={styles.button}
      />
      <Text>Workout 3:</Text>
     <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
        style={styles.button}
      />
      <Text>Workout 4:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
        style={styles.button}
      />
      <Text>Workout 5:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
        style={styles.button}
      />
      <Text>Workout 6:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        display="default"
        onChange={onChange}
        style={styles.button}
      />
      
       <CustomButton4 title=" Add Time" onPress={()=> navigation.navigate("Home")}></CustomButton4>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'deepskyblue',
  },
    button:{
      borderRadius:10,
      padding:1,
      backgroundColor:'darkseagreen',
      justifyContent:'left',
      alignItems:'center'
 
    
  },
});