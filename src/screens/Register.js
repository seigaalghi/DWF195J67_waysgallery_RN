import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input, Text, Icon } from 'react-native-elements';
import styles from '../styles/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const [reveal, setReveal] = useState(true);
  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'At least 6 character').required('Password is required'),
  });

  return (
    <View style={styles.entryContainer}>
      <Text style={styles.entryHeading}>Register</Text>
      <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <Input
              label='Name'
              labelStyle={styles.labelStyle}
              placeholder='John Smith'
              rightIcon={<Icon name='user' type='entypo' size={24} />}
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              errorMessage={touched.name ? errors.name : null}
            />
            <Input
              label='Email'
              labelStyle={styles.labelStyle}
              placeholder='email@address.com'
              rightIcon={<Icon name='email' type='entypo' size={24} />}
              style={styles.input}
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
              rightIcon={<Icon name={reveal ? 'eye-with-line' : 'eye'} type='entypo' size={24} onPress={() => setReveal(!reveal)} />}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errorMessage={touched.password ? errors.password : null}
            />
            <Button title='Register' buttonStyle={styles.entrySubmit} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Register;
