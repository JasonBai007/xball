<template>
  <div id="app">
    <div class="wrap">
      <ball color="#1ABC9C" id="b1">
        <img src="./assets/img/victory.png" width="180px" v-if="isWin && winnerId === 'b1'" />
        <img src="./assets/img/defeat.png" width="150px" v-if="isWin && winnerId === 'b2'" />
      </ball>
    </div>
    <div class="wrap">
      <ball color="#3498DB" id="b2">
        <img src="./assets/img/victory.png" width="180px" v-if="isWin && winnerId === 'b2'" />
        <img src="./assets/img/defeat.png" width="150px" v-if="isWin && winnerId === 'b1'" />
      </ball>
    </div>
  </div>
</template>

<script>
import Ball from "./components/Ball.vue";

export default {
  name: "app",
  components: {
    Ball
  },
  data() {
    return {
      isWin: false,
      winnerId: "",
      legendaryUrl: require("@/assets/audios/legendary.mp3"),
      shutdownUrl: require("@/assets/audios/shutdown.mp3")
    };
  },
  mounted() {
    // 监听winner，只监听一次
    this.$Bus.$once("getWinnerId", id => (this.winnerId = id));
  },
  methods: {
    win() {
      // 如果是第一个赢了，就播放天下无双，然后状态设置为已胜利
      if (!this.isWin) {
        this.playSound(this.legendaryUrl);
        this.isWin = true;
      } else {
        this.playSound(this.shutdownUrl);
      }
    },
    playSound(url) {
      let audio = new Audio(url);
      audio.play();
    }
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  background: #ecf0f1;
}
.wrap {
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-top: 1px dashed #bdc3c7;
  overflow: hidden;
  &:nth-child(1) {
    transform: rotate(180deg);
    border-top: none;
  }
}
</style>
