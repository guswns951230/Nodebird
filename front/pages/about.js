import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';

import { Avatar, Card } from 'antd';
import AppLayout from '../components/AppLayout';
import { LOAD_USER_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const About = () => {
  const { userInfo } = useSelector((state) => state.user)

  return (
    <AppLayout>
      <Head>
        <title> Kang | NodeBird</title>
      </Head>
      {userInfo
        ? (
          <Card
            actions={[
              <div key={"tweet"}>
                tweet
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                Following
                <br />
                {userInfo.Followings}
              </div>,
              <div key="follower">
                Follower
                <br />
                {userInfo.Followers}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
              description="Nodebird Mania"
            />
          </Card>
        )
        : null}
    </AppLayout>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch({
      type: LOAD_USER_REQUEST,
      data: 7,
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

export default About;

