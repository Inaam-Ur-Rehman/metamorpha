<script setup lang="ts">
const img = useImage();
interface Menu {
  label: string;
  subItems?: Array<{
    label: string;
    url: string;
  }>;
  url?: string;
}
const menu: Menu[] = [
  {
    label: "Home",
    url: "/",
    subItems: [
      {
        label: "Organisaties in verandering",
        url: "/",
      },
      {
        label: "Levens in transitie",
        url: "/",
      },
      {
        label: "Inspiratiekaarten",
        url: "/",
      },
      {
        label: "Boek",
        url: "/",
      },
      {
        label: "Verdieping",
        url: "/",
      },
    ],
  },
  {
    label: "Aanbod",
    url: "/aanbod",
  },
  {
    label: "Agenda",
    url: "/agenda",
  },
  {
    label: "Getuigenissen",
    url: "/getuigenissen",
  },
  {
    label: "Inspiratie",
    url: "/inspiratie",
  },
  {
    label: "Team",
    url: "/team",
  },
];

const open = ref(false);
</script>
<template>
  <header
    class="flex flex-col justify-between px-2 py-6 bg-white lg:flex-row lg:items-center md:px-8 gap-y-8"
  >
    <div class="flex items-center justify-between w-full">
      <NuxtLink href="/">
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
      </NuxtLink>
      <Icon
        name="gg:menu-round"
        size="40"
        class="lg:!hidden"
        @click="open = !open"
      />
    </div>
    <nav
      class="gap-3 xl:gap-6 text-base lg:!flex lg:flex-row lg:items-center"
      :class="open ? 'flex flex-col ' : 'hidden'"
    >
      <NuxtLink
        v-for="(item, index) in menu"
        :key="index"
        :href="item.url"
        class="cursor-pointer"
      >
        {{ item.label }}
      </NuxtLink>
      <BtnWithLogo
        btn-text="NEEM CONTACT OP"
        href="/"
        class="!text-base lg:flex"
      />
    </nav>
    <!--    <div class="flex items-center gap-6 lg:hidden">-->
    <!--      <Icon name="gg:menu-round" size="40"-->
    <!--      class="lg:!hidden"-->
    <!--      />-->
    <!--      <BtnWithLogo-->
    <!--          btn-text="NEEM CONTACT OP"-->
    <!--          href="/"-->
    <!--          class="hidden md:flex"-->
    <!--      />-->
    <!--    </div>-->
  </header>
</template>
