import React from 'react';
import { View, Image, StyleSheet, Platform, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';

const Landing = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.landingImage} />
      <Image source={require('../images/assets.png')} style={styles.landingImage} />
      <Button title='Sign Up' buttonStyle={styles.landingSignUp} titleStyle={{ color: 'black' }} onPress={() => navigate('Register')} />
      <Button title='Sign In' buttonStyle={styles.landingSignIn} onPress={() => navigate('Login')} />
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  landingImage: {
    maxHeight: '70%',
    maxWidth: '100%',
  },
  landingSignUp: {
    backgroundColor: '#e7e7e7',
    width: '90%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  landingSignIn: {
    backgroundColor: '#2fc4b2',
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
  },
});
