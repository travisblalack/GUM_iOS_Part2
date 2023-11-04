
import { StyleSheet, Button, View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<Text>Update your moving schedule!</Text>
export default function App() {
  const [date, setDate] = useState(new Date());

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
<Text>Workout 1:</Text>
      <DateTimePicker
      
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
      />
      <Text>Workout 2:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
      />
      <Text>Workout 3:</Text>
     <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
      />
      <Text>Workout 4:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
      />
      <Text>Workout 5:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
      />
      <Text>Workout 6:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
      />
      
       <Button title=" Add Time" onPress={()=> navigation.navigate("Home")}></Button>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});