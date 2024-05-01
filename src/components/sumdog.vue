<script setup lang="ts" name="SumDog">

// 从hooks中引入两个功能
// 通过hooks将不同的功能分散在了不同的文件中
import useDog from "@/hooks/useDog";
import useSum from "@/hooks/useSum";

let {dog_list, addDog} = useDog();
let {sum, changeSum} = useSum();
</script>

<template>
  <div class="sum-dog">
    <h1>总和为：{{sum}}</h1>
    <button @click="changeSum">点我加1</button>
    <hr/>
    <img v-for="(item, index) in dog_list" :key="index" :src="item" alt="小狗图片">
    <hr/>
    <button @click="addDog">点击添加小狗狗</button>
  </div>

</template>

<style scoped>
.sum-dog {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
}

.sum-dog button {
  cursor: pointer;
  margin: 0 7px;
  border-radius: 10px;
  background-color: aquamarine;
  border: 1px solid aqua;
  transition: transform 0.5s ease-in-out; /* 添加 transform 过渡效果 */
  transform: scale(1);
}

.sum-dog button:hover {
  background-color: aqua;
  transform: scale(1.1);
  color: white;
}

.sum-dog img{
  height: 120px;
  margin-left: 20px;
}
</style>