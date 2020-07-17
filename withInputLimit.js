import React from 'react';

export default function withInputLimit(WrappedComponent) {
  return function WithLimit({limit, onChange, ...props}) {
    const onChangeWithLimit = (text) => {
      if (+text < limit) onChange(text);
    };

    return <WrappedComponent onChange={onChangeWithLimit} {...props} />;
  };
}
