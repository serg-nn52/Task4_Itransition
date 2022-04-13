import React from 'react';
import { notification } from 'antd';
import AppForm from 'components/AppForm';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slice';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = ({ email, password }) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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
  };

  const onFinishFailed = (errorInfo) => {
    notification.error({ message: 'Error sending!' });
    console.log('Failed:', errorInfo);
  };
  return (
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
