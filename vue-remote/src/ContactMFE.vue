<template>
  <div class="mf-remote1">
    <h2>Remote Contact MFE</h2>
    <mp-button variant="secondary" @click="handleClick">
      Click me times: {{ count }}
    </mp-button>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { MpButton } from "@mekari/pixel3";

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
