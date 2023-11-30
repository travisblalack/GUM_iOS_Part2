import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const CustomButton2 = (props) =>{
return(
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={()=> props.onPress?.() }
                style={styles.button}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
)
}

/// manambahkan action click
export default CustomButton2;

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    button:{
        borderRadius:10,
        padding:10,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#ggg'
    }
})