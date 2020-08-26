import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages';
import Buy from './src/services/buy';
import Sell from './src/services/sell';
import Items from './src/Items/item';
import Appp from './src/services/tabs';
import { Provider } from 'react-redux';
import store from './store/index';

const { Navigator, Screen } = createStackNavigator();

export default class App extends React.Component {

  render(){
    return (

      <NavigationContainer>
            <Provider store={store}>
              <Navigator screenOptions={{headerShown: false}}>
                  <Screen name="Home" component={Home} />
                  <Screen name="Buy" component={Buy} />
                  <Screen name="Sell" component={Sell} />
                  <Screen name="Items" component={Items} />
                  <Screen name="Appp" component={Appp} />

                  
              </Navigator>
              </Provider>
          </NavigationContainer>

    );
  }
}


