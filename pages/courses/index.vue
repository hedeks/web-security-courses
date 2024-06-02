<template>
    <div class="flex flex-col flex-wrap gap-5 items-center justify-center">
        <h1 class="lg:text-5xl sm:text-4xl text-3xl mb-10 mt-7 lg:mt-0 text-center">
            Список доступных курсов:
        </h1>
        <div class="flex flex-wrap gap-8 items-start justify-center h-fit">
            <theCourse v-for="article in articles" :key="article.data.courseID" :title="article.data.metaTitle"
                :description="article.data.description" :name="article.data.name" :imgPath="article.data.imgPath" />
        </div>
        <h2 class="lg:text-5xl sm:text-4xl text-3xl mb-10 mt-7 lg:mt-0 text-center">
            В прошлый раз вы остановились здесь:
        </h2>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "Курсы"
})
const { data: lections, error } = await useAsyncData( "lections", () => $fetch('/api/lection/'))
let ast = [];
if (lections.value) {
    for (let lection of lections.value){
        ast.push(await parseMarkdown(lection as string))
    }
}
const articles = ast.sort((a,b)=>a.data.course_id - b.data.course_id);
</script>