<template>
    <div class="container max-w-8xl mx-auto flex-col">
        <theHeader class="flex p-1 sticky top-0 bg-white dark:bg-gray-950 z-10" />
        <main class="main flex flex-col p-10 items-center justify-items-center">
            <slot />
        </main>
        <theFooter class="flex p-1" />
    </div>
</template>

<script setup lang="ts">
const links = [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
}, {
    label: 'Navigation',
    icon: 'i-heroicons-square-3-stack-3d'
}, {
    label: 'Breadcrumb',
    icon: 'i-heroicons-link'
}]
const route = useRoute();
console.log(route.fullPath)
</script>

<style>
:root {
    --footer-height: 93px;
}

.main {
    min-height: calc(100dvh - var(--header-height) - var(--footer-height));
}
</style>