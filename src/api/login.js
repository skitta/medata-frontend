import axios from "axios";
import Cookies from "js-cookie";

if (process.env.NODE_ENV == 'development') {
  // axios.defaults.baseURL = 'http://localhost:8000/api/';
  axios.defaults.baseURL = 'https://192.168.3.149/api/';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'https://192.168.3.149/api/'; // TODO: change to production url
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['X-CSRFToken'] = Cookies.get('csrftoken') || '';

export function getToken(username, password) {
  return new Promise((resolve, reject) => {
    axios.post("token-auth/", {
      username: username,
      password: password
    }).then(response => {
      resolve(response.data.token);
    }).catch(error => {
      reject(error);
    });
  });
}
