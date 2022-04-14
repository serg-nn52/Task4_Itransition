import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { axiosInstance } from 'network';

export const fetchRegAction = createAsyncThunk(
  `reg/fetchAll`,
  async (user, { rejectWithValue }) => {
    console.log(user);
    try {
      const response = await axiosInstance.post('api/users/', {
        name: user.name,
        password: user.password,
      });
      return response.data;
    } catch (error) {
      notification.error({ message: 'Ошибка регистрации!' });
      return rejectWithValue(error.message);
    }
  },
);
export const fetchGetUserList = createAsyncThunk(
  `get/fetchAll`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('api/users/');
      return response.data;
    } catch (error) {
      notification.error({ message: 'Ошибка регистрации!' });
      return rejectWithValue(error.message);
    }
  },
);

export const fetchLogin = createAsyncThunk(
  `login/fetchAll`,
  async (user, { rejectWithValue }) => {
    try {
      await axiosInstance.post('api/users/login/', {
        name: user.name,
        password: user.password,
      });
    } catch (error) {
      notification.error({ message: 'Ошибка авторизации!' });
      return rejectWithValue(error.message);
    }
  },
);

export const fetchRemoveUsers = createAsyncThunk(
  `remove/fetchAll`,
  async (user, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('api/users/delete/', user);
      // console.log('thank', user);
      return response.data;
    } catch (error) {
      notification.error({ message: 'Ошибка авторизации!' });
      console.log(user);
      return rejectWithValue(error.message);
    }
  },
);

export const fetchBanUsers = createAsyncThunk(
  `ban/fetchAll`,
  async (user, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put('/api/users/ban', user);
      // console.log('thank', response.data);
      return response.data;
    } catch (error) {
      notification.error({ message: 'Ошибка!' });
      console.log(user);
      return rejectWithValue(error.message);
    }
  },
);

export const fetchUnblockUsers = createAsyncThunk(
  `unblock/fetchAll`,
  async (user, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put('/api/users/unblock', user);
      console.log('thank', response.data);
      return response.data;
    } catch (error) {
      notification.error({ message: 'Ошибка!' });
      console.log(user);
      return rejectWithValue(error.message);
    }
  },
);
