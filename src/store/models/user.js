/* eslint-disable no-unused-vars */
import request from '../../utils/request';

export default {
  state: {
    status: -1,
    message: '',
    data: null,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    // increment(state, payload) {
    //   return state + payload
    // },
    // incrementBy(state, payload) {
    //   console.log('increment by', state, payload)
    //   return state + payload
    // },
    result(state, payload) {
      return { ...state, ...payload };
    },
  },
  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
    async getResult(payload, rootState) {
      const params = {
        name: 'stark',
        age: 18,
      };
      const res = await request.get(
        'https://easy-mock.com/mock/5cc1cb39aa4f7f6ebe5d26ce/stark/movie',
        params,
      );
      this.result(res);
    },
  }),
};
