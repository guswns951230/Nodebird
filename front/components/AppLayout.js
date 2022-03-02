import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => { // pages의 파일들이  공통적으로 사용할 Layout
  return (
    <div>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;