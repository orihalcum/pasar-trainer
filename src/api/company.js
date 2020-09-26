import axios from 'axios'

const Company = ({ urlApi, config }) => {
  let endpoint = '/contact/api/contact/0/'
  return {
    getCompanyList: () => axios.get(`${urlApi}${endpoint}`, config()),
  }
}

export default Company
