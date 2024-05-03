<script setup lang="ts">
defineProps(['id', 'title', 'content']);
</script>

<template>
<ul class="detail-ul">
  <li>编号：{{id}}</li>
  <li>标题：{{title}}</li>
  <li>内容：{{content}}</li>
</ul>
</template>

<style scoped>
.detail-ul li{
  margin-bottom: 10px;
}
</style>