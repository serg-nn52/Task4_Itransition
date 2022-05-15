export const getAuth = (store) => store.user.auth;
export const getUsersList = (store) => store.user.users;
export const getUserName = (store) => store.user.userID;
export const getStatusUser = (id) => (store) =>
  store.user.users.length &&
  store.user.userID &&
  store.user.users.filter((el) => el.name === id).length
    ? store.user.users.find((el) => el.name === id).status
    : true;
export const getLoading = (store) => store.user.loading;
