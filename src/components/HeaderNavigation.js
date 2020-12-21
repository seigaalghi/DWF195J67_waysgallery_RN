import React from 'react';
import { Header, Text } from 'react-native-elements';
import { Image, StyleSheet } from 'react-native';

const HeaderNavigation = () => {
  return (
    <Header
      rightComponent={{ icon: 'menu', color: '#2fc4b2', size: 40 }}
      leftComponent={() => <Image source={require('../images/logo.png')} style={styles.headerLogo} />}
      containerStyle={styles.header}
      leftContainerStyle={styles.leftHeader}
      rightContainerStyle={styles.rightHeader}
      centerContainerStyle={styles.centerHeader}
    />
  );
};

export default HeaderNavigation;

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: '#e7e7e7',
    display: 'flex',
    alignContent: 'center',
    marginTop: 27,
  },
  headerLogo: {
    height: '100%',
    width: 80,
    marginLeft: 20,
  },
  leftHeader: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightHeader: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
