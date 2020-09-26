import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../header';
import MainSider from '../sider';
import MainContent from '../content';

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <MainHeader />
      <Layout>
        <MainSider />
        <Layout style={{ padding: '0 24px 24px' }}>
          <MainContent>
            { children }
          </MainContent>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;