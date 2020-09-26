import React from 'react';
import { Menu } from 'antd';

const HeaderNav = () => {
  return (
    <div className="header__nav">
      <div className="color-white" />
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Training Provider</Menu.Item>
        <Menu.Item key="2">Admin</Menu.Item>
      </Menu>
    </div>
  );
};

export default HeaderNav;