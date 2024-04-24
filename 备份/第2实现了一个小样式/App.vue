<template>
  <!--html-->
  <div class="app">
    <h1>你好啊！</h1>
    <Person/>
  </div>
</template>

<script lang="ts">
//js或者ts
import Person from './components/person.vue'

export default {
  name: "App",
  components: {Person}
  // 组件的名字
}
</script>

<style>
/* 样式 */
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
