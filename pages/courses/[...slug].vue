<template>
    <div
        class="flex flex-wrap-reverse lg:grid lg:grid-cols-12 lg:flex-nowrap gap-10 prose max-w-none prose-pre:text-black dark:prose-pre:text-white xl:prose-lg md:prose-md prose-slate dark:prose-invert w-full prose-img:w-1/2 prose-img:mx-auto prose-img:h-auto prose-pre:bg-gray-100 prose-pre:border dark:prose-pre:border-gray-700 dark:prose-pre:bg-gray-800 prose-h1:font-semibold">
        <theLeftQuizSelector :title="page?.title" class="lg:col-span-2 lg:flex lg:sticky top-[--header-height]" />
        <ContentDoc
            class="parent sm:mw-full lg:w-auto lg:col-span-8 flex-col bg-gray-50 dark:bg-gray-950 lg:p-10 p-5" />
        <theToc :activeID="activeID" v-if="page?.body?.toc?.links.length" class="lg:w-auto lg:col-span-2 lg:sticky top-[--header-height]"
            title="Содержание" :links="page.body.toc.links" />
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
const activeID: Ref<string> = ref("");
onMounted(() => {
    const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry)=>{
            if (entry.isIntersecting){
                activeID.value = entry.target.id;
            }
        })
    }

    const observer = new IntersectionObserver(callback, {
        root: null,
        threshold: 0.5
    })

    const elements = document.querySelectorAll('h2, h3');
    elements.forEach((item: Element) => {
        if (item.parentElement?.classList.contains("parent")) {
            observer.observe(item)
        }
    })
})
</script>