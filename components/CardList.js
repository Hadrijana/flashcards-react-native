

import React, { useState } from 'react';
import { useEffect } from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import MyCard from './Card'
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';



const CardList = ({navigation, route}) => {
    const [keys, setKeys] = useState([]);

    let mounted;

    const _retrieveKeys = async () => {
      if(mounted){ 
        try {
            let keys = await AsyncStorage.getAllKeys()
            setKeys(keys);
            console.log('Keys are here!')
            //console.log(keys)
          } catch (e) {
            alert('Failed to get keys.')
          }
        }
      };

      useEffect(()=> {
        mounted = true; 
        _retrieveKeys();

        return () => {
          mounted=false}
      }, [])

      useFocusEffect(
        React.useCallback(() => {
          // Do something when the screen is focused
          mounted=true;
          _retrieveKeys();
          
          return () => {
            mounted = false;
          };
        }, [])
      );
    
    
      const renderItem = ({ item }) => (
        //<HistoryItem cow= {mounted?null : JSON.stringify(item)} key ={mounted?null:JSON.stringify(item)} />
        <MyCard cow= {mounted?null : JSON.stringify(item)} key ={mounted?null:JSON.stringify(item)}/> 
      ); 

      
   
    return(
        <View style={styles.container}>
            <Text>
                
            </Text>
            <FlatList
              data={keys}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>)
}

// {keys.map((buf)=><MyCard cow= {JSON.stringify(buf)} key ={JSON.stringify(buf)}/> )}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
        //alignItems: 'center'
    }
})

export default CardList