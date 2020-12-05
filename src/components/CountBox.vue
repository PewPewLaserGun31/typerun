<template>
  <div id="CountBox">
    <span>Count</span>
    <span id="cnt">{{ this.getCount }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getCount"])
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

#CountBox {
  height: 5rem;
  width: 10rem;
  display: inline-block;
  border: none;
  border-radius: 0.3rem;
  background-color: white;
}

#cnt {
  margin-top: 1.7rem;
  margin-left: 7rem;
  font-size: 1.7rem;
  color: tomato;
}
</style>
