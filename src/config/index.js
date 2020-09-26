export const SITE_COOKIES = {
  NAME: '__pasarTrainer_name',
  EMAIL: '__pasarTrainer_email',
  USERNAME: '__pasarTrainer_username',
  TOKEN: '__pasarTrainer_token',
}

export const API_URL = 
  process.env.NODE_ENV === 'production' 
  ?  process.env.REACT_APP_API_URL 
  :  process.env.REACT_APP_API_URL_DEV

export const API_AUTH_URL = 
  process.env.NODE_ENV === 'production' 
  ?  process.env.REACT_APP_API_AUTH_URL 
  :  process.env.REACT_APP_API_AUTH_URL_DEV

export const API_AUTHORIZE_URL = 
  process.env.NODE_ENV === 'production' 
  ?  process.env.REACT_APP_API_AUTHORIZE_URL 
  :  process.env.REACT_APP_API_AUTHORIZE_URL_DEV

export const API_KEY =  process.env.REACT_APP_API_KEY

export const MENU = {
  LOGIN: `${API_AUTHORIZE_URL}?business=45104640091720&callback=`,
  HOME: '/home',
  DASHBOARD: '/dashboard',
  COURSE: '/course',
}