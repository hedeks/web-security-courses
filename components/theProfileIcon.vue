<script setup lang="ts">
const store = userStore();
const toast = useToast()
const supabase = useSupabaseClient();
const user = useSupabaseUser();
onMounted(() => {
  if (user.value) {
    store.$state.isLoggedIn = true;
    store.$state.userInfo = user.value
  } else {
    store.$state.isLoggedIn = false;
  }
})
const signOut = () => {
  if (store.$state.isLoggedIn) {
    toast.add({ title: "Вы вышли из аккаунта!" })
    supabase.auth.signOut();
    store.$state.isLoggedIn = false;
    store.$state.userInfo = {};
  } else {
    toast.add({ title: "Перенаправление к авторизации!" });
    navigateTo('/login');
  }
}
const labelForDropDown = computed(() => {
  if (store.$state.isLoggedIn) {
    return `Выйти`
  } else {
    return `Войти`
  }
})
const items =
  computed(() => {
    return ([
      [{
        label: store.$state.userInfo.email,
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
        label: labelForDropDown.value,
        icon: 'i-heroicons-arrow-left-on-rectangle',
        click: () => {
          signOut();
        }
      }]
    ])
  })
</script>

<template>
  <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
    :popper="{ placement: 'bottom-start' }">
    <UAvatar v-if='store.$state.isLoggedIn' :alt="store.$state.userInfo.email" />
    <UAvatar v-else icon="i-heroicons-exclamation-circle" size="sm" />

    <template #account="{ item }">
      <div class="text-left">
        <p v-if="store.$state.isLoggedIn">
          Вошли как
        </p>
        <p v-if="store.$state.isLoggedIn" class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
        <p v-else>
          Вы не вошли в аккаунт
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="font flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
</template>