<template>
  <div class="my-16">
    <h1 class="text-3xl md:text-4xl !font-vp700 text-center my-12">
      Download “Selfleadership in tijden van turbulentie”
    </h1>
    <form
      class="max-w-3xl px-2 mx-auto !font-vp600 !font-bold flex flex-col gap-6 text-xl"
    >
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
      <!-- email and Mobiel telefoonnummer* -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
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
          <label for="mobiel" class="block mb-2">
            Mobiel telefoonnummer
            <span class="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="mobiel"
            id="mobiel"
            class="w-full p-2 text-black bg-white border-2 rounded-md border-theme-blue"
          />
        </div>
      </div>
      <!-- BEDRIJF* -->
      <div>
        <label for="bedrijf" class="block mb-2">
          Bedrijf
          <span class="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="bedrijf"
          id="bedrijf"
          class="w-full p-2 text-black bg-white border-2 rounded-md border-theme-blue"
        />
      </div>
      <!-- Persona* -->
      <div>
        <label for="persona" class="block mb-2">
          Persona
          <span class="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="persona"
          id="persona"
          class="w-full p-2 text-black bg-white border-2 rounded-md border-theme-blue"
        />
      </div>
      <!-- Schrijf me in voor de nieuwsbrief checkbox -->
      <div class="flex items-center gap-2">
        <input
          type="checkbox"
          name="nieuwsbrief"
          id="nieuwsbrief"
          class="w-5 h-5"
        />
        <label for="nieuwsbrief" class="text-xl">
          Schrijf me in voor de nieuwsbrief
        </label>
      </div>
      <!-- Submit button -->
      <div class="flex justify-center mt-8">
        <BtnWithLogo
          btn-text="Download"
          logo="bxs:download"
          type="submit"
          class="px-8 py-2 text-white bg-theme-blue rounded-full !font-vp700"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
