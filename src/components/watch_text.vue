<script setup lang="ts" name="WatchText">
import {ref, watch, reactive} from "vue";

// 数据
let sum = ref(0);
let Person = ref({
  name: "张三",
  age: 19
});
let Dog = reactive({
  name: "孙一楠",
  age: 3
})

// 方法
function changeSum() {
  sum.value += 1;
}

function changeName() {
  Person.value.name += "~";
}

function changeAge() {
  Person.value.age += 1;
}

function changePerson() {
  Person.value = {
    name: "李四",
    age: 19
  }
}

function changeDogName () {
  Dog.name += "~";
}

function changeDogAge() {
  Dog.age += 1;
}

function  changeDog() {
  Object.assign(Dog, {name: "大黄", age: 3});
}
// 监视ref类型的数据
const stopwatch = watch(sum, (newVal, oldVal) => {  // 这里会有两个参数，一个代表旧的值，一个代表变化之后新的值
  console.log("sum加1  " + oldVal + "->" + newVal);
  if (newVal >= 10) {
    stopwatch();  // 该函数会终止这个监听，当执行该行函数后，这个监视就会被停止
  }
})

// 监视ref定义的对象类型的数据
// watch的第一个参数是：被监视的数据
// watch的第二个参数是：监视的回调函数
// watch的第三个参数是：配置对象 (deep、immediate等等、)  这个immediate其实类似于 do...while  先执行一次回调函数再监视
const stopwatch_1 = watch(Person, (newVal, oldValue) => {   // 在某些情况下我们只需要一个新的值 newVal
  console.log("Person改变了！" + newVal + "->" + oldValue);
},{deep: true});  // 这个deep是 是否开启深度监视
                          // 如果不开启深度监视，它监视不到这个对象属性的改变，只有这个对象的地址改变时才能监视的到
                          // 开启深度监视之后，再对象属性改变的时候也会触发监视效果

// 监视reactive定义的对象类型的数据
// reactive默认自动开始了深度检测，所以不需要开启这个deep
// 注意reactive改变不会改变对象的地址
const stopwatch_2 = watch(Dog, (newVal, oldVal) => {
  console.log("Dog改变了！" + newVal + "->" + oldVal);
});

</script>

<template>
<div class="watch_text">
  <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
  <h1>sum：{{sum}}</h1>
  <button @click="changeSum">点我加1</button>
  <hr/>
  <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
  <h1>姓名：{{Person.name}}</h1>
  <h1>年龄：{{Person.age}}</h1>
  <button @click='changeName'>修改姓名</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="changePerson">修改Person</button>
  <hr/>
  <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
  <h1>姓名：{{Dog.name}}</h1>
  <h1>年龄：{{Dog.age}}</h1>
  <button @click="changeDogName">修改名字</button>
  <button @click="changeDogAge">修改年龄</button>
  <button @click="changeDog">修改狗</button>
</div>
</template>

<style scoped>
.watch_text {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.watch_text button {
  cursor: pointer;
  margin: 0 7px;
  border-radius: 10px;
  background-color: aquamarine;
  border: 1px solid aqua;
  transition: transform 0.5s ease-in-out; /* 添加 transform 过渡效果 */
  transform: scale(1);
}

.watch_text button:hover{
  background-color: aqua;
  transform: scale(1.1);
  color: white;
}
</style>