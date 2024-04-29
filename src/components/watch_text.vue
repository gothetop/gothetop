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
});
let Person1 = reactive({
  name: "tigoo",
  age: 18,
  car: {
    c1: "宝马",
    c2: "奥迪",
  }
});

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

function changeName1() {
  Person1.name += "~";
}

function changeAge1() {
  Person1.age += 1;
}

function changeCar1(){
  Person1.car.c1 += "~";
}

function changeCar2() {
  Person1.car.c2 += "~";
}

function  changeCarall(){
  Person1.car = {c1: "雅迪", c2: "比亚迪"};
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

// 监视reactive和ref定义的对象类型的某个基本属性
watch(() => Person1.name, (newVal, oldVal) => {
  console.log("Person1改变了");
});

// 监视reactive和ref定义的对象类型的某个对象属性
// 这里有几种情况，如果这里监视的对象直接写 Person1.car 他只能监视到car里面的两个属性的变化，不能监视到car整体变化
// 如果你写成 () => Person1.car 这里就只能监视到整个car的变化，而监视不到Car内部两个属性的变化
// 如果想都监视到，就再写 () => Person1.car 的同时，再后面加上 {deep: true}
watch(() => Person1.car, (newVal, oldVal) => {
  console.log("Personcar改变了");
}, {deep: true});

// 情况五 监视上述的多个数据
// 数组中每个项的书写方法参考前四种，第五种就是提供了一个数组，可以多监视几个不同类型或者相同类型的属性
watch([() => Person1.name, () => Person1.car], (newValue, oldValue) => {
  console.log("名字或者车变化了");
}, {deep: true});

watch(() => Person1.age, (newVal, oldVal) => {
  console.log("年龄变化了  " + newVal + "->" + oldVal);
})

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
  <hr/>
  <h1>情况四：监视【reactive】或者【ref】定义的【对象类型】数据的某个属性</h1>
  <h1>姓名：{{Person1.name}}</h1>
  <h1>年龄：{{Person1.age}}</h1>
  <h1>车：{{Person1.car.c1}}, {{Person1.car.c2}}</h1>
  <button @click="changeName1">修改名字</button>
  <button @click="changeAge1">修改年龄</button>
  <button @click="changeCar1">修改第一辆车</button>
  <button @click="changeCar2">修改第二辆车</button>
  <button @click="changeCarall">修改所有车</button>
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