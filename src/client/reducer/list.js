import {
  FETCH_LIST
} from '../const';

const defaultState = {
  list: []
};

export default (state = defaultState, action) => {
  const { type, data } = action;
  switch(type) {
    case FETCH_LIST:
      return {
        ...state,
        list: data
      }
    default:
      return state;
  }
}
