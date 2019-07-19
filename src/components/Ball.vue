<template>
  <div class="ball" @click="enlarge" :style="styleObj"></div>
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
        this.radius = r + 5;
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
  border-radius: 50%;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
  }
}
</style>
