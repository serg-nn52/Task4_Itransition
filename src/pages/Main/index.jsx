/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';
import { getAuth } from 'store/selectors';
import { Navigate } from 'react-router-dom';
import TableUser from 'components/TableUser';
import LogOut from 'components/LogOut';
import style from './style.module.scss';

const Main = () => {
  const isAuth = useSelector(getAuth);

  return isAuth && isAuth !== 'loading' ? (
    <div className={style.wrapper}>
      <LogOut />
      <h1>Main page</h1>

      <TableUser />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Main;
