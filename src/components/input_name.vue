<script setup lang="ts" name="InputName">
import {computed, ref} from "vue";

let first_name = ref("张");
let last_name = ref("三");

// 这样的computed是只读的，不能修改
// let full_name = computed(() => {
//   return first_name.value.slice(0, 1).toUpperCase() + first_name.value.slice(1) + '-' + last_name.value;
// });

// computed是有缓存的，如果多次调用同一个计算，只会进行一次计算
// 而使用函数的话，你调用几次，他就会执行几次
// 这样的computed是可读可写的
let full_name = computed({
  get(){
    return first_name.value + "-" + last_name.value;
    // return first_name.value.slice(0, 1).toUpperCase() + first_name.value.slice(1) + '-' + last_name.value
  },
  set(val){
    const [str1, str2] = val.split('-');
    first_name.value = str1;
    last_name.value = str2;
    // 这里由于first_name和last_name已经被修改，全名会跟着被计算出来，所以就不用手动修改全名了、
  }
});

function changeName(){
  full_name.value = "ti-good";
}


</script>

<template>
  <div class="inputname">
    姓：<input type="text" v-model='first_name'> <br>
    名：<input type="text" v-model="last_name"> <br>
    全名：<span>{{full_name}}</span>
    <button @click="changeName">修改全名</button>
  </div>

</template>

<style scoped>
.inputname {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.inputname button {
  cursor: pointer;
  margin: 0 7px;
  border-radius: 10px;
  background-color: aquamarine;
  border: 1px solid aqua;
  transition: transform 0.5s ease-in-out; /* 添加 transform 过渡效果 */
  transform: scale(1);
}

.inputname button:hover{
  background-color: aqua;
  transform: scale(1.1);
  color: white;
}
</style>