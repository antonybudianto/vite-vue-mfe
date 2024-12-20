<template>
  <div>
    <RemoteContactMFE />
  </div>
</template>
<script setup lang="ts">
import { css } from "@mekari/pixel3";
import { onMounted } from "vue";

onMounted(() => {
  console.log("HOST/onMounted contact");
});
</script>
