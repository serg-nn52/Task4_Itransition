import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { notification } from 'antd';
import { setUser } from 'store/slice';
import AppForm from 'components/AppForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = ({ email, password }) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime,
          }),
        );
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        notification.error({ message: error.message });
      });
    console.log('Success:', email, password);
  };

  const onFinishFailed = (errorInfo) => {
    notification.error({ message: 'Error sending!' });
    console.log('Failed:', errorInfo);
  };
  return (
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
