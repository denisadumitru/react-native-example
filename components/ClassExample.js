/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
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

const data = [...Array(100).keys()];

class ClassExample extends Component {
  onInputChange = (text) => {
    this.listRef.scrollToIndex({index: text});
  };

  render() {
    return (
      <>
        <View>
          <Input onChange={this.onInputChange} />
          <FlatList
            ref={(ref) => { this.listRef = ref; }}
            data={data}
            initialNumToRender={data.length}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={(item) => item}
          />
        </View>
      </>
    );
  }
};

export default ClassExample;
