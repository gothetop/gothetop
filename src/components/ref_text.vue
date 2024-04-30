<script setup lang="ts" name="RefText">
import {ref} from 'vue'

// 创建一个ref容器
let title1 = ref();
let title2 = ref();

// 方法
function ShowDom1(){
  // 上面创建了一个ref容器title1，然后在模板中某个语句中使用该容器
  // 就可以通过 title1.value 的方式获取到该容器的值
  // ref是用来替代之前模板中的id属性来使用的
  // 最后我们不同组件都是会融到一起的，如果两个不同的组件中使用了相同的id，那么将会带来严重高的后果
  // ref就可以很好的解决这个问题
  const myH1 = title1.value;
  console.log(myH1);
}

function ShowDom2() {
  const myH1 = title2.value;
  console.log(myH1);
}

</script>

<template>
<div class="ref-text">
  <h1 ref="title1">这是哈哈哈哈</h1>
  <h1 ref="title2">这是嘿嘿嘿嘿</h1>
  <button @click="ShowDom1">点我获取第一行</button>
  <button @click="ShowDom2">点我获取第二行</button>
</div>
</template>

<style scoped>
/* 这里scoped的功能就是让这些css代码只对当前vue文件中的组件有效，对其他文件中的组件是无效的 */
.ref-text {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.ref-text button {
  cursor: pointer;
  margin: 0 7px;
  border-radius: 10px;
  background-color: aquamarine;
  border: 1px solid aqua;
  transition: transform 0.5s ease-in-out; /* 添加 transform 过渡效果 */
  transform: scale(1);
}

.ref-text button:hover{
  background-color: aqua;
  transform: scale(1.1);
  color: white;
}
</style>