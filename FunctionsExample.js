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

import Item from './Item';
import Input from './Input';
import withTitle from './withTitle';

const ListWithTitle = withTitle(FlatList);

const data = [...Array(100).keys()];

const FunctionsExample = () => {
  const listRef = useRef(null);

  const onInputChange = (text) => {
    listRef.current.scrollToIndex({index: text});
  };

  return (
    <>
      <View>
        <Input onChange={onInputChange} />
        <ListWithTitle
          ref={listRef}
          data={data}
          renderItem={({item}) => <Item item={item} />}
          initialNumToRender={data.length}
          keyExtractor={(item) => item}
        />
      </View>
    </>
  );
};

export default FunctionsExample;
