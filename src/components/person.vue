<template>
  <!--html-->
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>

  </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  setup(){
    // console.log(this)   setup中的this是undefined，vue3中已经开始弱化this了
    // 数据
    let name: string = "张三";   // 此时的name不是响应式的
    let age: number = 10;   // 此时的age不是响应式的
    let tel: string = "1231231";  // 此时的tel也不是响应式的

    // 方法
    function changeName (){  // setup中没有维护this关键字，不用使用this关键字
      if (name === "张三")
        name = "zhang_san";
      else name = "张三";
    }

    function changeAge(){
      age += 1;
    }

    function showTel(){
      alert(tel);
    }


    return {name, age, changeAge, changeName, showTel}  // 应该是{name: name, age: age} 不过这里触发了js的对象简写 可以简写为这样
  }
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
  margin: 0 4px;
  border-radius: 10px;
  background-color: aquamarine;
  border: 1px solid aqua;
}
</style>
