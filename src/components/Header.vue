<template>
<div class="wrap" @click="changeBackgroundColor">
  <h1>Header</h1>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maxime.</h3>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maxime.</h3>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maxime.</h3>
</div>
</template>

<script>
export default {
  data() {
    return {
      HUE: 0,
      LIGHTNESS: 50,
    };
  },
  computed: {
    txtColor(){
      return `hsl(${this.HUE}, 36%, ${this.LIGHTNESS}%)`;
    },
    bgColor(){
      return `hsl(${this.HUE}, 36%, ${this.LIGHTNESS + 30}%)`;
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

<style>
.wrap {
  border: 1px solid #000;
  padding: 10px;

  background-color: v-bind('bgColor');
  color: v-bind('txtColor');
}
</style>
