// import { getToken, setToken } from 'utils/filter';
import request from '../../utils/request';

export default {
  state: {
    collapsed: false,
  },
  reducers: {
    updateState(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    async login(payload, rootState) {
      const data = await request.post('/login', payload);
      this.updateState({ loginToken: data.data });
      return data;
    },
  },
};
