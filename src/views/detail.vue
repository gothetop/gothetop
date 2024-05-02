<script setup lang="ts">
import {useRoute} from "vue-router";
import {toRefs} from "vue";

const route = useRoute();
let {query} = toRefs(route);
</script>

<template>
<ul class="detail-ul">
  <li>编号：{{query.id}}</li>
  <li>标题：{{query.title}}</li>
  <li>内容：{{query.content}}</li>
</ul>
</template>

<style scoped>
.detail-ul li{
  margin-bottom: 10px;
}
</style>