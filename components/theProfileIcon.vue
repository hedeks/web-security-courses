<script setup lang="ts">
const items = [
  [{
    label: 'xickk@yandex.ru',
    slot: 'account',
    disabled: true
  }], [{
    label: 'Курсы',
    icon: 'i-heroicons-book-open',
    to: "/courses"
  }, {
    label: 'Профиль',
    icon: 'i-heroicons-user',
    to: "/profile"
  }], [{
    label: 'Выйти',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    to: "/logout"
  }]
]
</script>

<template>
  <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
    <UAvatar alt="Kirill Hitsko"/>

    <template #account="{ item }">
      <div class="text-left">
        <p>
          Вошли как
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="font flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
</template>