import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../theme/colors';

const HomeLoading = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator animating={true} color={colors.primary} size='large' />
    </SafeAreaView>
  );
};

export default HomeLoading;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.third,
    zIndex: 1,
  },
});
