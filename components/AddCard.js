import AsyncStorage from '@react-native-community/async-storage';
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { purple, white, blue} from '../utils/colors'



export default class AddCard extends React.Component {
    state = {
        question: " ",
        answer: " " 
    
       
    }
    constructor(props){
        super(props)
      
    }
    
    submitName = async() => {
      if(this.state != ''){
        try{
          await AsyncStorage.setItem(this.state.answer, JSON.stringify( this.state))
          //console.log('done')
          alert('Card added')

      }catch (e){
          console.log(e)
      }
      }
       
    }

      _removeData =async() =>{
        try {
            await AsyncStorage.clear()
            alert('Storage successfully cleared!')
          } catch (e) {
            alert('Failed to clear the async storage.')
          }
      }

    render(){
         return(
        <View style={styles.container}>
            
            <TextInput mode = 'outlined' label = "Question"
                    onChangeText={(val) => this.setState({question: val})}
                       >
            </TextInput>
            
            <TextInput mode = 'outlined' label = "Answer"
                    onChangeText={(val) => this.setState({answer: val})}
                       >

            </TextInput>
            <Button onPress={this.submitName} style={styles.button}
                          mode="outlined">
                          Submit
            </Button>

            <Button onPress={this._removeData}  mode="outlined" style={styles.button}>
              Delete all!
            </Button>
        </View>
    )
    }
   
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        //alignItems: 'center'
        
    },
    button:{
      margin: 10,
    }
})

//export default AddCard