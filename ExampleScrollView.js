import React, {useRef} from 'react';
import {ScrollView, Text} from 'react-native';
import Item from './Item';
import Input from './Input';
const ExampleScrollView = () => {
  const data = [...Array(3000).keys()];

  const listRef = useRef(null);

  const onInputChange = (text) => {
    // listRef.scrollTo({index: text});
  };

  return (
    <>
      <Input onChange={onInputChange} />
      <ScrollView ref={listRef}>
        {data.map((e) => (
          <Item item={e} />
        ))}
      </ScrollView>
    </>
  );
};

export default ExampleScrollView;
