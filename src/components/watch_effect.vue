<script setup lang="ts" name="WatchEffect">
import {ref, watch, watchEffect} from "vue";

// 数据
let temp = ref(10);
let height = ref(10);

// 方法
function changeTemp(){
  temp.value += 10;
}

function changeHeight() {
  height.value += 10;
}

// 使用watch监听
// 需要精确的指出需要监听那些个数据，在需要监视的数据繁多的情况下非常的不方便
// watch([temp, height], (newVal) => {
//   let [temp, height] = newVal;
//   if (temp >= 70 || height >= 80){
//     console.log("像服务器发送请求");
//   }
// });

// 使用watcheffect监听
watchEffect(() => {
  if (temp.value >= 70 || height.value >= 80){
    console.log("向服务器发送一条消息" + height.value);
  }
});
</script>

<template>

  <div class="watch-effect">
    <h1>注意：水温到70或者水位到80给服务器发送消息</h1>
    <h1>水温：{{temp}}°C</h1>
    <h1>水位：{{height}}cm</h1>
    <button @click="changeTemp">增加温度</button>
    <button @click="changeHeight">增加水位</button>
  </div>

</template>

<style scoped>
.watch-effect {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.watch-effect button {
  cursor: pointer;
  margin: 0 7px;
  border-radius: 10px;
  background-color: aquamarine;
  border: 1px solid aqua;
  transition: transform 0.5s ease-in-out; /* 添加 transform 过渡效果 */
  transform: scale(1);
}

.watch-effect button:hover{
  background-color: aqua;
  transform: scale(1.1);
  color: white;
}
</style>