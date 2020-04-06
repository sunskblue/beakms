import { API } from '../../utils/env'

const GET_TOKEN = {
  TOKEN: `${API.consoleBaseUrl}/uaa/oauth/token`,
}
const VIPCOURSE = {
  ORDER: `${API.consoleBaseUrl}/vipcourse/order/center`,
}
const FINANCE = {
  INVOICE: `${API.consoleBaseUrl}/finance/invoice/list`,
}

export default {
  GET_TOKEN,
  VIPCOURSE,
  FINANCE,
}
