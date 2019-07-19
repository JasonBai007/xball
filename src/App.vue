<template>
  <div id="app">
    <div class="wrap">
      <div class="ball" @click="enlarge" :style="styleObj"></div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
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
.wrap {
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
  overflow: hidden;
}
.ball {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #197869;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
  }
}
</style>
