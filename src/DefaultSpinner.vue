<template>
  <div class="v-spinner">
    <div class="v-clip">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultSpinner'
}
</script>

<style lang="stylus" scoped>
.v-spinner
  text-align center
.v-clip
  height 24px
  width 24px
  border-width 3px
  border-style solid
  border-color #333 transparent
  border-radius 50%
  background-color transparent
  animation v-clipDelay 1s 0s infinite linear
  animation-fill-mode both
  display inline-block
@-webkit-keyframes v-clipDelay
  0%
    transform rotate(0deg)
  50%
    transform rotate(180deg)
  100%
    transform rotate(360deg)
@keyframes v-clipDelay
  0%
    transform rotate(0deg)
  50%
    transform rotate(180deg)
  100%
    transform rotate(360deg)
</style>
