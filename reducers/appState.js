import {CHANGE_INPUT, POPULATE_LIST, ON_REFRESH, ON_REFRESH_END} from '../actions/actionTypes';

const initialState = {
  input: '',
  list: [],
  refreshing: false,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {...state, input: action.payload};
    case POPULATE_LIST:
      return {...state, list: action.payload};
    case ON_REFRESH:
      return {...state, refreshing: true};
    case ON_REFRESH_END:
      return {...state, refreshing: false};
    default:
      return initialState;
  }
};

export default appState;
