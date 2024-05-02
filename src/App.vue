<template>
  <!--html-->
  <div class="app">
    <h2 class="title">直接就是学习Vue3</h2>
    <!-- 导航区 -->
    <div class="nav">
      <!-- 字符串写法 -->
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <!-- 对象写法，name跳转 -->
      <RouterLink :to="{name: 'news'}" active-class="active">新闻</RouterLink>
      <!-- 对象写法，path跳转 -->
      <RouterLink :to="{path: '/about'}" active-class="active">关于</RouterLink>
    </div>
    <!-- 内容展示区 -->
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>

</template>

<script setup lang="ts" name="App">
import {RouterView, RouterLink} from "vue-router";


</script>
<style>
/* 样式 */
.app{
  width: 100%;
}
.title{
  text-align: center;
  height: 72px;
  line-height: 72px;
  font-size: 20px;
  border-radius: 20px;
  background-color: skyblue;
  color: white;
  margin-bottom: 35px;
}
.nav{
  width: 100%;
  margin-bottom: 50px;
}
.nav a{
  text-decoration: none;
  color: skyblue;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  background-color: aquamarine;
  margin-left: 280px;
  width: 100px;
  text-align: center;
  border-radius: 20px;
  transition: .5s ease-in-out;
}

a.active{
  background-color: black;
  color: white;
}

.content{
  position: relative;
  height: 400px;
  width: 80%;
  margin: 0 auto;
  border-radius: 20px;
  border: 1px solid black;
}

.content img{
  position: absolute;
  top: 50%;
  left: 50%;
}

</style>
