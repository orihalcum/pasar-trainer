import React, { useEffect } from 'react';
// import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Spin, Space, Layout } from 'antd';

import { getUserInfo } from "../../actions/auth";
import { MENU } from '../../config';

const PageHome = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    let payload = {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6NDUxMDQ2NDAyNzY1NTIsImV4cCI6MTYwMTAwNDU0NiwiZW1haWwiOiJqb2VAcGFzYXJ0cmFpbmVyLmNvbSIsInVpZCI6NDUxMDQ2NDAyNzY1NTIsIm9yaWdfaWF0IjoxNjAxMDA0MjQ2fQ.F6DaA2SEZjrw7DyTeddueJhUBIOGyKDNotUCVrKjQ9c'
    }
    dispatch(getUserInfo(payload))
    .then(() => {
      history.push(MENU.COURSE);
    })
    .catch(() => {
      // catch something here
    })
  }, [])

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