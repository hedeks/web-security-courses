<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/hero-new');

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}

@font-face {
  font-family: "P22 Underground";
  src: local("P22 Underground CY Pro Light"),
    local("P22-Underground-CY-Pro-Light"),
    url("/P22UndergroundCYProLight.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

body {
  /* font-family: "P22 Underground"; */
  overflow-y: scroll;
  @apply scroll-smooth;
  font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

::selection {
  background: rgb(216, 216, 216) !important;
  color: #2c2c2c;
}
</style>
