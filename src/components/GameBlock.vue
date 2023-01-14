<template>
<div class="block" @click="changeBackgroundColor" id="GameBlock">
  <!-- CSS 變數、函式，改用 JS 控制 -->
  <!-- 設計師儀表板 https://www.primefaces.org/designer-vue/#/ -->
  <h1>GameBlock</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quibusdam fuga blanditiis! Similique distinctio vero eveniet ea corrupti. Animi, mollitia?</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      HUE: 70,
      LIGHTNESS: 40,
    };
  },
  computed: {
    txtColor(){
      return `hsl(${this.HUE}, 36%, ${this.LIGHTNESS}%)`;
    },
    bgColor(){
      return `hsl(${this.HUE}, 36%, ${this.LIGHTNESS + 50}%)`;
    },
  },
  methods: {
    changeBackgroundColor() {
      this.HUE += 30;
      console.log('HUE:', this.HUE)
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  background-color: v-bind('bgColor');
  color: v-bind('txtColor');
}
</style>
