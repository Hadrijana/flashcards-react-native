import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { purple, white} from './utils/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardList from './components/CardList'
import AddCard from './components/AddCard.js'
import { Provider as PaperProvider } from 'react-native-paper';

const Tab = createBottomTabNavigator();


function Home() {
  return (
    <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: (tintColor) => {
                    let iconName;
        
                    if (route.name === 'CardList') {
                      iconName = 'md-albums'
                      
                    } else if (route.name === 'AddCard') {
                      iconName = 'md-add'
                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={30} color={purple} />;
                  },
                })}
                tabBarOptions={{
                  tintColor: purple,
                  style: {
                    heighr: 56, 
                    backgroundColor: white
                  }
                }}
        >
          <Tab.Screen name="CardList" component={CardList} />
          <Tab.Screen name="AddCard" component={AddCard} />
        </Tab.Navigator>
  );
}

export default class App extends React.Component {
  
  render () {
    
    return(
      <NavigationContainer>
        <PaperProvider>
          <Home/>
        </PaperProvider>
      </NavigationContainer>

    )
  }
    
}


const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})