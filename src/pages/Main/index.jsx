import React from 'react';
import { useDispatch } from 'react-redux';
import { notification } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { removeUser } from 'store/slice';
import { useAuth } from 'hooks/useAuth';

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, email, token, id, creationTime, lastSignInTime } = useAuth();
  const handler = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error(error);
        notification.error({ message: error.message });
      });
    dispatch(removeUser());
    console.log({ email, token, id, creationTime, lastSignInTime });
    navigate('/login');
  };
  return isAuth ? (
    <div>
      <h1 style={{ textAlign: 'center' }}>Main page</h1>
      <button onClick={() => handler()}>Log out from {email}</button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Main;
