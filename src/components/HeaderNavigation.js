import React from 'react';
import { Header, Text } from 'react-native-elements';
import { Image } from 'react-native';
import styles from '../styles/styles';

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
