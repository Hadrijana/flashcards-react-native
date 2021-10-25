

import React, { useState } from 'react';
import { useEffect } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MyCard from './Card'
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';



const CardList = ({navigation, route}) => {
    const [keys, setKeys] = useState([]);

    const _retrieveKeys = async () => {
        try {
            let keys = await AsyncStorage.getAllKeys()
            setKeys(keys);
            console.log('Keys are here!')
            //console.log(keys)
          } catch (e) {
            alert('Failed to get keys.')
          }
       
        
      };

      useEffect(
       ()=> {_retrieveKeys()}, []
      )

      useFocusEffect(
        React.useCallback(() => {
          // Do something when the screen is focused
          _retrieveKeys();
          
          return () => {
            
          };
        }, [])
      );
    
    

    //_retrieveKeys();
    //console.log(keys)
    
      
    //let buff= keys
    console.log(keys)
    return(
        <View style={styles.container}>
            <Text>
                
            </Text>
            {keys.map((buf)=><MyCard cow= {JSON.stringify(buf)} key ={JSON.stringify(buf)}/> )}
        
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        //alignItems: 'center'
    }
})

export default CardList