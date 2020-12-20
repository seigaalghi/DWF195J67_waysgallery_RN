import { StyleSheet } from 'react-native';

const primary = '#2fc4b2';
const secondary = '#e7e7e7';
const third = '#f9f9f9';
const success = '#2ecc71';
const danger = '#e74c3c';
const warning = '#f1c40f';
const complete = '#00c3ff';

export default StyleSheet.create({
  // =================================================================
  // App
  // =================================================================
  appContainer: {
    backgroundColor: third,
  },
  // =================================================================
  // Header
  // =================================================================
  header: {
    height: 70,
    backgroundColor: secondary,
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

  // =================================================================
  // Entry
  // =================================================================

  entryContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: third,
    height: '100%',
  },

  entryHeading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: primary,
    marginBottom: 20,
  },
  entrySubmit: {
    backgroundColor: primary,
  },

  labelStyle: {
    fontSize: 20,
  },
  // =================================================================
  // Landing
  // =================================================================

  landingImage: {
    maxHeight: '70%',
    maxWidth: '100%',
  },

  landingSignUp: {
    backgroundColor: secondary,
    width: '90%',
    marginVertical: 10,
    alignSelf: 'center',
  },
  landingSignIn: {
    backgroundColor: primary,
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
  },
});
