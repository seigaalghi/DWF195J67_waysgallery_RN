import React, { useEffect, useState } from 'react';
import LandingTab from './src/tabs/LandingTab';
import HomeTab from './src/tabs/HomeTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from './src/redux/utility/setAuthToken';
import AppLoading from 'expo-app-loading';
import navigationTheme from './src/theme/navigationTheme';

//React Native Elements
import { ThemeProvider } from 'react-native-elements';

//React Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { loadUser } from './src/redux/action/auth';
import HomeLoading from './src/animations/HomeLoading';

const Stack = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState({});
  const { auth } = store.getState();

  const starter = async () => {
    const token = await AsyncStorage.getItem('token');

    setAuthToken(token);
    await store.dispatch(loadUser());
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={starter}
        onError={(error) => console.log(error)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <ThemeProvider>{auth.isAuthenticated ? <HomeTab /> : <LandingTab />}</ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}
