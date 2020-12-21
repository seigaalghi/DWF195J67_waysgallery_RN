import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { useSelector } from 'react-redux';
import Order from '../screens/Order';
import Profile from '../screens/Profile';
import AddPost from '../screens/AddPost';
import { Icon } from 'react-native-elements';
import AddPostButton from '../components/AddPostButton';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='home' color={color} size={size} type='entypo' />,
        }}
      />
      <Tab.Screen
        name='Post'
        component={AddPost}
        o
        options={({ navigation, route }) => ({
          tabBarButton: () => <AddPostButton onPress={() => navigation.navigate('Post')} />,
        })}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='user' color={color} size={size} type='entypo' />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
