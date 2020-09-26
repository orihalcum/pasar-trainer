import { CompanyApi, CourseApi } from "../api"

const getMyCourses = (params) => {
  return CourseApi.getMyCourses(params)
}

const getPublicCourses = (params) => {
  return CourseApi.getPublicCourses(params)
}

export default {
  getMyCourses,
  getPublicCourses
}