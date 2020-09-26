import React from 'react';
import { Table } from 'antd';
import { numberToMoney } from '../../utils/formatter/currency';

const CourseTable = ({ courseList, loading }) => {
  return (
    <div className="">
      <h3 className="mb-15">Course List</h3>
      <Table dataSource={ courseList } columns={ columns } loading={ loading } />
    </div>
  )
};

export default CourseTable;

const columns = [
  {
    title: '',
    key: 'image',
    render: (value, row, index) => <img src={ value.primary_image_url } style={{ height: 70 }} />
  },
  {
    title: 'Course',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Visibility',
    dataIndex: 'visibility',
    key: 'visibility',
  },
  {
    title: 'Price List',
    key: 'price',
    render: (value, row, index) => {
      return value.prices.map(v => <div>{ numberToMoney(v.price_per_participant) } (min: { v.min_participant_count })</div>)
    }
  },
]