import React from 'react';
import { Card, Col } from 'antd';

const { Meta } = Card;

const CourseItem = data => {
  return (
    <Col sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
      <Card
        hoverable
        cover={<img alt="example" src={ data.primary_image_url } />}
      >
        <Meta title={ data.name } description={ data.summary } />
      </Card>
    </Col>
  );
};

export default CourseItem;