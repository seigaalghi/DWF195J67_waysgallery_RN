import React, { useEffect } from 'react';
import Landing from './src/screens/Landing';
//React Native Elements
import { ThemeProvider } from 'react-native-elements';

//React Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';
import LandingTab from './src/tabs/LandingTab';
import HomeTab from './src/tabs/HomeTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from './src/redux/utility/setAuthToken';
import { loadUser } from './src/redux/action/auth';

const Stack = createStackNavigator();

if (AsyncStorage.getItem('token')) {
  setAuthToken(AsyncStorage.getItem('token'));
}

export default function App() {
  const message = store.getState((state) => state.alert);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    if (message.message) {
      alert(message.message);
    }
  }, [message.message]);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider>
          <Stack.Navigator>
            <Stack.Screen
              name='Landing'
              component={Landing}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name='Entry' component={LandingTab} />
            <Stack.Screen name='Home' component={HomeTab} />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}
