<script setup lang="ts" name="Count">
import {ref} from 'vue';
//引入
import {useConutStore} from '@/store/Count';
import { storeToRefs } from 'pinia';

const countStore = useConutStore();
// 将数据单独解构分离出来  不过直接解出来数据会失去响应式，所以这里需要将这个解构出来的数据转换为响应式
// 可能首先会想到 toRefs，当然它可以实现这个功能，不过他会将这个对象中的所有属性和方法都转换为ref类型，有点浪费资源
// 这里引入一个pinia的东西  storeToRefs 这个东西仅仅转换 我们的共享数据，非常专一
const {sum, bigSum, bigbigSum} = storeToRefs(countStore);
let n = ref<number>(1);  // 用户选择的数字

// 方法
function add() {
  // 三种修改这个共享的值的方法

  // 第一种 直接修改
  // countStore.sum += n.value;

  // 第二种 批量修改  $patch
  // countStore.$patch({
  //   sum: 1,
  //   // .....
  //   // 在这里面可以写多个变量的修改，这些修改都会被看作一次修改完成了
  // });
  // 第三种 action 更加灵活的修改，可以做一些逻辑判断，有点像类的私有属性的修改，要通过一个方法
  countStore.add(n.value);  // 将修改的值传入
}

function minus() {
  // 这是第一种修改
  // countStore.sum -= n.value;

  // 第三种修改 使用action
  countStore.sub(n.value);
}
</script>

<template>
  <div class="count">
    <h2>当前求和为: {{sum}}    10倍：{{bigSum}}     100倍：{{bigbigSum}}</h2>
    <select v-model.number="n">  <!-- .number 尽可能将收到的数据转换为数字 -->
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>

</template>

<style scoped>
.count{
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select, button{
  margin: 0 5px;
  height: 25px;
}

</style>