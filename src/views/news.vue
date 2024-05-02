<script setup lang="ts" name="News">
import {reactive} from "vue";
import {RouterView, RouterLink} from "vue-router";

const news_list = reactive([
  {
    id: 'asdfsd01', title: '十种抗癌食物', content: "西兰花"
  },
  {
    id: 'asdfsd02', title: '如何一夜暴富', content: "学IT"
  },
  {
    id: 'asdfsd03', title: '震惊504惊天事件', content: "孙一楠是叼毛"
  }
]);

</script>

<template>
  <!-- 导航区 -->
  <ul class="news-list">
    <li v-for="item in news_list" :key="item.id">
      <!-- 第一种写法 很麻烦 -->
      <!--<RouterLink :to="`/news/detail?id=${item.id}&&title=${item.title}&&content=${item.content}`">{{item.title}}</RouterLink>-->

      <!-- 第二种写法 对象写法 -->
      <RouterLink :to="{
        name: 'detail',  // 起了名字的  起名字耦合度较低
        // 如果没有起名字，就用path来指定路由
        query: {
          id: item.id,
          title: item.title,
          content: item.content
        }
      }">
        {{item.title}}
      </RouterLink>
    </li>
  </ul>
  <!-- 展示区 -->
  <div class="news-detail">
    <RouterView></RouterView>
  </div>

</template>

<style scoped>
.news-list{
  list-style-type: none;
  width: 200px;
  float: left;
}
.news-list li{
  margin-bottom: 15px;
  padding: 10px;
}
.news-list li a{
  text-decoration: none;
}
.news-list li a:hover{
  color: skyblue;
}
.news-detail{
  width: 560px;
  border: 1px solid black;
  border-radius: 15px;
  float: right;
  height: 310px;
  margin-top: 30px;
  margin-right: 100px;
  padding: 20px;
}

</style>