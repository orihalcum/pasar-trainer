
import { SITE_COOKIES } from '../config';

export const setCookies = data => data.forEach(({ cname,cvalue,exdays }) => setCookie(cname,cvalue,exdays))

export const setCookie = (cname,cvalue,exdays) => {
  var d = new Date();
  // var tomorrow = new Date(d.getFullYear(), d.getMonth(), d.getDate() + exdays, 3, 0, 0); // clear at 3 am
  // d.setTime(tomorrow.getTime());
  // Sementara cookies 1 jam
  var time = d.getTime();
  // var expireTime = time + 1000*3600 * exdays;
  var expireTime = time + 1000 * 3600 * exdays; // extdays is mili second in here
  d.setTime(expireTime);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const getCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i]; // eslint-disable-next-line
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    } // eslint-disable-next-line
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const clearCookies = () => {
  Object.keys(SITE_COOKIES).forEach( async key => {
    await setCookie(SITE_COOKIES[key], null, -1)
  })
}

export const checkCookie = () => {
  
}