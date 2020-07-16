import React, {useEffect, useRef} from 'react';
import List from './List';
import changeInput from '../actions/changeInput';
import {connect} from 'react-redux';
import Reactotron from '../ReactotronConfig';
import {ON_REFRESH, ON_REFRESH_END} from '../actions/actionTypes';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const ListContainer = ({listRef, refreshing, onRefresh, input}) => {
  const onScrollFail = (info) => {
    Reactotron.log(info);

    wait(800).then(() => {
      listRef.current?.scrollToIndex({index: input});
    });
  };

  useEffect(() => {
    listRef.current.scrollToIndex({index: input});
  });

  return (
    <List
      ref={listRef}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onScrollFail={onScrollFail}
    />
  );
};

const mapStateToProps = (state) => ({
  input: state.app.input,
  refreshing: state.app.refreshing,
});

const mapDispatchToProps = (dispatch) => ({
  onRefresh: () => {
    dispatch({type: ON_REFRESH});
    // simulating network request
    wait(2000).then(() => dispatch({type: ON_REFRESH_END}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
