import React from 'react';
import { Button } from 'antd';

const CourseCategory = ({ title, courseCategory, categoryLoading }) => {
  return (
    courseCategory.length > 0 &&
    <div className="mb-30">
      <h3 className="mb-15">{ title }</h3>
      { courseCategory.map((v, k) => <Button type="default" size="small" className="mb-10 mr-10">{ v.name }</Button> ) }
    </div>
  );
};

export default CourseCategory;