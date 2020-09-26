import axios from 'axios'

const Course = ({ urlApi, config }) => {
  let endpoint = '/course/api/course/'
  return {
    getPublicCourses: () => axios.get(`${urlApi}${endpoint}`, config()),
    getMyCourses: params => axios.get(`${urlApi}${endpoint}/admin/`, { params: { ...params }, ...config({ headers: { "X-Company-ID" : params.companyId } }) }),
    getCourseCategory: params => axios.get(`${urlApi}${endpoint}/admin/categories/`, config({ headers: { "X-Company-ID" : params.companyId } })),
  }
}

export default Course