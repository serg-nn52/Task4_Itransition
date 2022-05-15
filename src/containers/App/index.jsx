import React, { useEffect } from 'react';
import { getStatusUser, getUserName } from 'store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuth } from 'store/slice';
import { notification } from 'antd';
import CreateRoutes from '../Routes';

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

  return <CreateRoutes />;
};

export default App;
