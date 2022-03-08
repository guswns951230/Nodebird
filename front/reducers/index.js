import { HYDRATE } from "next-redux-wrapper"; // redux server side rendering을 위함
import { combineReducers } from "redux";

import user from './user';
import post from './post';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },  // HYDRATE를 위한 index reducer 추가
  user,
  post,
});

export default rootReducer;