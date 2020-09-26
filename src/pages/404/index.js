import React from 'react';
import { Result, Button } from 'antd';

const Page404 = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Halaman tidak ditemukan!"
      extra={<Button type="primary" onClick={ e => props.history.goBack() }>Kembali</Button>}
    />
  );
};

export default Page404;