<script setup lang="ts">
const props = defineProps({
    title: String,
    path: String
});
</script>

<template>
    <div @click="navigateTo(path)" class="flex h-40 flex-col items-center justify-around gap-5 max-w-xs course cursor-pointer p-5 flex gap-5 border border-solid hover:bg-gray-100 dark:hover:bg-gray-700 transition-ease duration-300 rounded">
        <span>{{ props.title }}</span>
        <span class="bg-gray-200 dark:bg-gray-800 p-2 rounded font-semibold tracking-widest uppercase">Изучить!</span>
    </div>
</template>
