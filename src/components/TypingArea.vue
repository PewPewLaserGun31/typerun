<template>
  <div id="typing-area">
    <span id="mmp" class="ta txt">{{ this.mistakes }}</span>
    <span id="tnp" class="ta txt">{{ this.sentences[this.csi] }}</span>
    <input
      id="inp"
      class="ta"
      type="text"
      autocomplete="off"
      spellcheck="false"
      v-model="inpt"
      @keydown="
        checkEquality();
        calculateNoMistakes();
      "
      @keydown.enter="setNext"
    />
    <div id="underline"></div>
    <span id="next" class="ta txt">NEXT {{ this.nextSentence }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      errRune: "❕",
      inpt: "",
      mistakes: "",
      csi: 0,
      noMistakes: "",
      startTime: 0
    };
  },
  computed: mapGetters(["sentences", "nextSentence"]),
  methods: {
    checkEquality() {
      //for accuracy computing
      this.$store.commit("setInptLen", this.inpt.length);
      let mistakesCounter = 0;
      //time starting point
      if (this.inpt.length == 0) {
        this.startTime = Date.now() + 1;
      }
      //copy sentence to mistakes row
      if (this.mistakes.length == 0) {
        this.mistakes = this.sentences[this.csi].slice();
      }
      //set mistekes
      for (let i = 0; i < this.inpt.length; i++) {
        if (this.sentences[this.csi].charAt(i) !== this.inpt.charAt(i)) {
          this.mistakes = this.replaceRune(this.mistakes, i, this.errRune);
          mistakesCounter++;
        }
        if (
          this.sentences[this.csi].charAt(i) == this.inpt.charAt(i) &&
          this.mistakes.charAt(i) == this.errRune
        ) {
          this.mistakes = this.replaceRune(
            this.mistakes,
            i,
            this.sentences[this.csi].charAt(i)
          );
        }
      }
      //accuracy counting
      this.$store.commit("setMistakes", mistakesCounter);
      //count right letters
      this.calculateNoMistakes();
      //set state for speed
      this.$store.commit("setTime", Date.now() - this.startTime);
      this.$store.commit("setLen", this.noMistakes);
    },
    replaceRune(str, index, chr) {
      if (index > str.length - 1) return str;
      return str.substring(0, index) + chr + str.substring(index + 1);
    },
    //when enter is pressed
    setNext() {
      this.inpt = "";
      this.csi++;
      this.$store.commit("incSentenceIndex");
      this.mistakes = this.sentences[this.csi].slice();
      this.$store.commit("incrementCount");
    },
    //calculate number of right letters
    calculateNoMistakes() {
      if (this.mistakes.includes(this.errRune)) {
        this.noMistakes = this.mistakes.split(this.errRune)[0].length;
      } else {
        this.noMistakes = this.inpt.length;
      }
    }
  }
};
</script>

<style scoped>
input {
  text-decoration: none;
  display: block;
  margin-left: 3rem;
  margin-right: 3rem;
  background: transparent;
  border: none;
  width: 49rem;
  color: black;
}
#typing-area {
  margin-top: 0.2rem;
  height: 9.8rem;
  display: block;
}
#mmp {
  height: 2rem;
  color: white;
}
#tnp {
  color: black;
}
#inp {
}
#next {
  margin-top: 1.5rem;
}
#underline {
  background-color: black;
  border: none;
  border-radius: 0.3rem;
  height: 0.3rem;
  margin-left: 3rem;
  margin-right: 3rem;
}
.ta {
  font-family: Arial;
  font-size: 1.2rem;
  font-weight: 700;
  display: block;
  height: 1.7rem;
}
.txt {
  color: black;
  text-align: left;
  margin-left: 3rem;
}
</style>
