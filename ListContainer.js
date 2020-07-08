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
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Item from './Item';

const data = [...Array(100).keys()];

const ListContainer = forwardRef(({innerRef}) => {
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.title}>List Wrapper</Text>
        <FlatList
          ref={innerRef}
          data={data}
          renderItem={({item}) => <Item item={item} />}
          initialNumToRender={data.length}
          keyExtractor={(item) => item}
        />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    borderWidth: 4,
    borderColor: 'pink',
    marginTop: 20,
    marginHorizontal: 40,
    height: '85%',
  },
  title: {
    marginVertical: 12,
    fontSize: 24,
    textAlign: 'center',
  }
});

export default ListContainer;
