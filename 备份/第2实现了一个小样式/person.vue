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
  data() {
    return {
      name: "张三",
      age: 18,
      tel: "123123121"
    }
  },
  methods: {
    showTel() {
      alert(this.tel);
    },
    changeName(){
      if (this.name === "张三"){
        this.name = "zhang_san";
      }
      else{
        this.name = "张三";
      }
    },
    changeAge(){
      this.age += 1;
    }
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
