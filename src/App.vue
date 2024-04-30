<template>
  <!--html-->
  <!-- 在组件上使用了ref -->
  <Person ref="ren"/>
  <Dog/>
  <Car/>
  <Games/>
  <Input_name/>
  <Watch_text/>
  <Watch_effect/>
  <Ref_text/>
  <button @click="test">测试</button>
</template>

<script setup lang="ts" name="App">
import Person from './components/person.vue'
import Dog from './components/dog.vue'
import Car from "@/components/car.vue";
import Games from "@/components/games.vue";
import Input_name from "@/components/input_name.vue";
import Watch_text from "@/components/watch_text.vue";
import Watch_effect from "@/components/watch_effect.vue";
import Ref_text from "@/components/ref_text.vue";

// 引入ref
import {ref} from 'vue'

// 创建一个ref容器
let ren = ref();

function test() {
  // 打印接受到的数值
  console.log(ren.value.name);
  console.log(ren.value.age);
}

</script>

<style>
/* 样式 */
</style>
