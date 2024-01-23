<template>
  <component :is="as" class="max-w-[1440px] mx-auto px-2">
    <slot />
    
  </component>
</template>

<script lang="ts" setup>
  defineProps({
    as: {
      type: String,
      default: 'section'
    }
  })
</script>