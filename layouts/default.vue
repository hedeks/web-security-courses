<template>
    <div class="container max-w-6xl mx-auto flex-col">
        <theHeader class="flex p-1" />
        <main class="flex-col p-10 items-center justify-items-center">
            <slot />
        </main>
        <theFooter class="flex p-1" />
    </div>
</template>

<script setup>
const colorMode = useColorMode();
colorMode.preference = "dark"
</script>