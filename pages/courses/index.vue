<template>
    <div class="flex flex-col gap-5 items-center justify-center">
        <h1 class="text-5xl mb-10">
           Все доступные лекции!
        </h1>
        <div class="flex flex-wrap gap-5 items-center justify-center">
            <theCourse v-for="article in articles" :key="article._id" :path="article._path" :title="article.title"/>
        </div>
    </div>
</template>

<script setup>

const articles = await queryContent('courses').only(['_id', '_path', "title"]).find();
</script>