/*
 * @motto: motto
 * @Author: haichen
 * @Date: 2020-03-05 14:10:40
 * @LastEditors: haichen
 * @LastEditTime: 2020-03-23 16:21:39
 */
import { API } from '../../utils/env'

const TOKEN = {
  ACCESS_TOKEN: `${API.kuickBaseUrl}/kuickuser/oauth2/access_token`,
  GET_USER_INFO_BY_ACCESS_TOKEN: `${API.kuickBaseUrl}/kuickuser/oauth2/getUserInfoByAccessToken`,
}

const BASE = {
  KUICK: `${API.kuickBaseUrl}/api/v1.7`,
  KUICK18: `${API.kuickBaseUrl}/api/v1.8`,
  KUICK10: `${API.kuickBaseUrl}/api/v1.0`,
  // ROBOT: `http://10.20.13.133:8190/api/v1.0`,
  ROBOT: `${API.robot}/api/v1.0`,
}

export default {
  TOKEN,
  BASE,
}
