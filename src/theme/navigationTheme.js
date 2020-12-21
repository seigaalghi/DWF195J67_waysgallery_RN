import { DefaultTheme } from '@react-navigation/native';
import colors from './colors';

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.third,
  },
};

export default myTheme;
