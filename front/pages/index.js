import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { END } from 'redux-saga';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/postForm';
import PostCard from '../components/postCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector((state) => state.post);
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log('rerendering');
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);

  useEffect(() => {
    console.log('inView:', inView);
    console.log('hasMorePosts:', hasMorePosts);
    console.log('!loadPostsLoading:', !loadPostsLoading);
    if (inView && hasMorePosts && !loadPostsLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_POSTS_REQUEST,
        lastId,
      });
    }
  },
    [inView, hasMorePosts, loadPostsLoading, mainPosts],
  );

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
      <div style={{ height: 50 }} ref={hasMorePosts && !loadPostsLoading ? ref : undefined} />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch({
      type: LOAD_POSTS_REQUEST,
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
  });

export default Home;