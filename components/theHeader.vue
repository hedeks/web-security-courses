<script setup lang="ts">
const header = ref();
let headerHeight = ref<Number>(0);
const updateVar = ()=>{
  headerHeight.value = header.value.clientHeight;
  document.body.style.setProperty('--header-height', `${headerHeight.value}px`)
}
onMounted(()=>{
  updateVar();
});
window?.addEventListener("resize", updateVar);
const links = [{
  label: 'Главная',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'О сайте',
  icon: 'i-heroicons-document',
  to: "/about"
}, {
  label: 'Курсы',
  icon: 'i-heroicons-book-open',
  to: '/courses'
}, {
  label: 'Профиль',
  icon: "i-heroicons-user",
  to: "/profile"
},{
  label: 'Авторизация',
  icon: "i-heroicons-lock-closed",
  to: "/auth"
}]
</script>

<template>
  <div id="header" ref="header" class="flex px-10 gap-2 flex-wrap items-center md:justify-between justify-center border-b dark:border-gray-700 border-gray-200">
    <theSiteLogo />
    <UHorizontalNavigation :links="links"
      :ui="{ label: 'xl:text-lg', active: 'after:bg-gray-500 dark:after:bg-gray-500-inverted' }"
      class="text-lg flex w-fit justify-center" />
    <div class="flex p-1 items-center justify-between gap-5">
      <theThemeChanger />
      <theProfileIcon />
    </div>
  </div>
</template>

<style>
:root {
  --header-height: 65px;
}
</style>