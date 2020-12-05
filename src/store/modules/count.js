export default {
  state: {
    count: 0
  },
  mutations: {
    incrementCount(state) {
      state.count++;
    }
  },
  getters: {
    getCount(state) {
      return state.count;
    }
  }
};
