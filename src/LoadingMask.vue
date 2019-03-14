<template>
  <div
    class="transparent-mask"
    :style="{ backgroundColor }">
    <component :is="spinner"></component>
  </div>
</template>

<script>
import DefaultSpinner from './DefaultSpinner'

export default {
  name: 'LoadingMask',

  props: {
    spinner: {
      type: Object,
      default() {
        return DefaultSpinner
      }
    },

    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  }
}
</script>

<style lang="stylus" scoped>
.transparent-mask
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  z-index 99999
  background-color transparent
  display flex
  align-items center
  justify-content center
</style>
