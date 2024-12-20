<template>
  <main>
    <h1>Hello Host</h1>
    <div>
      count: <span>{{ count }}</span> &nbsp;
      <button type="button" @click="handleClick">Click me</button>
    </div>
    <div></div>
    <div>
      <RemoteButton />
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted } from "vue";
const count = ref(0);

onMounted(() => {
  console.log("HOST/onMounted");
});

const handleClick = () => {
  count.value++;
};
</script>
