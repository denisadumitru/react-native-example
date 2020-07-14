/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, forwardRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
// import withRef from './withInputLimit';

import Item from './Item';

const data = [...Array(3000).keys()];

const List = forwardRef((props, ref) => {
  return (
    <FlatList
      ref={ref}
      data={data}
      renderItem={({item}) => <Item item={item} />}
      initialNumToRender={data.length / 100}
      keyExtractor={(item) => item}
    />
  );
});

export default List;
