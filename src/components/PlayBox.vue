<template>
  <div id="box">
    <div id="controlPanel">
      <SpeedBox />
      <AccuracyBox />
      <CountBox />
    </div>
    <TypingArea />
  </div>
</template>

<script>
import TypingArea from "@/components/TypingArea.vue";
import SpeedBox from "@/components/SpeedBox.vue";
import AccuracyBox from "@/components/AccuracyBox.vue";
import CountBox from "@/components/CountBox.vue";
export default {
  components: {
    TypingArea,
    SpeedBox,
    AccuracyBox,
    CountBox
  }
};
</script>

<style scoped>
#box {
  width: 55rem;
  height: 20rem;
  margin: auto;
  margin-top: 9rem;
}
</style>
