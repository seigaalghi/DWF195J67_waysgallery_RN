import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import HeaderLanding from '../components/HeaderLanding';
import styles from '../styles/styles';

const Landing = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Image source={require('../images/logo.png')} style={styles.landingImage} />
      <Image source={require('../images/assets.png')} style={styles.landingImage} />
      <Button
        title='Sign Up'
        buttonStyle={styles.landingSignUp}
        titleStyle={{ color: 'black' }}
        onPress={() => navigate('Entry', { screen: 'Register' })}
      />
      <Button title='Sign In' buttonStyle={styles.landingSignIn} onPress={() => navigate('Entry', { screen: 'Login' })} />
    </View>
  );
};

export default Landing;
