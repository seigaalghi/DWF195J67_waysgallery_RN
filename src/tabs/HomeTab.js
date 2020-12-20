import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const HomeTab = ({ navigation: { navigate } }) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('Entry');
    }
  }, [auth.isAuthenticated]);
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
    </Tab.Navigator>
  );
};

export default HomeTab;
