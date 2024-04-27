<script setup lang="ts" name="Games">
import {reactive} from "vue"

let games_list = reactive([
  {game_id: 123123, game_name: "王者荣耀"},
  {game_id: 123124, game_name: "原神启动"},
  {game_id: 123125, game_name: "金铲铲启动"},
]);

// reactive是深层次的，不管你藏得多么的深都可以找到的
let a = reactive({
  b: {
    c: {
      neck_name: "tigood"
    }
  }
})

function changeGamesName() {
  if (games_list[0].game_name === "王者荣耀")
    games_list[0].game_name = "王者荣耀启动";
  else games_list[0].game_name = "王者荣耀";
}

function changeC() {
  if (a.b.c.neck_name === "tigood")
    a.b.c.neck_name = "刘时佳";
  else a.b.c.neck_name = "tigood";
}

</script>

<template>
  <div class="games">
    <h1>游戏列表：</h1>
    <ul>
      <li v-for="item in games_list" :key="item.game_id"><a href="https://github.com/tigood">{{item.game_name}}</a></li>
    </ul>
    <button @click="changeGamesName">启动王者荣耀</button>
    <h1>游戏id： {{a.b.c.neck_name}}</h1>
    <button @click="changeC">修改id</button>
  </div>

</template>

<style scoped>
.games {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.games button {
  cursor: pointer;
  margin: 0 7px;
  border-radius: 10px;
  background-color: aquamarine;
  border: 1px solid aqua;
  transition: transform 0.5s ease-in-out; /* 添加 transform 过渡效果 */
  transform: scale(1);
}

.games button:hover{
  background-color: aqua;
  transform: scale(1.1);
  color: white;
}
</style>