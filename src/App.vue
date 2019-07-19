<template>
  <div id="app">
    <div class="wrap">
      <ball color="#1ABC9C"></ball>
    </div>
    <div class="wrap">
      <ball color="#3498DB"></ball>
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
      radius: 10
    };
  },
  computed: {
    styleObj() {
      return {
        width: this.radius + "vh",
        height: this.radius + "vh"
      };
    }
  },
  methods: {
    enlarge() {
      let r = this.radius;
      this.radius = r + 1;
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
  border-bottom: 1px solid #BDC3C7;
  overflow: hidden;
}
</style>
