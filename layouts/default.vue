<template>
  <BoundedBg as="footer" bg="white" class="border-b-2 border-theme-blue">
    <Nav />
  </BoundedBg>
  <main>
    <slot />
  </main>
  <BoundedBg as="footer" bg="white" class="border-t-2 border-theme-blue">
    <Footer />
  </BoundedBg>
</template>
