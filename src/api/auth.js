import axios from 'axios'

const Auth = ({ urlAuthApi, configAuth }) => {
  return {
    getUserInfo: data => axios.post(`${urlAuthApi}/token-info/`, data, configAuth())
  }
}

export default Auth
