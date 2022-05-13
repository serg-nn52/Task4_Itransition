import React from 'react';
import { Button, Tooltip } from 'antd';
import style from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuth } from 'store/slice';
import { getUserName } from 'store/selectors';

const LogOut = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const userLogOut = () => {
    dispatch(resetAuth());
  };

  return (
    <Tooltip title={`${userName}, Вы точно хотите выйти?`}>
      <Button
        type="primary"
        shape="circle"
        className={style.btn}
        onClick={userLogOut}
      >
        Sign Out
      </Button>
    </Tooltip>
  );
};

export default LogOut;
