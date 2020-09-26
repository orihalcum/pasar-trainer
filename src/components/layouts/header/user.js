import React, { useState, useEffect } from 'react';
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { getCompanyList } from '../../../services/company';
import { Link } from 'react-router-dom';
import { MENU } from '../../../config';
import { useSelector } from "react-redux";
import { BACK_TO_LOGIN } from '../../../api';

const HeaderUser = (props) => {
  
  const { user: currentUser } = useSelector((state) => state.auth);

  const [companyList, setCompanyList] = useState([])
  
  useEffect(() => {
    getCompanyList()
    .then(response => {
      let { companies } = response.data
      setCompanyList(companies)
    })
  }, [])

  return (
    <div className="header__user">
      <Dropdown overlay={ getMenu(companyList) } placement="topRight">
        <a className="ant-dropdown-link" href="/" onClick={e => e.preventDefault()}>
          <Avatar icon={<UserOutlined />} />
          <span className="ml-15">{ currentUser.name }</span>
        </a>
      </Dropdown>
    </div>
  );
};

export default HeaderUser;

const getMenu = companyList => (
  <Menu>
    {
      companyList.map(v => (
        <Menu.Item key={ v.uid }>
          <Link to={ `${MENU.COURSE}/${v.uid}` }>{ v.name }</Link>
        </Menu.Item>
      ))
    }
    <Menu.Item key="logout">
      <a href="/" onClick={ e => { e.preventDefault(); BACK_TO_LOGIN() } }>Logout</a>
    </Menu.Item>
  </Menu>
);