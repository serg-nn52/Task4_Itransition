import axios from 'axios';

export const axiosInstance = axios.create({
  // baseURL: 'http://localhost:5000',
  //prodaction
  baseURL: 'https://evening-hamlet-95523.herokuapp.com',
  headers: {},
});
