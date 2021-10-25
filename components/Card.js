import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';




export default class MyCard extends React.Component {
    mounted;
    state = {
        question: "",
        answer: "" 
    
       
    }
    constructor(props){
        super(props)
        this.state = {isShown: false}
        //this.state = {key : this.props.cow}
        this.handleRevealClick = this.handleRevealClick.bind(this);
        this.handleHideClick = this.handleHideClick.bind(this);
        this._retrieveData = this._retrieveData.bind(this);
      
    }

    componentDidMount(){
        this.mounted=true;
        this._retrieveData();
    }

    componentWillUnmount(){
        this.mounted=false;
    }

    _retrieveData = async () => {
        //console.log(this.props.cow + "receiver")
        try {
          const value = await AsyncStorage.getItem(JSON.parse(this.props.cow));
          if (value !== null) {
            // We have data!!
            let parsed = JSON.parse(value)
            if(this.mounted){
                this.setState(parsed)
            }

            
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
                <Text style= {styles.answer} >{this.state.answer}</Text>
            </TouchableOpacity>)
        }
        else{
            area = (<TouchableOpacity onPress={this.handleRevealClick}>
               <Text style= {styles.answer} >Click to reveal</Text> 
            </TouchableOpacity>)
        }
        //console.log(this.props.cow)
        //console.log(this.state.answer)
        
        return(

            <View style= {styles.container}>
                <Text style= {styles.question}>
                    {this.state.question}
                    
                </Text >
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
        backgroundColor: '#FFFFFF',
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        
        
    },

    question:{
        fontSize: 17,
        margin: 10,
    },
    answer:{
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        color: '#290066'
    }

})

const Answer = (bool) =>{
    if(bool = false){
        return 'Click me to reveal'
    }

    
}