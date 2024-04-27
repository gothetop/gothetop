<script setup lang="ts" name="car">
import {reactive, ref, toRef, toRefs} from 'vue'

let Car = reactive({
  name: "奔驰",
  price: 100,
});

let {name, price} = toRefs(Car);
let name1 = toRef(Car, 'name');

function changePrice(): void {
  price.value += 10;
}

function changeName() {
  name1.value = "奔驰tigood";
}

function changeCar() {
  Object.assign(Car, {name: "哈哈哈", price: 121});
}

</script>

<template>
  <div class="car">
    <h1>这是一辆{{Car.name}}, 它价值{{Car.price}}</h1>
    <button @click="changePrice">包涨价的牢底</button>
    <button @click="changeCar">换一辆车</button>
    <button @click="changeName">换个名字</button>
  </div>
</template>

<style scoped>
.car {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.car button {
  cursor: pointer;
  margin: 0 7px;
  border-radius: 10px;
  background-color: aquamarine;
  border: 1px solid aqua;
  transition: transform 0.5s ease-in-out; /* 添加 transform 过渡效果 */
  transform: scale(1);
}

.car button:hover {
  background-color: aqua;
  transform: scale(1.1);
  color: white;
}
</style>