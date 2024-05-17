<template>
    <div class="container max-w-8xl mx-auto flex-col">
        <theHeader class="flex p-1 sticky top-0 bg-white dark:bg-gray-900 z-10" />
        <main class="flex-col p-10 items-center justify-items-center">
            <slot />
        </main>
        <theFooter class="flex p-1" />
    </div>
</template>

<script setup lang="ts">
</script>