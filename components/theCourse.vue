<script setup>
const props = defineProps({
    title: String,
    path: String
});
</script>

<template>
    <div @click="navigateTo(path)" class="course cursor-pointer p-5 flex gap-5 border border-solid hover:bg-gray-100 dark:hover:bg-gray-700 transition-ease duration-300 rounded">
        {{ title, path }}
    </div>
</template>
