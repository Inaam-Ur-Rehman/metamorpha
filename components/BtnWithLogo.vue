<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    btnText: string;
    color?: "default" | "invert";
    href?: string;
    logo?: string;
  }>(),
  {
    color: "default",
    href: "/",
    logo: "solar:phone-bold",
  }
);
</script>

<template>
  <NuxtLink
    :href="props.href"
    class="flex items-center gap-4 py-2 pl-3 pr-2 font-bold uppercase rounded-full whitespace-nowrap hover:scale-105 max-w-max"
    :class="
      props.color === 'invert'
        ? 'bg-white text-theme-blue'
        : 'bg-theme-blue text-white border-[1px] border-white'
    "
  >
    <span class="text-normal !font-vp600">{{ props.btnText }}</span>
    <span
      :class="props?.color === 'invert' ? 'bg-theme-blue' : 'bg-white'"
      class="flex items-center justify-center w-8 h-8 p-1 rounded-full"
    >
      <Icon
        :name="logo"
        :color="props.color === 'invert' ? 'white' : 'black'"
        size="30"
      />
    </span>
  </NuxtLink>
</template>
