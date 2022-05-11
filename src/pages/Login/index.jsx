import React from 'react';
import { getAuth } from 'store/selectors';
import { notification } from 'antd';
import AppForm from 'components/AppForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchLogin } from 'store/thunk';
import { setUserID } from 'store/slice';

const Login = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(getAuth);

  const onFinish = (value) => {
    dispatch(fetchLogin(value));
    dispatch(setUserID(value.name));
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
        formTitle="Authorization"
        buttonTitle="Go To Registration"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        pathRedirect={'/registration'}
      />
    </div>
  );
};

export default Login;
