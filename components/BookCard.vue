<template>
  <div class="flex flex-col gap-4 text-center text-white">
    <NuxtImg :src="image" alt="SHIFTMAKERS BOOK 1" />
    <h2 class="!font-vp600 max-w-[180px] mx-auto text-center">{{ title }}</h2>
    <BtnWithLogo :btn-text="btnLabel" :href="btnLink" class="mx-auto" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  image: string;
  title: string;
  btnLabel: string;
  btnLink: string;
}>();
</script>

<style></style>
