<template>
    <div class="flex flex-col lg:border-l dark:border-gray-600 pl-8 lg:sticky top-0 h-fit pb-8">
        <p class="text-xl text-black dark:text-white">Содержание</p>
        <div class="flex flex-col gap-2 dark:text-gray-300">
            <div class="flex flex-col gap-2"
                v-for="item in props.links" :key="item.id">
                <span class="text-base cursor-pointer hover:text-gray-300 dark:hover:text-gray-600 transition-all:ease duration-200" @click="navigateTo(route.path + '#' + item.id)">{{ item.text }}</span>
                <div v-if="item.children" class="flex flex-col gap-2 px-2">
                    <span  class="text-sm cursor-pointer hover:text-gray-300 dark:hover:text-gray-600 transition-all:ease duration-200" v-for="child in item.children" @click="navigateTo(route.path + '#' + child.id)">{{ "• " + child.text }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const props = defineProps({
    links: Array
})
console.log(props.links)
</script>