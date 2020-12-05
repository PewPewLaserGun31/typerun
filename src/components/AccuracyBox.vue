<template>
  <div id="AccuracyBox">
    <span>Accuracy</span>
    <span id="acc">{{ this.computeAccuracy }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["computeAccuracy"])
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

#AccuracyBox {
  height: 5rem;
  width: 10rem;
  display: inline-block;
  border: none;
  border-radius: 0.3rem;
  background-color: white;
}

#acc {
  margin-top: 1.7rem;
  margin-left: 7rem;
  font-size: 1.7rem;
  color: tomato;
}
</style>
