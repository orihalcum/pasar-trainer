import { CompanyApi, CourseApi } from "../api"

const getMyCourses = (params) => {
  return CourseApi.getMyCourses(params)
}

const getPublicCourses = (params) => {
  return CourseApi.getPublicCourses(params)
}

const getCourseCategory = (params) => {
  return CourseApi.getCourseCategory(params)
}

export default {
  getMyCourses,
  getPublicCourses,
  getCourseCategory
}