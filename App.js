import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen'; 
import LoginScreen from './screens/LoginScreen'; 
import SignupScreen from './screens/SignupScreen'; 
import Dashboard from './screens/Dashboard'; 
import CheckList from './screens/CheckList'; 
import EventList from './screens/EventList'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="CheckList" component={CheckList}/>
        <Stack.Screen name="EventList" component={EventList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
