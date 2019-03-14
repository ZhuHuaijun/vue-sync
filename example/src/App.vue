<template>
  <div id="app">
    <div @click="$sync(handleClick)">
      默认样式
    </div>
    <div @click="$sync(handleClick, { spinner })">
      自定义组件
    </div>
    <div @click="$sync(handleClick, { backgroundColor: 'rgba(0,0,0,0.1)'})">
      自定义背景色
    </div>
  </div>
</template>

<script>
import { Circle4 } from 'vue-loading-spinner'

export default {
  name: 'App',

  data() {
    return {
      spinner: Circle4
    }
  },

  methods: {
    handleClick () {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 200px
  margin-top 30px
  display flex
  flex-direction column
  align-items center
  justify-content space-around
  box-sizing border-box
</style>
