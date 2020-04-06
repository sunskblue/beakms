import axios from 'axios';
import { assert } from '../utils';
import { HTTP_STATUS } from '../consts/statusCode';
import { message } from 'antd';
import { apiBaseUrl } from '../consts/env';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 50000;
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.defaults.baseURL = apiBaseUrl;
// 中间件 拦截请求-
axios.interceptors.request.use(
  config => {
    const userInfo = localStorage.getItem('fems-user');
    if (userInfo) {
      const { access_token } = JSON.parse(userInfo);
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (!err.response) {
      // apiError('ApiError', err)
      return;
    }
    const res = err.response;
    if (res.status === HTTP_STATUS.AUTHENTICATE) {
      window.location.href = '/login';
      return Promise.reject(err);
    } else {
      message.error(`${res.data.message}`);
      return Promise.reject(err);
    }
  },
);

const exceptionHandling = data => {
  if (!data) {
    return false;
  }

  if (
    data.status === HTTP_STATUS.SUCCESS ||
    data.status === HTTP_STATUS.POST_SUCCESS ||
    data.status === HTTP_STATUS.NOT_MODIFIED
  ) {
    // if (!data.data.data) {
    //   // assert(false, 'api data is empty')
    //   return false
    // }
    return data;
  } else {
    assert(false, data.statusText);
  }
  return false;
};

/**
 * get
 * @param url
 * @param data
 * @returns {Promise}
 */

const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then(response => {
        const res = exceptionHandling(response);
        if (res) {
          resolve(res.data.data);
        } else {
          reject(res);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

/**
 * post
 * @param url
 * @param data
 * @returns {Promise}
 */

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        const res = exceptionHandling(response);
        // const res=response;
        if (res) {
          resolve(response.data);
        } else {
          reject(res.error);
        }
      },
      err => {
        reject(err);
      },
    );
  });
};

/**
 * put
 * @param url
 * @param data
 * @returns {Promise}
 */

const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      response => {
        const res = exceptionHandling(response);
        if (res) {
          resolve(response.data.data);
        } else {
          reject(res.error);
        }
      },
      err => {
        reject(err);
      },
    );
  });
};

export default {
  get,
  post,
  put,
};
