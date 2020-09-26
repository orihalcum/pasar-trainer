import React from 'react';
import { Layout } from 'antd';
import HeaderUser from './user';
import HeaderNav from './nav';

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className="header flex flex-justify-space-between">
      <HeaderNav />
      <HeaderUser />
    </Header>
  );
};

export default MainHeader;

