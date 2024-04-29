<template>
  <!--html-->
  <Person/>
  <Dog/>
  <Car/>
  <Games/>
  <Input_name/>
  <Watch_text/>
  <Watch_effect/>
</template>

<script lang="ts">
//js或者ts
import Person from './components/person.vue'
import Dog from './components/dog.vue'
import Car from "@/components/car.vue";
import Games from "@/components/games.vue";
import Input_name from "@/components/input_name.vue";
import Watch_text from "@/components/watch_text.vue";
import Watch_effect from "@/components/watch_effect.vue";

export default {
  name: "App",
  components: {Person, Dog, Car, Games, Input_name, Watch_text, Watch_effect}
  // 组件的名字
}
</script>

<style>
/* 样式 */
</style>
