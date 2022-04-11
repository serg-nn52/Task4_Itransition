import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './PageWrapper';
import Error404 from 'pages/Error404';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Registration from 'pages/Registration';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<Error404 />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
