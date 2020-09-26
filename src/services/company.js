import { CompanyApi } from "../api"

export const getCompanyList = (payload) => {
  return CompanyApi.getCompanyList(payload)
}

export default {
  getCompanyList,
}