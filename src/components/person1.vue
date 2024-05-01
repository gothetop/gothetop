<script setup lang="ts" name="Person1">
import {type PersonInter, type Persons} from "@/types";
import {withDefaults} from 'vue';


// 数据
let person: PersonInter = {id: "adfadfa", name: "张三", age: 60};

// 接受a
// defineProps(['a']);

// 接受a并将a保存起来
// let x = defineProps(['a']);

// 只接受list
// defineProps(['list'])

// 这个defineProps是可以传泛型的，来指定子组件接受的数据类型   限制类型
//let x = defineProps<{list: Persons}>(); // 返回这个x是一个对象
//console.log(x.list);

// 接受list + 限制类型 + 限制必要性 + 指定默认值
// 这个list后面的 ？ 就是设置了必要性，这个数据可传可不传
// withDefaults是设置了一个默认值，如果父组件没有传一个值过来，那就用默认值
// defineProps 不用引入可以直接用，define是宏函数
withDefaults(defineProps<{list?: Persons}>(), {
  // 这里list不能直接接受一个数组，要是一个函数的返回值，这个返回值写上这个数组
  list: () => [{
    id: "afadfadfa01",
    name: "康师傅",
    age: 18
  }]
})




</script>

<template>
  <div class="person1">
    <ul>
      <!-- v-for很健壮，如果没有给他传值，它会知道然后不会执行工作，不会报错 -->
      <li v-for="(item, index) in list" :key="item.id">{{index}} -- {{item.id}} -- {{item.name}} -- {{item.age}}</li>
    </ul>
  </div>

</template>

<style scoped>
.person1 {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.person1 button {
  cursor: pointer;
  margin: 0 7px;
  border-radius: 10px;
  background-color: aquamarine;
  border: 1px solid aqua;
  transition: transform 0.5s ease-in-out; /* 添加 transform 过渡效果 */
  transform: scale(1);
}

.person1 button:hover {
  background-color: aqua;
  transform: scale(1.1);
  color: white;
}
</style>