import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { axiosInstance } from 'network';
const { SHA3 } = require('sha3');

const hash = new SHA3(256);

export const fetchRegAction = createAsyncThunk(
  `reg/fetchAll`,
  async (user, { rejectWithValue }) => {
    try {
      hash.reset();
      const response = await axiosInstance.post('api/users/', {
        name: user.name,
        password: hash.update(user.password).digest('hex'),
        email: user.email,
      });
      return response.data;
    } catch (error) {
      if (error.response.status === 409) {
        notification.error({
          message: 'Пользователь с таким именем уже существует!',
        });
        return rejectWithValue(error.message);
      } else {
        notification.error({ message: 'Ошибка регистрации!' });
        return rejectWithValue(error.message);
      }
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
      notification.error({ message: 'Ошибка!' });

      return rejectWithValue(error);
    }
  },
);

export const fetchLogin = createAsyncThunk(
  `login/fetchAll`,
  async (user, { rejectWithValue }) => {
    try {
      hash.reset();
      await axiosInstance.post('api/users/login/', {
        name: user.name,
        password: hash.update(user.password).digest('hex'),
      });
    } catch (error) {
      if (error.response.status === 404) {
        notification.error({
          message: 'Пользователь с такими именем/паролем не найден!',
        });
        return rejectWithValue(error.message);
      } else {
        notification.error({ message: 'Ошибка авторизации!' });
        return rejectWithValue(error.message);
      }
    }
  },
);

export const fetchRemoveUsers = createAsyncThunk(
  `remove/fetchAll`,
  async (user, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('api/users/delete/', user);
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
      return response.data;
    } catch (error) {
      notification.error({ message: 'Ошибка!' });
      console.log(user);
      return rejectWithValue(error.message);
    }
  },
);
