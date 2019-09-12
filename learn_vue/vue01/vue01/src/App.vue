<!-- template用户展示给用户, 相当与MVVM模式中的V -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 在父组件中给子组件传值 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
<!--    <greeting msg="greeting component"/>-->
    <greeting/>
  </div>
</template>

<script>
  // 导入子组件
import HelloWorld from './components/HelloWorld.vue'
import greeting from "./components/greeting";

export default {
  // 定义组件名称
  name: 'app',
  components: {    // 声明子组件
    HelloWorld,
    greeting
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
