import React, { useState, useEffect } from 'react';
import { Menu, Dropdown } from 'antd';
import { UserOutlined, CheckOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { getCompanyList } from '../../../services/company';
import { Link } from 'react-router-dom';
import { MENU, SITE_COOKIES } from '../../../config';
import { useSelector } from "react-redux";
import { BACK_TO_LOGIN } from '../../../api';
import { useParams } from "react-router";
import { getCookie } from '../../../utils/cookies';

const HeaderUser = (props) => {
  
  let { company } = useParams()

  const { user: currentUser } = useSelector((state) => state.auth);

  const [companyList, setCompanyList] = useState([])
  const [name, setName] = useState(currentUser.name)

  useEffect(() => {
    getCompanyList()
    .then(response => {
      let { companies } = response.data
      setCompanyList(companies)
    })
    if(getCookie(SITE_COOKIES.NAME)) setName(getCookie(SITE_COOKIES.NAME))
  }, [])
  
  return (
    <div className="header__user">
      <Dropdown overlay={ getMenu(companyList, company) } placement="topRight">
        <a className="ant-dropdown-link" href="/" onClick={e => e.preventDefault()}>
          <Avatar icon={<UserOutlined />} />
          <span className="ml-15">{ name }</span>
        </a>
      </Dropdown>
    </div>
  );
};

export default HeaderUser;

const getMenu = (companyList, company) => (
  <Menu>
    {
      companyList.map(v => (
        <Menu.Item key={ v.uid }>
          <Link to={ `${MENU.COURSE}/${v.uid}` }>{ v.name } { company == v.uid && <CheckOutlined /> }</Link>
        </Menu.Item>
      ))
    }
    <Menu.Item key="logout">
      <a href="/" onClick={ e => { e.preventDefault(); BACK_TO_LOGIN() } }>Logout</a>
    </Menu.Item>
  </Menu>
);