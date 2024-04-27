<template>
  <!--html-->
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>

  </div>
</template>


<script lang="ts" setup name="person">
// 引入ref
import {ref} from 'vue'
// 数据
let name = ref("tigood");
let age = ref(18);
let tel: string = "1231231";
let address: string = "华北理工大学轻工学院";

// 方法
function changeName (){
  if (name.value === "刘时佳")
    name.value = "tigood";
  else name.value = "刘时佳";
}
function showTel(){
  alert(tel);
}
function changeAge(){
  age.value += 1;
}

</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.person button {
  cursor: pointer;
  margin: 0 7px;
  border-radius: 10px;
  background-color: aquamarine;
  border: 1px solid aqua;
  transition: transform 0.5s ease-in-out; /* 添加 transform 过渡效果 */
  transform: scale(1);
}

.person button:hover{
  background-color: aqua;
  transform: scale(1.1);
  color: white;
}
</style>
