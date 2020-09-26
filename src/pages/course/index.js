import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/layouts/main';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Skeleton, Row } from 'antd';
import CourseService from '../../services/course';
import CourseItem from './course-item';
import { showErrorMessage } from '../../utils/error';


const PageCourse = () => {

  let { company } = useParams()
  const [loading, setLoading] = useState(true)
  const [courseList, setCourseList] = useState([])

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
        let { courses, categories, offset, total } = response.data
        setCourseList(courses)
        setLoading(false)
      }).catch(err => {
        showErrorMessage(err)
        setLoading(false)
      })
    }else{
      setLoading(true)
      CourseService.getPublicCourses()
      .then(response => {
        let { courses, categories, offset, total } = response.data
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
      <Skeleton active loading={ loading }>
        <Row gutter={[30, 30]}>
          { courseList.map((v, k) => <CourseItem { ...v } key={ k } />)}
        </Row>
      </Skeleton>
    </MainLayout>
  );
};

export default PageCourse;