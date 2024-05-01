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
  <Person1 :list="person_list" v-if="isShow"/>
  <SumDog/>
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
import Person1 from "@/components/person1.vue";
import SumDog from "@/components/sumdog.vue";

// 引入ref
import {ref, reactive} from 'vue'
import type {Persons} from "@/types";

// 用来控制Person1控件是否被卸载
// v-if 和 v-show的区别如下：
// v-if 和 v-show 成立的时候都会展示组件
// 但不成立时，v-if 会将组件卸载掉，而v-show只是将组件隐藏掉 display: none
// v-show变化时会触发组件更新，但是不会触发组件卸载
// v-if变化时会触发组件的卸载
let isShow = ref(true);
// 创建一个ref容器
let ren = ref();

function test() {
  // 打印接受到的数值
  console.log(ren.value.name);
  console.log(ren.value.age);
}

// reactive直接传泛型
let person_list = reactive<Persons>([
  {id: "sdfafa01", name: "王老五", age: 18},
  {id: "adfadf02", name: "李四", age: 19},
  {id: "adfadf03", name: "哈哈哈", age: 20},
]);

</script>

<style>
/* 样式 */
</style>
