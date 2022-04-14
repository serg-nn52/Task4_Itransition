import { createSlice } from '@reduxjs/toolkit';
import { fetchRegAction } from './thunk';
import { fetchGetUserList } from './thunk';
import { fetchLogin } from './thunk';
import { fetchRemoveUsers } from './thunk';
import { fetchBanUsers } from './thunk';
import { fetchUnblockUsers } from './thunk';

const initialState = {
  loading: false,
  auth: 'loading',
  users: [],
  error: null,
};
const userSlice = createSlice({
  name: 'reg',
  initialState,
  reducers: {
    // setUser(state, action) {
    //   state.email = action.payload.email;
    //   state.token = action.payload.token;
    //   state.id = action.payload.id;
    //   state.creationTime = action.payload.creationTime;
    //   state.lastSignInTime = action.payload.lastSignInTime;
    // },
    // removeUser(state) {
    //   state.email = null;
    //   state.token = null;
    //   state.id = null;
    //   state.creationTime = null;
    //   state.lastSignInTime = null;
    // },
  },
  extraReducers: {
    [fetchRegAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchRegAction.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.auth = true;
    },
    [fetchRegAction.rejected.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchGetUserList.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchGetUserList.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchGetUserList.rejected.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchLogin.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchLogin.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.auth = true;
    },
    [fetchLogin.rejected.type]: (state) => {
      state.loading = true;
      state.error = null;
      state.auth = false;
    },
    [fetchRemoveUsers.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchRemoveUsers.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchRemoveUsers.rejected.type]: (state) => {
      state.loading = true;
      state.error = null;
      state.auth = false;
    },
    [fetchBanUsers.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchBanUsers.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchBanUsers.rejected.type]: (state) => {
      state.loading = true;
      state.error = null;
      state.auth = false;
    },
    [fetchUnblockUsers.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUnblockUsers.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchUnblockUsers.rejected.type]: (state) => {
      state.loading = true;
      state.error = null;
      state.auth = false;
    },
  },
});

// export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
