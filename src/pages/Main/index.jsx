/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';

import { getAuth } from 'store/selectors';
import { Navigate } from 'react-router-dom';

import style from './style.module.scss';
import TableUser from 'components/tableUser';

const Main = () => {
  const isAuth = useSelector(getAuth);

  return isAuth && isAuth !== 'loading' ? (
    <div className={style.wrapper}>
      <h1>Main page</h1>

      <TableUser />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Main;
