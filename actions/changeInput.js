import {CHANGE_INPUT} from './actionTypes';

const changeInput = (input) => ({
  type: CHANGE_INPUT,
  payload: input,
});

export default changeInput;
