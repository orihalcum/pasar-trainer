import { API_URL, SITE_COOKIES, MENU, API_AUTH_URL, API_KEY } from '../config'
import { setCookie, getCookie } from '../utils/cookies'
import Auth from './auth'
import Company from './company'
import Course from './course'
import axios from 'axios'

// Interceptor
//
  axios.interceptors.response.use(
    response => response,
    (err) => {
      if ( err.response && ((err.response.status === 401)) ) {
        BACK_TO_LOGIN(true)
      }
      return Promise.reject(err)
    },
  )
//
// End of Interceptor

// Config API
//
  export const configAuthApi = ({ contentType, token } = {}) => {
    let params = {
      headers: {
        'Content-Type': contentType || 'application/json'
      },
    }
    return params
  }

  export const configApi = ({ contentType, token, headers } = {}) => {
    let params = {
      headers: {
        // 'Content-Type': contentType || 'application/json',
        'X-API-Key': API_KEY,
        'Authorization': `jwt ${token || getCookie(SITE_COOKIES.TOKEN)}`,
        ...headers
      },
    }
    return params
  }
//
// End of Config API

// Destroy access
//
  export const BACK_TO_LOGIN = (isExpired = false) => {
    Object.keys(SITE_COOKIES).forEach( async key => {
      await setCookie(SITE_COOKIES[key], null, -1)
    })
    window.location.replace(MENU.LOGIN + window.location.href)
  }
//
// End of Destroy access

// Params and Export 
//
  const params = { 
    urlApi: API_URL,
    urlAuthApi: API_AUTH_URL,
    config: configApi, 
    configAuth: configAuthApi, 
    defaultParams: { limit: 10 }
  }

  export const AuthApi = Auth(params)
  export const CompanyApi = Company(params)
  export const CourseApi = Course(params)
//
// End of Params and Export 