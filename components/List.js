/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, forwardRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  RefreshControl,
} from 'react-native';

import Item from './Item';
import Reactotron from '../ReactotronConfig';

const data = [...Array(1000).keys()];

const List = forwardRef(({onScrollFail, refreshing, onRefresh}, ref) => {
  return (
    <FlatList
      ref={ref}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={data}
      renderItem={({item}) => <Item item={item} />}
      initialNumToRender={data.length / 5}
      onScrollToIndexFailed={onScrollFail}
      keyExtractor={(item) => item}
    />
  );
});

export default List;
