/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';

import Input from './Input';
import List from './List';
import withInputLimit from './withInputLimit';

const LimitedInput = withInputLimit(Input);

const ForwardRefExample = () => {
  const listRef = useRef(null);

  const onInputChange = (text) => {
    listRef.current.scrollToIndex({index: text});
  };

  return (
    <>
      <LimitedInput limit={10} onChange={onInputChange} />
      <List ref={listRef} />
    </>
  );
};

export default ForwardRefExample;
