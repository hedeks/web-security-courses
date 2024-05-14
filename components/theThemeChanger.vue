<template>
    <UToggle on-icon="i-heroicons-sun" off-icon="i-heroicons-moon" :ui="{active: 'bg-yellow-300 dark:bg-yellow-400', icon: {on: 'text-black dark:text-white', off:'text-black dark:text-white'}}" :model-value="selected"
        @click="changeTheme" />
</template>


<script setup lang="ts">
const colorMode = useColorMode();

const obj = {
    light: true,
    dark: false
}
const selected = ref(obj[colorMode.preference]);

const changeTheme = () => {
    if (obj[colorMode.preference]) {
        colorMode.preference = "dark"
        selected.value = false;
    } else {
        colorMode.preference = "light"
        selected.value = true;
    }
}
</script>