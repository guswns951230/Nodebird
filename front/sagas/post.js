import axios from 'axios';
import { all, fork, delay, put, takeLatest, throttle, call } from "redux-saga/effects";
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
  REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function loadPostsAPI(data) { // * 붙이면 error
  return axios.get('/posts', data);
}
function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: err.response.data,
    });
  }
}

function addPostAPI(data) { // * 붙이면 error
  return axios.post('/post', { content: data }); // call은 logInAPI가 return할때까지 기다렸다 result에 넣음
}
function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);  // call은 logInAPI가 return할때까지 기다렸다 result에 넣음
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function removePostAPI(data) { // * 붙이면 error
  return axios.delete('/api/post', data);
}
function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);  // call은 logInAPI가 return할때까지 기다렸다 result에 넣음
    yield delay(1000);
    yield put({ // post reducer 부분
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({ // user reducer 부분
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data);  // POST /post/1/comment
}
function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadPosts() {
  yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadPosts),
    fork(watchRemovePost),
    fork(watchAddComment),
  ]);
}