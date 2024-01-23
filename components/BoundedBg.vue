<template>
  <component :is="as" :class="bg">
    <div class="max-w-[1440px] mx-auto px-2">
      <slot />
    </div>
  </component>
</template>

<script lang="ts" setup>
defineProps({
  as: {
    type: String,
    default: "section",
  },
  bg: {
    type: String,
    default: "bg-theme-blue",
  },
});
</script>
