<template>
  <div>
    <Bounded>
      <h1
        class="relative uppercase text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-vpc900 max-w-max mx-auto"
      >
        Levens in transitie
        <span
          class="absolute left-0 w-full h-2 sm:h-4 lg:h-6 -z-10 bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-7 bg-theme-yellow"
        ></span>
      </h1>
      <ImageCard
        src="/images/section-1.png"
        alt="Leven in transitie"
        width="100%"
        height="auto"
        direction="ltr"
      >
        <p>
          Als een avontuur buiten je comfortzone je aanspreekt, dan is
          <span class="text-theme-yellow">Core-relation</span> voor jou. Het is
          jouw reis naar de diepere betekenis van het leven en het potentieel
          dat in jou aanwezig is.
        </p>
        <p>
          Tijdens
          <span class="text-theme-yellow"> Core-relation </span> ontvouwt zich
          een nieuwe relatie met jezelf, vergelijkbaar met de transformatie naar
          vlinder. De warme aandacht van de begeleider van Metamorpha biedt je
          veiligheid en de ruimte om verder te ontpoppen.
        </p>
        <div>
          <h2 class="my-2 text-xl font-bold text-theme-yellow">
            Het traject bestaat uit vier etappes:
          </h2>
          <ul class="card__list">
            <li>Toegang</li>
            <li>Oorsprong</li>
            <li>Verbinding</li>
            <li>Stroming</li>
          </ul>
        </div>
      </ImageCard>

      <p class="quote">“Leef je volle leven.”</p>
      <ImageCard
        src="/images/section-2.png"
        alt="Leven in transitie"
        height="550px"
        width="620px"
        direction="rtl"
      >
        <p>
          Dit programma bestaat uit twaalf 1-op-1 gesprekken en stimulerende
          opdrachten voor thuis. Met een interval van veertien dagen doorloop
          je, over een periode van 6 maanden, de verschillende stappen.
        </p>
        <h2 class="my-2 text-xl font-bold text-theme-yellow">
          Wat kun je verwachten?
        </h2>
        <div>
          <ul class="list-disc list-inside">
            <li>
              Tijdens de fase
              <span class="text-theme-yellow">toegang</span> vorm je een
              diepgaande verbinding met je sterke punten en energiebronnen. Je
              krijgt toegang tot je hart en je buikgevoel die, naast je hoofd,
              centra van kennis en wijsheid zijn.
            </li>
            <li>
              Tijdens het onderzoek van je levensloop
              <span class="text-theme-yellow"> (oorsprong)</span> krijg je
              inzicht in je gezin van herkomst en de generaties voor jou. Hoe
              kan je toegang toe krijgen tot hun talenten en sterke punten? Zijn
              er ook niet-helpende stukken die je los kan laten?
            </li>
            <li>
              Vervolgens ga je na of je in
              <span class="text-theme-yellow">verbinding</span> bent met het
              leven zelf. Zie je nog een afstand tussen je huidige realiteit en
              de moeiteloze stroming van waaruit je volop kunt leven? Je gaat in
              op de keuze tussen veilig of onveilig, zelfvoorzienend of
              behoeftig, zonder inspanning of hard werken, onderscheid maken of
              blind varen, overvloed of schaarste.
            </li>
            <li>
              In het vierde deel,
              <span class="text-theme-yellow">stroming</span>, ga je concreet
              aan de slag om een nieuwe project, visie of situatie te
              realiseren. Stap voor stap onderzoek je je intentie, ontwikkel je
              innerlijke kracht en zet je concrete stappen naar een duurzaam
              resultaat.
            </li>
          </ul>
          <BtnWithLogo
            btn-text="Boek een kennismaking"
            href="/contact"
            class="mx-auto mt-4"
            logo="fluent-emoji-high-contrast:handshake"
            color="invert"
          />
        </div>
      </ImageCard>
    </Bounded>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Aanbod | Metamorpha",
});
</script>

<style lang="scss" scoped>
.quote {
  font-size: 2.2rem;
  text-align: center;
  margin: 2rem 0;
}

.card__list {
  list-style-type: disc !important;
  margin-left: 2rem;
  margin-top: 0.7rem;
}
</style>
