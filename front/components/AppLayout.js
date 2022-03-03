import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';

const AppLayout = ({ children }) => { // pages의 파일들이  공통적으로 사용할 Layout
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>NodeBird</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>My Profile</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>Sign Up</a></Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;