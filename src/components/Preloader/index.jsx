import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import style from './style.module.scss';

const Preloader = () => {
  return (
    <>
      <Spin
        indicator={<LoadingOutlined />}
        size="large"
        className={style.spinner}
      />
    </>
  );
};

export default Preloader;
