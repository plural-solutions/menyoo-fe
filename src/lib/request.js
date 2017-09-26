import Vue from 'vue';


const get = (url, headers = {}) => (
  Vue.http.get(url, { headers }).then(response => (
    response.json()
  ), () => (
    Promise.reject()
  ))
);

const put = (url, data, headers = {}) => (
  Vue.http.put(url, data, { headers }).then(response => (
    Promise.resolve(response.body)
  ), () => (
    Promise.reject()
  ))
);

const post = (url, body, headers = {}) => (
  Vue.http.post(url, body, { headers }).then(response => (
    Promise.resolve(response.body)
  ), err => (
    Promise.reject(err)
  ))
);

export default {
  get,
  post,
  put,
};
