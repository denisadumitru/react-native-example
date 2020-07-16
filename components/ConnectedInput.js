import React from 'react';
import Input from './Input';
import changeInput from '../actions/changeInput';
import {connect} from 'react-redux';
import Reactotron from '../ReactotronConfig';

const InputContainer = ({input, controlInput}) => {
  return <Input onChange={controlInput} />;
};

const mapStateToProps = (state) => ({
  input: state.app.input,
});

const mapDispatchToProps = (dispatch) => ({
  controlInput: (value) => dispatch(changeInput(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);
