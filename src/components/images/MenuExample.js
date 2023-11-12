
import React, { useState } from 'react'; 
import { View, StyleSheet, Alert,Linking } from 'react-native'; 
import { Button, Menu, PaperProvider, Provider,Divider } from 'react-native-paper'; 
import MenuButton from './MenuButton';
const MenuExample = () => { 
  const [visible, setVisible] = useState(false); 
  
  const closeMenu = () => setVisible(false); 
  const openMenu = (v) => setVisible(true); 
  return ( 
    <PaperProvider> 
      <View style={{
          paddingTop: 5,
          flexDirection: 'row',
          justifyContent: 'right',
          bottom:50,
          left:50,
          
         

        }}>
        <Menu 
          visible={visible} 
          onDismiss={closeMenu} 
          anchor={ 
            <Button onPress={openMenu}>...</Button>}> 
            <Menu.Item 
            onPress={() => { 
                Linking.openURL("https://getupandmove.net")}}
            
            title="Website"
          /> 
          <Menu.Item 
            onPress={() => { 
                Linking.openURL("https://getupandmove.net/pages/contact.html")
            }} 
            title="Contact"
          /> 
          <Menu.Item 
            onPress={() => { 
                Linking.openURL("https://www.markangelhealingarts.com/about.html")
            }} 
            title="About"
          /> 
          <Menu.Item 
            onPress={() => { 
                Linking.openURL("https://www.paypal.com/donate?token=TqFzOP28ue0kW3lhMai_p6Y_tNxVxnlZJU4T4guV3LdU-g5QRl6Q-FiFfqPv501POcN-CM5LWZt4cuVh")}}
             
            title="Donate"
          /> 
        </Menu> 
      </View> 

      
    </PaperProvider> 
  ); 
}; 
  
export default MenuExample; 
  


