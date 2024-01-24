<template>
  <div class="container mx-auto my-12">
    <div class="grid w-full grid-cols-1 lg:grid-cols-2">
      <div class="">
        <NuxtImg
          src="/images/inspiratie.png"
          alt="inspiratie"
          width="100%"
          height="100%"
          class="w-full h-full"
        />
      </div>
      <div class="flex flex-col text-white bg-theme-blue">
        <div class="flex flex-col h-full gap-6 px-6 py-4 justify-evenly">
          <h2
            class="font-vpc900 text-[#7FE0FA] text-3xl lg:text-5xl text-center"
          >
            Inspiratiekaarten voor werkende mensen
          </h2>
          <p class="text-xl font-v400">
            Ontdek een
            <span class="text-theme-yellow">diepere betekenis</span> in je werk
            met onze set van 70 kaarten, speciaal ontworpen voor professionals
            die op zoek zijn naar zingeving. Deze kaarten bieden een uitnodiging
            tot diepgaande
            <span class="text-theme-yellow">zelfreflectie</span> met behulp van
            uitdagende vragen. Wat zijn jouw ultieme professionele aspiraties?
            Welke
            <span class="text-theme-yellow">professionele voetafdruk</span> wil
            je nalaten? En welke uitnodigingen liggen er voor jou in de huidige
            situatie? Of je nu individueel aan de slag wilt gaan, met een coach
            of in teamverband, de mogelijkheden zijn divers. Voor een
            uitgebreide handleiding klik hier.
          </p>
          <div
            class="flex flex-row flex-wrap items-center justify-center gap-4"
          >
            <div class="">
              <BtnWithLogo
                btn-text="Download"
                href="/download-form"
                logo="system-uicons:download"
                color="default"
                class="lg:hidden"
              />
              <BtnWithLogo
                btn-text="Download de gebruiksaanwijzing"
                href="/download-form"
                logo="system-uicons:download"
                color="default"
                class="hidden lg:flex"
              />
            </div>
            <BtnWithLogo
              btn-text="BESTEL NU"
              href="/"
              logo="bitcoin-icons:cart-outline"
              color="invert"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto my-12">
    <h2
      class="relative max-w-max mx-auto text-3xl uppercase !font-vpc900 md:text-4xl text-center"
    >
      een vraag stellen
      <span
        class="absolute left-0 w-full h-3 -z-10 bottom-2 bg-theme-yellow"
      ></span>
    </h2>
    <div>
      <form
        class="flex flex-col max-w-3xl gap-6 px-2 mx-auto mt-8 !font-vp600 text-xl"
      >
        <!-- (voornaam, familienaam) ->half width, emailaddress->full width, berich->textarea, Ik ben,
          checkbox, submit button
        -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label for="voornaam" class="block mb-2">
              Voornaam
              <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="voornaam"
              id="voornaam"
              class="w-full p-2 text-black bg-white border-2 rounded-md border-theme-blue"
            />
          </div>
          <div>
            <label for="familienaam" class="block mb-2">
              Familienaam
              <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="familienaam"
              id="familienaam"
              class="w-full p-2 text-black bg-white border-2 rounded-md border-theme-blue"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block mb-2">
            Email
            <span class="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="w-full p-2 text-black bg-white border-2 rounded-md border-theme-blue"
          />
        </div>
        <div>
          <label for="bericht" class="block mb-2">
            Bericht
            <span class="text-red-600">*</span>
          </label>
          <textarea
            name="bericht"
            id="bericht"
            class="w-full p-2 text-black bg-white border-2 rounded-md border-theme-blue"
          ></textarea>
        </div>
        <!-- ikben as input text -->
        <div>
          <label for="ikben" class="block mb-2">
            Ik ben
            <span class="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="ikben"
            id="ikben"
            class="w-full p-2 text-black bg-white border-2 rounded-md border-theme-blue"
          />
        </div>
        <!-- checkbox -->
        <div class="flex items-center">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            class="w-4 h-4 mr-2 border-2 rounded-md text-theme-blue border-theme-blue"
          />
          <label for="checkbox" class="text-xl !font-vp600">
            Schrijf me in voor de nieuwsbrief
            <a href="/" class="text-theme-blue"> privacy policy </a>
          </label>
        </div>
        <!-- submit button -->
        <div class="flex justify-center">
          <BtnWithLogo
            btn-text="VERZENDEN"
            logo="material-symbols:outgoing-mail"
            type="submit"
            class="px-4 py-2 text-xl text-white bg-theme-blue rounded-md !font-vp600 my-6"
          >
            Verstuur
          </BtnWithLogo>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
