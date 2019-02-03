<template>
  <div id="app">
    <div
      class="loading-btn"
      @click="$sync(handleClick)">
      点击加载
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
