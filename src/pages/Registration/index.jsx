import React from 'react';
import { notification } from 'antd';
import AppForm from 'components/AppForm';
import { getAuth } from 'store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchRegAction } from 'store/thunk';

const Registration = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getAuth);

  const onFinish = (value) => {
    dispatch(fetchRegAction(value));
  };

  const onFinishFailed = (errorInfo) => {
    notification.error({ message: 'Error sending!' });
    console.log('Failed:', errorInfo);
  };

  return isAuth && isAuth !== 'loading' ? (
    <Navigate to="/" />
  ) : (
    <div>
      <AppForm
        formTitle="Registration"
        buttonTitle="Go To Login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        pathRedirect={'/login'}
      />
    </div>
  );
};

export default Registration;
