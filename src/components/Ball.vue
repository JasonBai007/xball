<template>
  <div class="ball" @click="enlarge" :style="styleObj"></div>
</template>
<script>
export default {
  name: "ball",
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
<style scoped lang="less">
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
