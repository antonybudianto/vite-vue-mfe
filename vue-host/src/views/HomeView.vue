<template>
  <div
    :class="
      css({
        px: 5,
        py: 15
      })
    "
  >
    <!-- <RemoteButton /> -->

    Dashboard view
  </div>
</template>
<script setup lang="ts">
import { css } from "@mekari/pixel3";
import { onMounted } from "vue";

onMounted(() => {
  console.log("HOST/onMounted dashboard");
});
</script>
