<script setup lang="ts">

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
}]
</script>

<template>
  <div class="flex px-10 flex-wrap items-center justify-between border-b dark:border-gray-700 border-gray-200">
    <UHorizontalNavigation :links="links"
      :ui="{ label: 'xl:text-lg', active: 'after:bg-gray-500 dark:after:bg-gray-500-inverted' }"
      class="text-lg flex w-fit justify-center" />
    <div class="flex items-center justify-between gap-5">
      <theThemeChanger />
      <theProfileIcon />
    </div>
  </div>
</template>