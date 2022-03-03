import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">게시글<br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="followers">팔로워<br />0</div>,
      ]}
    >

      <Card.Meta
        avatar={<Avatar>HJ</Avatar>}
        title="Kang"
      />
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default UserProfile;