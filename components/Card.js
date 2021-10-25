import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import {  Button, Card, Divider } from 'react-native-paper';



export default class MyCard extends React.Component {
    state = {
        question: " ",
        answer: " " 
    
       
    }
    constructor(props){
        super(props)
        this.state = {isShown: false}
        //this.state = {key : this.props.cow}
        this.handleRevealClick = this.handleRevealClick.bind(this);
        this.handleHideClick = this.handleHideClick.bind(this);
        this._retrieveData = this._retrieveData.bind(this);
      
    }

    _retrieveData = async () => {
        //console.log(this.props.cow + "receiver")
        try {
          const value = await AsyncStorage.getItem(JSON.parse(this.props.cow));
          if (value !== null) {
            // We have data!!
            //console.log('heelo form reciever huje jidsajoiaufuadhashdouahisahd')
            let parsed = JSON.parse(value)
            //console.log(parsed)
            this.setState(parsed)


            
          }
        } catch (error) {
          // Error retrieving data
          console.log(error)

        }
      };

    
   

    handleRevealClick(){
        this.setState({isShown: true})
    }

    handleHideClick(){
        this.setState({isShown: false})
    }

    

    
    render(){
        this._retrieveData()
        const isShown = this.state.isShown;
        if(isShown){
            area = (<TouchableOpacity onPress={this.handleHideClick}>
                <Text>{this.state.answer}</Text>
            </TouchableOpacity>)
        }
        else{
            area = (<TouchableOpacity onPress={this.handleRevealClick}>
               <Text>Click to reveal</Text> 
            </TouchableOpacity>)
        }
        //console.log(this.props.cow)
        //console.log(this.state.answer)
        
        return(

            <View style= {styles.container}>
                <Text>
                    {this.state.question}
                    
                </Text>
                {area}                 
                
            </View>
        ) 
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#DCDCDC',
        maxHeight: 50,
        margin: 5
    }
})

const Answer = (bool) =>{
    if(bool = false){
        return 'Click me to reveal'
    }

    
}