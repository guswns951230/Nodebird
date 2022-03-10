import { all, fork, call, put, take } from 'redux-saga/effects';  // saga effect
import axios from 'axios';

function logInAPI(data) { // * 붙이면 error
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);  // call은 logInAPI가 return할때까지 기다렸다 result에 넣음
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    });
  }
}

function logOutAPI() { // * 붙이면 error
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);  // call은 logInAPI가 return할때까지 기다렸다 result에 넣음
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    });
  }
}

function addPostAPI(data) { // * 붙이면 error
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);  // call은 logInAPI가 return할때까지 기다렸다 result에 넣음
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield take('LOG_IN_REQUEST', logIn); // LOG_IN이라는 action이 실행될 때 까지 기다림
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
  yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
  yield all([ // all은 배열을 받고, 배열 안의 모든것을 동시에 실행
    fork(watchLogIn), // call(동기), fork(비동기)는 함수를 실행
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}