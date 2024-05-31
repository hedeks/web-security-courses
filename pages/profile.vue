<script setup lang="ts">
const user = useSupabaseUser();
const role = ref(user.value?.role);

const { data, pending } = useFetch('/api/quiz');

const courses = computed(() => {
    return data.value?.sort((a, b) => a.course_id - b.course_id)
})
const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

interface Roles {
    admin: string,
    user: string
}

const roles: Roles = {
    admin: "редактирование и удаление курсов",
    user: "базовые возможности"
}
</script>


<template>
    <UCard class="w-full min-h-full" :ui="{ background: 'bg-white dark:bg-gray-950' }">
        <template #header>
            <h1 class="text-2xl font-bold">
                Ваш профиль
            </h1>
        </template>
        <div class="flex flex-wrap justify-center">
            <div id="admistration" v-if="role === 'admin'"
                class="flex col-span-1 p-5 items-start h-full justify-center py-2">
                <UCard class="text-center" :ui="{ background: 'bg-white dark:bg-black', base: 'flex flex-col w-96' }">
                    <template #header>
                        <h2 class="text-xl font-bold text-center">
                            Администрирование
                        </h2>
                    </template>
                    <div class="flex flex-col p-1 gap-3">
                        <h3 class="font-semibold w-fit">
                            {{ "Количество курсов на сайте: " + data?.length }}
                        </h3>
                        <span class="flex shadow-sm border text-sm px-2 py-1 rounded text-center"
                            v-for="course in courses as Quiz[]" :key="course.course_id">
                            {{ course.course_id + " " + "<" + course.title + ">" }} </span>
                    </div>
                    <UButton icon="i-heroicons-arrow-right" trailing block color="black" class="flex flex-wrap mx-auto mt-5" variant="solid" to="/admin"
                        label="Перейти к панели управления контентом" :loading="pending" />
                </UCard>
            </div>
            <div id="information" class="flex col-span-1 justify-center py-2">
                <UCard :ui="{ background: 'bg-white dark:bg-black', base: 'flex flex-col w-96' }">
                    <template #header>
                        <h2 class="text-xl font-bold text-center">
                            Информация о вас
                        </h2>
                    </template>
                    <div class="flex flex-col justify-center p-1 gap-3">
                        <span class="font-semibold">Ваш email:</span>
                        <span class="flex shadow-sm border text-sm px-2 py-1 rounded text-center">{{ user?.email
                            }}</span>
                        <span class="font-semibold">Дата создания аккаунта:</span>
                        <span class="flex shadow-sm border text-sm px-2 py-1 rounded text-center">{{ new
                            Date(user?.created_at as string).toLocaleDateString('ru-RU', options) }}</span>
                        <span class="font-semibold">Ваша роль:</span>
                        <span class="flex shadow-sm border text-sm px-2 py-1 rounded text-center">{{ user?.role
                            }}</span>
                        <span class="font-semibold">Ваши возможности на сайте:</span>
                        <span class="flex shadow-sm border text-sm px-2 py-1 rounded text-center">{{ roles[user?.role as
                            keyof
                            Roles] }}</span>
                        <UButton icon="i-heroicons-pencil-square" block color="black" class="mt-5" variant="solid" label="Изменить" :loading="pending" />
                    </div>
                </UCard>
            </div>
            <div id="stats" class="flex col-span-1 p-5 items-start h-full justify-center py-2">
                <UCard class="text-center" :ui="{ background: 'bg-white dark:bg-black', base: 'flex flex-col w-96' }">
                    <template #header>
                        <h2 class="text-xl text-center font-bold">
                            Статистика
                        </h2>
                    </template>
                </UCard>
            </div>
            <div id="analitics" class="flex col-span-1 p-5 items-start h-full justify-center py-2">
                <UCard class="text-center" :ui="{ background: 'bg-white dark:bg-black', base: 'flex flex-col w-96' }">
                    <template #header>
                        <h2 class="text-xl text-center font-bold">
                            Аналитика прохождения
                        </h2>
                    </template>
                </UCard>
            </div>
        </div>
    </UCard>
</template>