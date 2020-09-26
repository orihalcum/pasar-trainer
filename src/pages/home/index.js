import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Spin, Space, Layout } from 'antd';

import { getUserInfo } from "../../actions/auth";
import { MENU } from '../../config';

import queryString  from 'query-string';

const PageHome = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  let { auth_token, auth_success } = queryString.parse(window.location.search)

  useEffect(() => {
    if(auth_success == 1) {
      let payload = {
        token: auth_token
      }
      dispatch(getUserInfo(payload))
      .then(() => {
        setTimeout(() => {
          history.push(MENU.COURSE);
        }, 2000)
      })
      .catch(() => {
        // catch something here
      })
    }

  }, [auth_success])

  return (
    <Layout className="flex flex-centers">
      <Space size="middle">
        <Spin size="large" />
        Initializing...
      </Space>
    </Layout>
  );
};

export default PageHome;