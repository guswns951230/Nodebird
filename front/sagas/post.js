import axios from 'axios';
import { all, fork, delay, put, takeLatest } from "redux-saga/effects";

function addPostAPI(data) { // * 붙이면 error
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);  // call은 logInAPI가 return할때까지 기다렸다 result에 넣음
    yield delay(1000);
    yield put({
      type: 'ADD_POST_SUCCESS',
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}