<template>
  <div id="speedBox">
    <span>Speed</span>
    <span id="spd">{{ this.computeSpeed }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["computeSpeed"])
};
</script>

<style scoped>
span {
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: left;
  margin-left: 1rem;
}

#speedBox {
  height: 5rem;
  width: 10rem;
  display: inline-block;
  border: none;
  border-radius: 0.3rem;
  background-color: white;
}

#spd {
  margin-top: 1.7rem;
  margin-left: 7rem;
  font-size: 1.7rem;
  color: tomato;
}
</style>
