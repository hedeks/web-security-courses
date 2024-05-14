<script setup>
const props = defineProps({
    title: String,
    path: String
});
</script>

<template>
    <div @click="navigateTo(path)" class="course cursor-pointer p-5 flex gap-5 border border-solid hover:bg-gray-200 transition-ease duration-300">
        {{ title, path }}
    </div>
</template>
