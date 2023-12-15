import React, { useState } from 'react'; 
import { View } from 'react-native'; import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { NavigationContainer } from '@react-navigation/native'; 

import Home from './screens/home'; 
import MSEUF from './screens/mseuf'; 
import Story from './screens/mseufstory'; 
import RootStackParamList from './types'; 

const Stack = createNativeStackNavigator<RootStackParamList>(); 

const HandBookApp = () => { 

  return ( 
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='home'> 
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={{
            headerStyle: {backgroundColor: '#8C0909'}, 
            headerTitleStyle: {fontWeight: 'bold', color: '#fff', fontSize: 25},
            headerTitleAlign: 'center',
          }}/>

        <Stack.Screen 
          name="mseuf" 
          component={MSEUF}
          options={{
            headerStyle: {backgroundColor: '#8C0909'}, 
            headerTitleStyle: {fontWeight: 'bold', color: '#fff', fontSize: 25},
            headerTitleAlign: 'center',
          }}/>

        <Stack.Screen 
          name="mseufstory" 
          component={Story}
          options={{
            headerStyle: {backgroundColor: '#8C0909'}, 
            headerTitleStyle: {fontWeight: 'bold', color: '#fff', fontSize: 25},
            headerTitleAlign: 'center',
          }}/>

      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
} 

export default HandBookApp;
