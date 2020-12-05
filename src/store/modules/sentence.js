export default {
  state: {
    sentences: [
      `I purchased a baby clown from the Russian terrorist black market.`,
      `Pair your designer cowboy hat with scuba gear for a memorable occasion.`,
      `Improve your goldfish's physical fitness by getting him a bicycle.`,
      `There are no heroes in a punk rock band.`,
      `The doll spun around in circles in hopes of coming alive.`,
      `The beach was crowded with snow leopards.`,
      `It was a really good Monday for being a Saturday.`,
      `Poison ivy grew through the fence they said was impenetrable.`,
      `The ants enjoyed the barbecue more than the family.`
    ],
    currentSentenceIndex: 0
  },
  mutations: {
    incSentenceIndex(state) {
      state.currentSentenceIndex++;
    }
  },
  actions: {},
  getters: {
    sentences(state) {
      return state.sentences;
    },
    nextSentence(state) {
      return state.sentences[state.currentSentenceIndex + 1];
    }
  }
};
