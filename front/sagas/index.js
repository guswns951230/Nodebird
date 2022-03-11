import { all, fork } from 'redux-saga/effects';  // saga effect

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
  yield all([ // all은 배열을 받고, 배열 안의 모든것을 동시에 실행
    // call(동기), fork(비동기)는 함수를 실행
    fork(postSaga),
    fork(userSaga),
  ]);
}