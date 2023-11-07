import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const CustomButton4 = (props) =>{
    return(
        <>
            <View style={styles.container}>
            <TouchableOpacity style={styles.box} onPress={()=>{openURL('https://www.moodplan.net/skilldesmonats')}}>



</TouchableOpacity>`
            </View>
        </>
    )
}

/// manambahkan action click
export default CustomButton4;

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    button:{
        borderRadius:10,
        padding:10,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#ggg'
    }
})