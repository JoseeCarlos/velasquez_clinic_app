import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './login/Main';
import SignupScreen from './singUp/Main';
import Home from './home/Main';


const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default StackNavigator;