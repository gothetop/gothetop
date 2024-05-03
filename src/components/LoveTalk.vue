<script setup lang="ts" name="LoveTalk">
import {reactive, onMounted} from 'vue';
import axios from "axios";
// 引入Store
import {useLoveTalkStore} from '@/store/LoveTalk';
import {storeToRefs} from "pinia";

// 接受这个公用的数组
const LoveTalkStore = useLoveTalkStore();
// 使用$subscribe 监听lovetalkstore的修改 和 state
LoveTalkStore.$subscribe((mutate, state) => {
  console.log("数据发生了变化", mutate, state);
})
// 将数据单独解构分离出来  不过直接解出来数据会失去响应式，所以这里需要将这个解构出来的数据转换为响应式
// 可能首先会想到 toRefs，当然它可以实现这个功能，不过他会将这个对象中的所有属性和方法都转换为ref类型，有点浪费资源
// 这里引入一个pinia的东西  storeToRefs 这个东西仅仅转换 我们的共享数据，非常专一
const {TalkList: talkList} = storeToRefs(LoveTalkStore);

// let perId = "ftrfasdf";
// let lastId = 2;

interface TalkInter {
  id: string,
  title: string,
}

// 方法

// // 挂载时自动加载三条请求
// onMounted(() => {
//   for (let i = 0; i < 3; i++){
//     getTalk();
//   }
// });

function changString (num: number){
  if (num < 10){
    return '0' + num.toString();
  }
  return num.toString();
}

function getTalk(){
  LoveTalkStore.getLoveTalk();
}

// async function getTalk(){
//   // 这里直接就是连续解构两次，先解构出 data  再从data中解构出content
//   // 解构出content之后又通过 :title 将content重命名为了title
//   let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
//   let currentTalk: TalkInter = {
//     id: perId + changString(lastId++),
//     // 本来这里要写成 title: title  不过在ES6中 可以简写了 直接简写为 title
//     title,
//   }
//   LoveTalkStore.TalkList.push(currentTalk);
// }
</script>

<template>
  <div class="talk">
    <button @click="getTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk?.id">{{talk?.title}}</li>
    </ul>
  </div>

</template>

<style scoped>
.talk{
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

</style>