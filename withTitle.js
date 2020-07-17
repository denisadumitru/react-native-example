import React from 'react';
import {Text} from 'react-native';

export default function withTitle(WrappedComponent) {
  return React.forwardRef(({title, ...props}, ref) => {
    return (
      <React.Fragment>
        <Text style={{textAlign: 'center'}}>{title}</Text>
        <WrappedComponent ref={ref} {...props} />
      </React.Fragment>
    );
  });
}
