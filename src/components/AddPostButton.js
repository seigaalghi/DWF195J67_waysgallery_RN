import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';
import colors from '../theme/colors';

const AddPostButton = ({ onPress }) => {
  return (
    <TouchableHighlight style={styles.container} onPress={onPress}>
      <View>
        <Icon name='circle-with-plus' color='white' size={40} type='entypo' />
      </View>
    </TouchableHighlight>
  );
};

export default AddPostButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: 'white',
    borderWidth: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
