<template>
  <!--html-->
  <Person/>
  <Dog/>
</template>

<script lang="ts">
//js或者ts
import Person from './components/person.vue'
import Dog from './components/dog.vue'

export default {
  name: "App",
  components: {Person, Dog}
  // 组件的名字
}
</script>

<style>
/* 样式 */
</style>
