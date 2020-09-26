import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MENU } from '../../../config';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const MainSider = () => {
  return (
    <Sider width={200} className="main-sider bg-transparent">
      <Menu
        mode="inline"
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        className="main-sider__menu bg-transparent"
      >
        <Menu.Item key="1">Profile Page</Menu.Item>
        <Menu.Item key="2">
          <Link to={ MENU.COURSE }>
            Course
          </Link>
        </Menu.Item>
        <Menu.Item key="3">Trainers</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default MainSider;