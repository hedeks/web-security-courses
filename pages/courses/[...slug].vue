<template>
    <div
        class="flex flex-col flex-wrap-reverse lg:grid lg:grid-cols-12 lg:flex-nowrap gap-10 prose max-w-none prose-pre:text-black dark:prose-pre:text-white xl:prose-lg md:prose-md prose-slate dark:prose-invert w-full prose-img:w-1/2 prose-img:mx-auto prose-img:h-auto prose-pre:bg-gray-200 prose-pre:border dark:prose-pre:border-gray-700 dark:prose-pre:bg-zinc-900 prose-h1:font-semibold">
        <theLeftQuizSelector @changeView="changeView" :is-theory="isTheory" :title="ast?.data.title"
            :quizTitle="ast?.data.metaTitle" class="lg:col-span-2 lg:flex lg:sticky top-[--header-height]" />
        <div :class="[{ 'active': isTheory }, { 'inactive': !isTheory }]" ref="lection"
            class="flex flex-col-reverse lg:grid lg:grid-cols-10 gap-10 w-full lg:col-span-10 transition ease-in-out duration-500">
            <div class="sm:mw-full lg:w-auto lg:col-span-8 flex-col">
                <ContentRendererMarkdown v-if="ast !== undefined" :value="ast"
                    class="parent sm:mw-full lg:w-auto lg:col-span-8 flex-col bg-gray-100 dark:bg-zinc-800 lg:p-10 p-5">
                    <template #empty>
                        <p>Не найдено контента</p>
                    </template>
                </ContentRendererMarkdown>
                <toQuiz @changeView="changeView" class="mt-5 h-20">Перейти к тесту</toQuiz>
            </div>
            <theToc :activeID="activeID" v-if="ast?.toc?.links.length"
                class="lg:w-auto lg:col-span-2 lg:sticky top-[--header-height]" title="Содержание"
                :links="ast?.toc.links" />
        </div>
        <div :class="[{ 'active': !isTheory }, { 'inactive': isTheory }]" class="flex w-full lg:h-[calc(100dvh_-_var(--header-height)_-_5rem)] dark:bg-gray-950 bg-gray-50  items-center justify-center h-[calc(100dvh_-_var(--header-height)_-_1.5rem)] col-span-10 transition ease-in-out duration-500">
            <theQuizView :quizJSON="quizJson" ref="quiz" />
        </div>
    </div>
</template>

<script setup lang="ts">
const activeID: Ref<string> = ref("");
const isTheory = ref(true);
const lection: Ref<HTMLElement | undefined> = ref();
const quiz: Ref<HTMLElement | undefined> = ref();
let isFirstObsCall = true;
const observe = (filteredElements: Element[]) => {
    const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (!entry.isIntersecting && entry.boundingClientRect.y > 0 && !isFirstObsCall) {
                let index = filteredElements.indexOf(entry.target);
                if (index > 0) {
                    activeID.value = filteredElements[index - 1].id;
                }
            }
            if (entry.isIntersecting) {
                if (entry.target.id !== "") {
                    activeID.value = entry.target.id;
                }
            }
        })
        isFirstObsCall = false;
    }
    const observer = new IntersectionObserver(callback, {
        root: null,
        threshold: 1,
        rootMargin: "0px 0px -65% 0px"
    })
    filteredElements.forEach((item: Element) => {
        observer.observe(item)
    })
    return observer
};

const obs = ref<IntersectionObserver>()
const currentPosition = ref<number>();
window?.addEventListener('scroll', () => {
    if (isTheory.value) {
        currentPosition.value = scrollY;
    }
})
const changeView = (name: string) => {
    if (name === "quiz") {
        isTheory.value = false;
    } else {
        isTheory.value = true;
    }
    if (isTheory.value && currentPosition.value) {
        nextTick(() => {
            scrollTo({ top: currentPosition.value })
        })
    } else {
        scrollTo({ top: 0 });
    }
}

const route = useRoute();
const param = ref<string>();
if (typeof route.params.slug === 'string') {
    param.value = route.params.slug;
} else {
    param.value = route.params.slug[0];
}
const { data: articles, error } = await useAsyncData("lection", () => $fetch('/api/lection/' + param.value))
let ast = ref();
if (articles.value !== undefined && articles.value !== null) {
    ast.value = await parseMarkdown(articles.value[0 as keyof {}]);
};
const { data: quizJson } = await useAsyncData("quiz", () => $fetch('/api/quiz/' + ast.value.data.name));
useSeoMeta({
    ogImage: ast.value.data.imgPath,
    title: ast.value.data.metaTitle,
    ogDescription: ast.value.data.description
});
onMounted(() => {
    const elements = document.querySelectorAll('h2, h3');
    let filteredElements: Element[] = [];
    elements.forEach((item) => {
        if (item.parentElement?.classList.contains("parent") && item.id !== "") {
            filteredElements.push(item);
        }
    })
    obs.value = observe(filteredElements);
})
</script>

<style scoped>
.active {
    opacity: 1;
    position: relative;
}

.inactive {
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    pointer-events: none;
}
</style>