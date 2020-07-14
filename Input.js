/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Input = ({onChange}) => {
  return (
    <>
      <TextInput
        keyboardType={'numeric'}
        style={styles.input}
        onChangeText={(text) => onChange(text)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'pink',
    borderWidth: 2,
    marginVertical: 8,
    marginHorizontal: 24,
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Input;
