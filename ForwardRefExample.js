/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Item from './Item';
import Input from './Input';
import ListContainer from './ListContainer';

const ForwardRefExample = () => {
  const listRef = useRef(null);

  const onInputChange = (text) => {
    listRef.current.scrollToIndex({index: text});
  };

  return (
    <>
      <Input onChange={onInputChange} />
      <ListContainer innerRef={listRef} />
    </>
  );
};

const styles = StyleSheet.create({

});

export default ForwardRefExample;
