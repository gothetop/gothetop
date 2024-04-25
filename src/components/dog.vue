<template>
  <div class="dog">
    <h1>狗</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="brak">狗叫</button>
    <button @click="changeName">变身</button>
    <button @click="changeAge">增加年龄</button>
  </div>

</template>

<script lang="ts" setup name="Dog">
// 引入 ref
import {ref} from 'vue'

// 数据
let name = ref("大黄");
let age = ref(2);

// 方法
function changeName() {
  if (name.value === "大黄")
    name.value = "孙一楠";
  else name.value = "大黄";
}

function changeAge() {
  age.value += 1;
}

function brak() {
  alert(name.value + "正在狗叫，点击修改姓名直接变身");
}

</script>

<style>
.dog {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

</style>