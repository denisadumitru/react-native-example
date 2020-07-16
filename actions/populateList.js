import {POPULATE_LIST} from './actionTypes';

const populateList = (list) => ({
  type: POPULATE_LIST,
  payload: list,
});

export default populateList;
