<template>
  <div class="transparent-mask">
    <loading-circle></loading-circle>
  </div>
</template>

<script>
import { Circle } from 'vue-loading-spinner'

export default {
  components: {
    LoadingCircle: Circle
  }
}
</script>

<style>
.transparent-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
