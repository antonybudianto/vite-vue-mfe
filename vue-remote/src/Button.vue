<template>
  <div class="mf-remote1">
    <h2>Remote Button</h2>
    <button @click="handleClick">Click me times: {{ count }}</button>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const count = ref(0);

const handleClick = () => {
  count.value++;
};
onMounted(() => {
  console.log("remote:onMounted log");
});
</script>

<style scoped>
.mf-remote1 {
  background-color: palevioletred;
  padding: 2px 10px;
}
</style>
