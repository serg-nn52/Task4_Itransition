import React, { useState } from 'react';
import { Button, Table } from 'antd';
import { getUsersList } from '../../store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRemoveUsers } from 'store/thunk';
import { fetchBanUsers } from 'store/thunk';
import { fetchGetUserList } from 'store/thunk';
import { fetchUnblockUsers } from 'store/thunk';
import { resetAuth } from 'store/slice';
import { getUserName } from 'store/selectors';
import style from './style.module.scss';

const TableUser = () => {
  const dispatch = useDispatch();
  const [chek, setChek] = useState([]);
  const dispatchUserList = () => {
    dispatch(fetchGetUserList());
  };

  useEffect(dispatchUserList, [dispatch]);

  const userList = useSelector(getUsersList);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Date Registration',
      dataIndex: 'dateReg',
    },
    {
      title: 'Date last login',
      dataIndex: 'dateLogin',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  const data =
    userList === null
      ? []
      : userList.map((el) => {
          return {
            key: el.id,
            id: el.id,
            name: el.name,
            email: el.email,
            dateReg: el.dateReg,
            dateLogin: el.dateLogin,
            status: el.status ? 'active' : 'ban',
          };
        });

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setChek(selectedRows);
    },
  };

  const checkedUsers = chek.map((el) => {
    return { id: el.id };
  });

  const userName = useSelector(getUserName);

  const handlerRemove = () => {
    dispatch(fetchRemoveUsers(checkedUsers));
    if (chek.filter((el) => el.name === userName).length) {
      dispatch(resetAuth());
    }
  };

  const handlerBan = () => {
    dispatch(fetchBanUsers(checkedUsers));
  };

  const handlerUnblock = () => {
    dispatch(fetchUnblockUsers(checkedUsers));
  };

  return (
    <>
      {data.length === 0 && <h2>loading</h2>}
      <div className={style.buttons}>
        <Button type="primary" onClick={handlerBan}>
          Block
        </Button>
        <Button type="primary" onClick={handlerUnblock}>
          Unblock
        </Button>
        <Button type="primary" onClick={handlerRemove}>
          Delete
        </Button>
      </div>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default TableUser;
