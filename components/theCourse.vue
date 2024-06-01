<script setup lang="ts">
const props = defineProps({
    title: String,
    name: String,
    path: String,
    description: String,
    imgPath: String,
});
</script>

<template>
    <UCard class="lg:w-96 h-fit sm:w-sm dark:shadow-darkShadow" :ui="{ background: 'bg-white dark:bg-gray-950' }">
        <template #header>
            <h2 class="text-xl text-center font-bold h-20 flex items-center justify-center">
                {{ props.title }}
            </h2>
        </template>
        <div class="flex flex-col">
            <img v-if="props.imgPath" :src="props.imgPath" alt="" class="mx-auto rounded-lg dark:shadow-darkShadow shadow h-64 object-cover w-full saturate-50 hover:saturate-0 hover:blur-sm blur-none hover ease-linear duration-300">
            <span class="mt-5 px-2 font-semibold text-lg">Описание:</span>
            <p class="lowercase mt-5 px-2 dark:text-gray-300 text-gray-500">
                {{ props.description }}
            </p>
        </div>
        <UButton icon="i-heroicons-document-text" trailing block :to="'/courses/'+ props.name" color="black" variant="solid" square
            type="submit" class="mt-7 shadow dark:shadow-darkShadow"
            :ui="{ base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0', body: { base: 'text-center' } }"
            label="Читать"></UButton>
        <template #footer>
            <div>
                <span>Прогресс:</span>
            </div>
        </template>
    </UCard>
</template>