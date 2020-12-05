export default {
  state: {
    len: 0,
    time: 1
  },
  mutations: {
    setTime(state, time) {
      state.time = time;
    },
    setLen(state, len) {
      state.len = len;
    }
  },
  getters: {
    computeSpeed(state) {
      // let a = Math.round(state.len / state.time * 1000 * 60)
      // if( a.isNaN() ){
      //   return 100
      // }
      return Math.round((state.len / state.time) * 1000 * 60);
    }
  }
};
