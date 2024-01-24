<template>
  <div class="relative w-full min-h-screen">
    <div
      class="absolute text-white z-40 transform -translate-x-[20%] top-[20%] left-[20%] -translate-y-[20%]"
    >
      <h1 class="heading-hero font-v400">Welkom bij metamorPHa</h1>
      <p class="text-xl text-white">Neem voorsprong op het verleden</p>
      <NuxtLink
        type="button"
        href="/"
        class="rounded-full inline-block px-4 py-2 text-theme-blue bg-white !font-v400 mt-16"
        >Ons verhaal</NuxtLink
      >
    </div>
    <video
      autoplay
      muted
      loop
      poster="/images/bg-video.png"
      id="myVideo"
      class="object-cover w-full max-h-screen min-h-screen"
    >
      <source src="/video.mp4" type="video/mp4" class="w-full" />
    </video>
    <p
      class="absolute text-white !font-vpc700 bottom-[10%] md:bottom-[15%] block mx-auto text-center w-full text-3xl uppercase px-16"
    >
      Voor organisaties en mensen in transitie en transformatie
    </p>
  </div>
  <BoundedBg class="py-8 my-8">
    <div class="max-w-4xl px-2 mx-auto">
      <h2
        class="my-2 text-2xl md:text-3xl text-theme-yellow !font-vpc700 uppercase leading-relaxed"
      >
        Welkom bij Metamorpha, jouw gids voor een wereld in verandering.
      </h2>
      <div class="flex flex-col gap-8 mt-6 text-white !font-vpc300 text-xl">
        <p>
          Metamorpha staat symbool voor de grote veranderingen van vandaag, van
          wereldwijde verschuivingen tot de dynamiek binnen jouw organisatie en
          de transities in jouw leven. Wij nodigen je uit om deze veranderingen
          niet slechts te ondergaan, maar er zelf vorm aan te geven.
        </p>
        <p>
          Deze huidige tijd nodigt je uit tot een frisse manier van kijken en de
          turbulentie in jouw voordeel gebruiken, voor de groei van jouw
          organisatie en voor jouw persoonlijke ontwikkeling.
        </p>
        <p>
          Staat jouw organisatie voor complexe vraagstukken en ben je
          vastbesloten om ze aan te pakken? Wil je jouw professionele voetafdruk
          vergroten? Voel je de roep om als individu betekenis te geven aan de
          nieuwe wereld? Zet een eerste stap en laten we samen bouwen aan een
          toekomst vol mogelijkheden.
        </p>
      </div>
    </div>
  </BoundedBg>
  <Bounded
    class="grid !max-w-6xl grid-cols-1 gap-8 mx-auto my-16 md:grid-cols-3 place-items-center"
  >
    <Card
      class="bg-theme-blue"
      title="Organisaties in verandering"
      content="Metamorpha helpt organisaties om de complexiteit van de huidige tijd te omarmen en te benutten. Wij begeleiden je bij het ontwikkelen van een strategie die past bij de nieuwe wereld en bij het creëren van een organisatiecultuur die wendbaar is en waarin mensen floreren."
      link="/"
      linkText="MEER INFORMATIE"
      image="/images/card1.png"
      icon="ep:info-filled"
    />
    <Card
      class="bg-theme-blue"
      title="levens in transitie"
      content="Metamorpha helpt organisaties om de complexiteit van de huidige tijd te omarmen en te benutten. Wij begeleiden je bij het ontwikkelen van een strategie die past bij de nieuwe wereld en bij het creëren van een organisatiecultuur die wendbaar is en waarin mensen floreren."
      link="/"
      linkText="MEER INFORMATIE"
      image="/images/card2.png"
      icon="ep:info-filled"
    />
    <Card
      class="bg-theme-blue"
      title="Inspiratiekaarten"
      content="Metamorpha helpt organisaties om de complexiteit van de huidige tijd te omarmen en te benutten. Wij begeleiden je bij het ontwikkelen van een strategie die past bij de nieuwe wereld en bij het creëren van een organisatiecultuur die wendbaar is en waarin mensen floreren."
      link="/"
      linkText="BESTEL NU"
      image="/images/book.png"
      icon="bitcoin-icons:cart-outline"
    />
  </Bounded>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "Homepage | Metamorpha",
});
</script>
<style scoped>
.heading-hero {
  all: unset;
  font-size: 3rem;
  color: black;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  text-transform: uppercase;
}
</style>
