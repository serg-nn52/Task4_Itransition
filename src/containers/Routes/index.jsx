import Preloader from 'components/Preloader';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const PageWrapper = lazy(() => import('containers/PageWrapper'));
const Main = lazy(() => import('pages/Main'));
const Login = lazy(() => import('pages/Login'));
const Registration = lazy(() => import('pages/Registration'));
const Error404 = lazy(() => import('pages/Error404'));

const CreateRoutes = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default CreateRoutes;
