<template>
    <div class="flex flex-col dark:border-gray-600 lg:sticky h-fit">
        <p class="text-sm tracking-widest font-bold text-black dark:text-white uppercase">От теории</p>
        <span class="border-r-2 scroll-m-40 text-sm cursor-pointer hover:text-gray-300 dark:hover:text-gray-600 transition-all:ease duration-200">{{props.title}}</span>
        <p class="text-sm tracking-widest font-bold text-black dark:text-white uppercase">К практике</p>
        <span class="border-r-2 scroll-m-40 pr-1 text-sm cursor-pointer hover:text-gray-300 dark:hover:text-gray-600 transition-all:ease duration-200">{{ "Тест. ".concat(props.quizTitle as string) }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    quizTitle: String,
    meta: String
})
</script>