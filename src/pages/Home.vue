<template>
  <n-collapse :expanded-names="['1', '2', '3', '4', '5', '6']">
    <n-collapse-item title="Unocss presetUno :(Tailwind CSS) :" name="1">
      <div class="w-screen fcc">Home</div>
    </n-collapse-item>
    <n-collapse-item title="UnoCss icon :" name="2">
      <div class="i-ic-baseline-backspace text-3xl bg-green-500" />
      <div class="i-ic:baseline-bolt text-3xl bg-green-500" />
    </n-collapse-item>
    <n-collapse-item title="UnoCss presetAttributify:" name="3">
      <div m-px-2 white-black>Home</div>
    </n-collapse-item>
    <n-collapse-item title="pinia:" name="4">
      {{ appStore.count }}
      <n-button type="success" @click="addCount"> addCount </n-button>
    </n-collapse-item>
    <n-collapse-item title="vue-router:" name="5">
      <n-button type="success" @click="navTo"> navTo About </n-button>
    </n-collapse-item>
    <n-collapse-item title="vueUse:" name="6">
      <useClipboard />
    </n-collapse-item>
  </n-collapse>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/index";
import { useRouter } from "vue-router";

const appStore = useAppStore();
const router = useRouter();

const addCount = () => {
  appStore.addCount();
};
const navTo = () => {
  router.push("/about");
};
</script>

<style scoped>
</style>