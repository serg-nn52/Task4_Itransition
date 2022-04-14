import React, { useState } from 'react';
import { Button, Table } from 'antd';
import { getUsersList } from '../../store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRemoveUsers } from 'store/thunk';

import { fetchGetUserList } from 'store/thunk';

const TableUser = () => {
  const dispatch = useDispatch();
  const [chek, setChek] = useState([]);
  const dispatchUserList = () => {
    dispatch(fetchGetUserList());
  };

  useEffect(dispatchUserList, [dispatch]);

  const userList = useSelector(getUsersList);

  // console.log(userList);

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
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   'selectedRows: ',
      //   selectedRows,
      // );
      setChek(selectedRows);
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === 'Disabled User',
    //   name: record.name,
    // }),
  };

  // const test = rowSelection.getCheckboxProps();

  const checkedUsers = chek.map((el) => {
    return { id: el.id };
  });

  const handler = () => {
    return dispatch(fetchRemoveUsers(checkedUsers));
  };

  return (
    <>
      {data.length === 0 && <h2>loading</h2>}
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      <Button onClick={handler}>Remove me</Button>
    </>
  );
};

export default TableUser;
