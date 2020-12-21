import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text, Icon } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { userLogin } from '../redux/action/auth';

const Login = ({ navigation: { navigate }, userLogin }) => {
  const [reveal, setReveal] = useState(true);
  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = (values) => {
    userLogin(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'At least 6 character').required('Password is required'),
  });

  return (
    <View style={styles.entryContainer}>
      <Text style={styles.entryHeading}>Login</Text>
      <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <Input
              label='Email'
              labelStyle={styles.labelStyle}
              placeholder='email@address.com'
              rightIcon={<Icon name='email' type='entypo' size={24} />}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              errorMessage={touched.email ? errors.email : null}
            />
            <Input
              label='Password'
              labelStyle={styles.labelStyle}
              placeholder='Password'
              secureTextEntry={reveal}
              rightIcon={
                <Icon
                  name={reveal ? 'eye-with-line' : 'eye'}
                  type='entypo'
                  size={24}
                  onPress={() => setReveal(!reveal)}
                />
              }
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errorMessage={touched.password ? errors.password : null}
            />
            <Button
              title='Login'
              iconRight
              buttonStyle={styles.entrySubmit}
              onPress={handleSubmit}
            />
            <Text style={styles.navigation} onPress={() => navigate('Register')}>
              Don't have an account? tap here
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default connect(null, { userLogin })(Login);

const styles = StyleSheet.create({
  entryContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#f9f9f9',
    height: '100%',
  },
  entryHeading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginBottom: 20,
  },
  entrySubmit: {
    backgroundColor: '#2fc4b2',
  },
  labelStyle: {
    fontSize: 20,
    color: 'black',
  },
  navigation: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 15,
  },
});
