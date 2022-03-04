import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followingList = [{ nickname: 'Kang' }, { nickname: 'HJ' }, { nickname: 'NodeBird official' }];
  const followerList = [{ nickname: 'Kang' }, { nickname: 'HJ' }, { nickname: 'NodeBird official' }];
  return (
    <>
      <Head>
        <title>My Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="following list" data={followingList} />
        <FollowList header="follower list" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;