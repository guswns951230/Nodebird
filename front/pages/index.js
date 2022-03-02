import React from 'react';
import AppLayout from '../components/AppLayout';

const Home = () => {
  return (
    <AppLayout>
      {/* AppLayout로 감싸진 태그들이 children이 된다 */}
      <div>Hello, Next!</div>
    </AppLayout>
  );
};

export default Home;