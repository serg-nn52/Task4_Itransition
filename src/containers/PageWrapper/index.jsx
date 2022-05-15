import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import './style.scss';
import ErrorBoundary from 'containers/ErrorBoundary';

const PageWrapper = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <Header>Task4 for Itransition</Header>

        <Content>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Content>

        <Footer>Made by Lushkin Sergey</Footer>
      </Layout>
    </>
  );
};

export default PageWrapper;
