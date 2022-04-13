import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  id: null,
  creationTime: null,
  lastSignInTime: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.creationTime = action.payload.creationTime;
      state.lastSignInTime = action.payload.lastSignInTime;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.creationTime = null;
      state.lastSignInTime = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
