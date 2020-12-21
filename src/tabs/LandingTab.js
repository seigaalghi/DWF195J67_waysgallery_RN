import React, { useEffect } from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/Landing';

const Stack = createStackNavigator();

const LandingTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#2fc4b2',
        },
      }}>
      <Stack.Screen
        name='Welcome'
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
};

export default LandingTab;
