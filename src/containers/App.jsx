import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './PageWrapper';
import Error404 from 'pages/Error404';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Registration from 'pages/Registration';
import { getStatusUser, getUserName } from 'store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuth } from 'store/slice';
import { notification } from 'antd';

const App = () => {
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);
  const userStatus = useSelector(getStatusUser(userName));

  useEffect(() => {
    if (!userStatus) {
      dispatch(resetAuth());
      notification.error({ message: 'You are banned!' });
    }
  }, [userStatus, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<Error404 />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
