import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => { // pages의 파일들이  공통적으로 사용할 Layout
  return (
    <div>
      <div>
        <Link href="/"><a>NodeBird</a></Link>
        <Link href="/profile"><a>My Profile</a></Link>
        <Link href="/signup"><a>Sign Up</a></Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;