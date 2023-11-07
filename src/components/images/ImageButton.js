import React from "react";
import {  SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,} from 'react-native'

const ImageButton = (props) =>{
    return (
        
            <SafeAreaView style={{flex: 1}}>
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.buttonFacebookStyle}
                  activeOpacity={0.5}>
                  <Image source={require('./man-dancing.png')}/>
                   <View style={styles.buttonImageIconStyle}/>
                   <Text style={styles.buttonTextStyle}>
            Start Moving
            </Text>
                </TouchableOpacity>
           </View>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        margin: 100,
        marginTop: 10,
        padding: 30,
      
      },
      buttonFacebookStyle: {
        flexDirection: 'row',
        flex:0.3,
        alignItems: 'left',
        backgroundColor: '#485a96',
        borderWidth: 0.3,
        borderColor: '#fff',
        borderRadius:10,
        padding:10,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        height: 40,
        borderRadius: 0,
        margin: 10,
      },
      buttonImageIconStyle: {
        padding: 100,
        margin: 2,
        height: 5,
        width: 2,
       
      },
    
    buttonTextStyle: {
      color: 'black',
      flex:1,
      marginTop: 25,
      marginLeft: -245,
      marginBottom:-35,
    },
      buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 10,
        height: 40,
      },
    });
    export default ImageButton