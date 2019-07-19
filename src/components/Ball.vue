<template>
  <div class="ball animated jello" @click="enlarge" :style="styleObj"></div>
</template>
<script>
export default {
  name: "ball",
  data() {
    return {
      radius: 10,
      isDone: false
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
      } else {
        this.isDone = true;
        this.radius = 1000;
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
