<template>
  <div
    class="max-w-[350px] !font-vp300 text-base h-full flex flex-col justify-between gap-4 hover:scale-[101%] duration-75 cursor-pointer border-none outline-none focus:outline-none card"
  >
    <NuxtImg
      :src="image"
      :alt="title"
      :width="400"
      :height="300"
      class="w-full"
    />
    <div class="flex flex-col gap-2 px-4 pb-4 text-center">
      <h2 class="text-xl font-bold text-theme-yellow !font-v700 uppercase">
        {{ title }}
      </h2>
      <p class="text-white">{{ content }}</p>
      <BtnWithLogo
        :btnText="linkText"
        color="invert"
        class="block mx-auto my-2"
        :logo="icon"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
enum CardType {
  simple = "simple",
  fancy = "fancy",
}
defineProps({
  bg: {
    type: String,
    default: "bg-theme-blue",
  },
  type: {
    type: String,
    default: CardType.simple,
  },
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  linkText: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<style></style>
