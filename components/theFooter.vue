<script setup>
const links = [{
    label: 'Главная',
    icon: 'i-heroicons-home',
    to: '/'
},
{
    label: 'Курсы',
    icon: 'i-heroicons-book-open',
    to: '/courses'
}, {
    label: 'Профиль',
    icon: "i-heroicons-user",
    to: "/profile"
}, {
    label: 'Авторизация',
    icon: "i-heroicons-lock-closed",
    to: "/login"
}];

</script>


<template>
    <footer
        class="rounded-tr rounded-tl flex flex-col py-5 gap-5 justify-center items-center border-t border-gray-200 dark:border-gray-500 dark:bg-zinc-900">
        <UHorizontalNavigation :links="links"
            :ui="{container: 'flex items-center justify-center min-w-0 flex-wrap', label: 'xl:text-lg', active: 'after:bg-gray-500 dark:after:bg-gray-500-inverted' }"
            class="text-lg flex flex-wrap w-fit justify-self-center col-span-1" />
        <div class="dark:border-gray-500 border-b w-full"></div>
        <h3 class="xl:text-lg text-center text-gray-800 dark:text-gray-300">Сайт выполнен в качестве дипломной работы
            <br> ВГУИТ 2024 <br> Студент группы ИСП-205 Хицко.К </h3>
    </footer>
</template>