<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
</script>

<style>

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
body {
  /* font-family: "P22 Underground"; */
  overflow-y: scroll;
  line-height: 1.15;
  font-family: "Inter var experimental", "Inter var", "Inter", -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
::selection {
  background: rgb(216, 216, 216) !important;
  color: #2c2c2c;
}
</style>
