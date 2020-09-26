import { AuthApi, BACK_TO_LOGIN } from "../api"
import { SITE_COOKIES } from "../config"
import { setCookies } from "../utils/cookies"

export const getUserInfo = (payload) => {
  return AuthApi.getUserInfo(payload)
  .then(async response => {
    let { first_name, last_name, email } = response.data
    const expires_in = 100000
    let cookiesData = [
      { cname: SITE_COOKIES.NAME, cvalue: `${first_name} ${last_name}`, exdays: expires_in },
      { cname: SITE_COOKIES.EMAIL, cvalue: email, exdays: expires_in },
      { cname: SITE_COOKIES.TOKEN, cvalue: payload.token, exdays: expires_in },
    ];
    await setCookies(cookiesData);
    return response.data
  })
}

export const logout = () => BACK_TO_LOGIN()

export default {
  getUserInfo,
  logout
}