import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import './style.scss';

const PageWrapper = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <Header>Task4 for Itransition</Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Made by Lushkin Sergey</Footer>
      </Layout>
    </>
  );
};

export default PageWrapper;
