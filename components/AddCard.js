import AsyncStorage from '@react-native-community/async-storage';
import React from 'react'
import {StyleSheet, View} from 'react-native'
import { Button, TextInput } from 'react-native-paper';



export default class AddCard extends React.Component {
    state = {
        question: "",
        answer: "" 
    
       
    }
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.myRef2 = React.createRef();
      
    }
    
    submitName = async() => {
      if(this.state != ''){
        try{
          await AsyncStorage.setItem(this.state.answer, JSON.stringify( this.state))
          //console.log('done')
          this.myRef.current.setNativeProps({ value: "" });
          this.myRef2.current.setNativeProps({ value: "" });
          this.setState({question: ''});
          this.setState({answer: ''});

          alert('Card added')

      }catch (e){
          console.log(e)
      }
      }
       
    }

      _removeData =async() =>{
        try {
            await AsyncStorage.clear()
            alert('Storage successfully cleared! !!!')
          } catch (e) {
            alert('Failed to clear the async storage.')
          }
      }

    render(){
         return(
        <View style={styles.container}>
            
            <TextInput style={styles.textInput} mode = 'outlined' label = "Question" 
                        multiline= {true}
                        ref={this.myRef}
                        value = {this.state.question}
                        onChangeText={(value) => this.setState({question: value})}
                       >
            </TextInput>
            
            <TextInput style={styles.textInput} mode = 'outlined' label = "Answer" 
                       multiline= {true} 
                      ref={this.myRef2}
                      value = {this.state.answer}
                      onChangeText={(val) => this.setState({answer: val})}
                       >

            </TextInput>
            <Button onPress={this.submitName} color='#290066' style={styles.button}
                          mode="contained">
                          Submit
            </Button>

            <Button onPress={this._removeData}  color='#290066'  style={styles.button} 
                            mode="contained">
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
        color: '#f2f2f2',
        //alignItems: 'center'
        
    },
    button:{
      margin: 10,
      borderColor: '#290066',
      //backgroundColor: '#ffffff'
    },

    textInput: {
      margin: 10,
      backgroundColor: '#ffffff'
    }
})

//export default AddCard