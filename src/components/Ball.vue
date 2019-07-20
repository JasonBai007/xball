<template>
  <div>
    <div class="ball animated bounceInLeft" @click="enlarge" :style="styleObj"></div>
  </div>
</template>
<script>
export default {
  name: "ball",
  data() {
    return {
      radius: 10,
      isDone: false,
      dingUrl: require("../../public/audios/ding.mp3"),
      victoryUrl: require("../../public/audios/victory.mp3")
    };
  },
  computed: {
    styleObj() {
      return {
        background: this.$attrs.color,
        width: this.radius + "vh",
        height: this.radius + "vh"
      };
    }
  },
  methods: {
    enlarge() {
      let r = this.radius;
      if (r < 50) {
        this.radius = r + 2;
        // 每次点击播放音乐特效
        let audio = new Audio(this.dingUrl);
        audio.play();
      } else {
        this.isDone = true;
        this.radius = 1000;
      }
    }
  },
  watch: {
    isDone(n, o) {
      if (n) {
        let audio = new Audio(this.victoryUrl);
        audio.play();
      }
    }
  }
};
</script>
<style scoped lang="less">
.ball {
  // 去掉点击时蓝色背景
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  transition: all 0.2s cubic-bezier(0.6, 4, 0.3, 0.8);
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
}
</style>
