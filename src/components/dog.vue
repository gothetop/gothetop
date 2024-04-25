<template>
  <div class="dog">
    <h1>狗</h1>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="brak">狗叫</button>
  </div>

</template>

<script lang="ts">
export default {
  name: 'Dog',
  setup (){
    // 数据
    let name = "大黄";
    let age: number = 3;

    // 方法
    function brak(){
      alert(name + "在叫");
    }


    return {name, age, brak}
  }
}
</script>

<style>
.dog{
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

</style>