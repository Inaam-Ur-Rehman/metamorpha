<template>
  <div
    class="py-12 !font-v400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-start"
  >
    <div>
      <NuxtImg
        format="webp"
        :placeholder="
          img(`/logo.svg`, { height: 30, format: 'png', blur: 2, q: 30 })
        "
        src="/logo.svg"
        alt="Logo"
        width="240"
        quality="100"
      />
      <p class="flex flex-col mt-4">
        <span>Pastoor Dergentlaan 216</span>
        <span>3200 Aarschot</span>
        <span>0475/20.84.60</span>
      </p>
    </div>
    <div>
      <h2 class="font-bold !font-vp400 text-theme-blue">Handige links</h2>
      <div class="flex flex-col gap-2 mt-4">
        <NuxtLink href="/" class="block">Bedrijfsinformatie</NuxtLink>
        <NuxtLink href="/" class="block">KMO-portefeuille</NuxtLink>
        <NuxtLink href="/" class="block">Wettelijke informatie</NuxtLink>
        <NuxtLink href="mailto:Bart@Metamorpha.be" class="block">
          <span class="flex items-center gap-2">
            <Icon name="clarity:email-solid" size="20" />
            Bart@Metamorpha.be
          </span>
        </NuxtLink>
        <NuxtLink href="/" class="block"
          >Foto’s: www.сhristageeroms.com</NuxtLink
        >
        <NuxtLink
          href="https://www.instagram.com/Christa_Geeroms_photo"
          class="block"
        >
          <span class="flex items-center gap-2">
            <Icon name="ri:instagram-fill" size="20" />
            @Christa_Geeroms_photo
          </span>
        </NuxtLink>
      </div>
    </div>
    <div>
      <h2 class="font-bold !font-vp400 text-theme-blue">Informatie</h2>
      <div class="flex flex-col gap-2 mt-4">
        <NuxtLink href="/" class="block">Home</NuxtLink>
        <NuxtLink href="/" class="block">Agenda</NuxtLink>
        <NuxtLink href="/" class="block">Getuigenissen</NuxtLink>
        <NuxtLink href="/" class="block">Inspiratie</NuxtLink>
        <NuxtLink href="/" class="block">Team</NuxtLink>
      </div>
    </div>
    <div>
      <h2 class="font-bold !font-vp400 text-theme-blue">Aanbod</h2>
      <div class="flex flex-col gap-2 mt-4">
        <NuxtLink href="/" class="block">Bedrijven in verandering</NuxtLink>
        <NuxtLink href="/" class="block">Levens in transitie</NuxtLink>
        <NuxtLink href="/" class="block">Inspiratiekaarten</NuxtLink>
        <NuxtLink href="/" class="block">Boek</NuxtLink>
        <NuxtLink href="/" class="block">Verdieping</NuxtLink>
      </div>
    </div>
    <div>
      <h2 class="font-bold !font-vp400 text-theme-blue">Neem contact op</h2>
      <div class="flex items-center gap-2 mt-4">
        <NuxtLink
          href="/"
          class="flex items-center justify-between w-10 h-10 p-2 rounded-full bg-theme-blue"
        >
          <Icon
            name="ic:baseline-phone"
            size="25"
            class="w-full h-full text-white"
          />
        </NuxtLink>
        <NuxtLink
          href="/"
          class="flex items-center justify-between w-10 h-10 p-2 rounded-full bg-theme-blue"
        >
          <Icon
            name="clarity:email-solid"
            size="25"
            class="w-full h-full text-white"
          />
        </NuxtLink>
        <NuxtLink
          href="/"
          class="flex items-center justify-between w-10 h-10 p-2 rounded-full bg-theme-blue"
        >
          <Icon
            name="dashicons:linkedin"
            size="25"
            class="w-full h-full text-white"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const img = useImage();
</script>
