<template>
  <main>
    <h1>Hello Host</h1>
    <div>
      count: <span style="width: 10px">{{ count }}</span>
    </div>
    <mp-button @click="handleClick">Click me</mp-button>
    <hr />
    <mp-flex mt="10px" justify="center">
      <RemoteButton />
    </mp-flex>
  </main>
</template>
<script setup>
import { MpButton, MpFlex, css } from "@mekari/pixel3";
import { ref, onMounted } from "vue";
const count = ref(0);

onMounted(() => {
  console.log("HOST/onMounted");
});

const handleClick = () => {
  count.value++;
};
</script>
