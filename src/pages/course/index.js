import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/layouts/main';
import { useParams } from "react-router";
import { Table } from 'antd';
import CourseService from '../../services/course';
import { showErrorMessage } from '../../utils/error';
import { numberToMoney } from '../../utils/formatter/currency';
import CourseTable from './course-table';
import CourseCategory from './course-category';


const PageCourse = () => {

  let { company } = useParams()
  const [loading, setLoading] = useState(true)
  const [categoryLoading, setCategoryLoading] = useState(true)
  const [courseList, setCourseList] = useState([])
  const [courseListCategory, setCourseListCategory] = useState([])
  const [courseCategory, setCourseCategory] = useState([])

  useEffect(() => {
    console.log(company)
  }, [])

  useEffect(() => {
    if(typeof company !== 'undefined') {
      let params = {
        companyId: company
      }
      setLoading(true)
      CourseService.getMyCourses(params)
      .then(response => {
        let { courses, categories } = response.data
        setCourseList(courses)
        setCourseListCategory(categories)
        setLoading(false)
      }).catch(err => {
        showErrorMessage(err)
        setLoading(false)
      })
      // Category
      setCategoryLoading(true)
      CourseService.getCourseCategory(params)
      .then(response => {
        setCourseCategory(response.data)
        setCategoryLoading(false)
      }).catch(err => {
        showErrorMessage(err)
        setCategoryLoading(false)
      })
    }else{
      setLoading(true)
      setCourseCategory([])
      CourseService.getPublicCourses()
      .then(response => {
        let { courses } = response.data
        setCourseList(courses)
        setLoading(false)
      }).catch(err => {
        showErrorMessage(err)
        setLoading(false)
      })
    }
  }, [company])

  return (
    <MainLayout>
      <CourseCategory title="Category" courseCategory={ courseCategory } loading={ categoryLoading } />
      <CourseCategory title="Course Category" courseCategory={ courseListCategory } loading={ loading } />
      <CourseTable courseList={ courseList } loading={ loading } />
    </MainLayout>
  );
};

export default PageCourse;