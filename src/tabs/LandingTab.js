import React, { useEffect } from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const LandingTab = ({ navigation: { navigate } }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('Home');
    }
  }, [auth.isAuthenticated]);
  return (
    <Tab.Navigator>
      <Tab.Screen name='Login' component={Login} />
      <Tab.Screen name='Register' component={Register} />
    </Tab.Navigator>
  );
};

export default LandingTab;
