<template>
  <div :class="direction === 'rtl' ? 'rtl' : 'ltr'" class="card__wrapper">
    <NuxtImg
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      class="card__img"
    />
    <div class="card__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  src: String,
  alt: String,
  width: String,
  height: String,
  direction: String,
});
</script>

<style lang="scss" scoped>
.rtl {
  grid-template-areas: "content content image";
}
.ltr {
  grid-template-areas: "image content content";
}
.card__wrapper {
  display: grid;

  background-color: $theme-blue;
  color: white;
  font-size: 1rem;
  max-height: max-content;
  gap: 2rem;
  margin: 1rem auto;

  font-family: Verdana, sans-serif;
  font-weight: 700;

  @media (max-width: $md) {
    grid-template-areas: "image" "content";
    row-gap: 1rem;
  }
  .card__img {
    grid-area: image;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .card__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
    height: 100%;
    grid-area: content;
    padding: 1rem;
  }
}
</style>
