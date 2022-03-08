import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/postForm';
import PostCard from '../components/postCard';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPost } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPost.map((post) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
};

export default Home;