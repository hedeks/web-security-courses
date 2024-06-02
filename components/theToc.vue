<template>
    <div class="flex flex-col lg:sticky h-fit pb-8">
        <p class="text-sm tracking-widest font-bold text-black dark:text-white uppercase">Содержание</p>
        <div class="flex flex-col dark:text-gray-300">
            <div class="flex flex-col" v-for="item in links" :key="item.id">
                <span :data-title="item.id"
                    class="toc px-3 p-1 lg:border-l-2 dark:border-gray-600 scroll-m-40 text-sm cursor-pointer  transition-all:ease duration-300"
                    @click="customScroll(item.id)">{{ item.text }}</span>
                <div v-if="item.children" class="flex flex-col">
                    <span :data-title="child.id"
                        class="toc lg:border-l-2 p-1 px-5 dark:border-gray-600 scroll-m-40 text-sm cursor-pointer transition-all:ease duration-300"
                        v-for="child in item.children" @click="customScroll(child.id)">{{ "• " + child.text }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const props = defineProps<{
    links?: any,
    activeID?: string
}>();
const customScroll = (id: string) => {
    const elem: HTMLElement = document.getElementById(id) as HTMLElement;
    const headerHeight = document.getElementById('header')?.clientHeight as number;
    const offset = elem.getBoundingClientRect().top + scrollY - headerHeight;
    window.scrollTo({ top: offset, behavior: 'smooth' });
}

const activeElem = toRef(()=>props.activeID);
watch(activeElem, () => {
    if (activeElem.value !== "") {
        const elements: HTMLCollectionOf<Element> = document.getElementsByClassName("toc");
        for (let element of elements) {
            if (element.getAttribute('data-title') === activeElem.value){
                element.classList.add('selectedToc')
            } else {
                element.classList.remove('selectedToc')
            }
        }
    }
})
</script>

<style scoped>
.selectedToc {
    @apply border-l-2 border-gray-950 dark:border-gray-200 bg-gray-200 dark:bg-gray-800;
}
</style>