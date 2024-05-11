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
},{
  label: 'Профиль',
  icon: "i-heroicons-user",
  to: "/profile"
}]
</script>

<template>
  <UHorizontalNavigation :links="links" :ui="{ label: 'xl:text-lg', active: 'after:bg-gray-500 dark:after:bg-gray-500-inverted' }" class="border-b border-gray-200 dark:border-gray-800 text-lg flex w-full justify-center"/>
</template>