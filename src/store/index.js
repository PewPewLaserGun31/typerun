import Vue from "vue";
import Vuex from "vuex";
import sentence from "./modules/sentence";
import speed from "./modules/speed";
import accuracy from "./modules/accuracy";
import count from "./modules/count";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sentence,
    speed,
    accuracy,
    count
  }
});
