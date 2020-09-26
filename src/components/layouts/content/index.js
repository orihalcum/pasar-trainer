import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const MainContent = ({ children }) => {
  return (
    <Content
      className="main-content bg-white"
    >
      { children }
    </Content>
  );
};

export default MainContent;