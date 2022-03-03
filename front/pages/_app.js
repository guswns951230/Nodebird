// pages의 공통된 부분을 처리
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
}

NodeBird.prototype = {
  Component: PropTypes.elementType.isRequired,
}

export default NodeBird;