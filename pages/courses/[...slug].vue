<template>
    <div class="flex flex-wrap-reverse lg:grid lg:grid-cols-12 lg:gap-8 lg:flex-nowrap gap-5 prose max-w-none prose-pre:text-black dark:prose-pre:text-white xl:prose-lg md:prose-md prose-slate dark:prose-invert w-full prose-img:w-1/2 prose-img:mx-auto prose-img:h-auto prose-pre:bg-gray-100 prose-pre:border dark:prose-pre:border-gray-700 dark:prose-pre:bg-gray-800 prose-h1:font-semibold">
        <!-- <div class="lg:col-span-2"> </div> -->
        <ContentDoc class="lg:col-span-9"/>
        <theToc class="lg:w-auto lg:col-span-3 lg:sticky top-[--header-height]" title="Содержание" :links="page.body.toc.links"/>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
</script>