export default {
  state: {
    inptLen: 0,
    mistakes: 0
  },
  mutations: {
    setMistakes(state, mistakes) {
      state.mistakes = mistakes;
    },
    setInptLen(state, inptLen) {
      state.inptLen = inptLen;
    }
  },
  getters: {
    computeAccuracy(state) {
      if (state.mistakes == 0) {
        return 100;
      }
      return Math.round(100 - (state.mistakes / state.inptLen) * 100);
    }
  }
};
