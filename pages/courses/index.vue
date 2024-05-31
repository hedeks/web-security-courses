<template>
    <div class="flex flex-col flex-wrap gap-5 items-center justify-center">
        <h1 class="text-5xl mb-10">
           Список доступных курсов:
        </h1>
        <div class="flex flex-wrap gap-8 items-start justify-center h-fit">
            <theCourse v-for="article in articles" :key="article._id" :path="article._path" :title="article.metaTitle" :description="article.description" :name:="article.name" :imgPath="article.imgPath"/>
        </div>
        <h2 class="text-5xl mb-10">
           В прошлый раз вы остановились здесь:
        </h2>
    </div>
</template>

<script setup>

const articles = await queryContent('courses').only(['_id', '_path', "title", "meta", "metaTitle", "description", "name", "imgPath"]).find();
</script>