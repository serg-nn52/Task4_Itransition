/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { notification } from 'antd';

import { getAuth } from 'store/selectors';
import { Navigate } from 'react-router-dom';

import style from './style.module.scss';
import TableUser from 'components/tableUser';

const Main = () => {
  const isAuth = useSelector(getAuth);

  return isAuth && isAuth !== 'loading' ? (
    <div className={style.wrapper}>
      <h1>Main page</h1>
      <div className={style.buttons}>
        <Button type="primary">Block</Button>
        <Button type="primary">Unblock</Button>
        <Button type="primary">Delete</Button>
      </div>
      <TableUser />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Main;
