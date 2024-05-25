<script setup lang="ts">
const email: Ref<HTMLInputElement> = ref() as Ref<HTMLInputElement>;
const password: Ref<HTMLInputElement> = ref() as Ref<HTMLInputElement>;
const isSignup: Ref<Boolean> = ref(false);
const supabase = useSupabaseClient();

const signUp = async (): Promise<void> => {
    const { data: { user: user }, error } = await supabase.auth.signUp({
        email: email.value.value,
        password: password.value.value
    });
    console.log(user)
    console.log(error)
}

const login = async (): Promise<void> => {
    const { data: { user: user }, error } = await supabase.auth.signInWithPassword({
        email: email.value.value,
        password: password.value.value
    });
    console.log(user)
    console.log(error)
}
</script>

<template>
    <div class="container w-full h-full flex flex-col items-center justify-center">
        <UCard class="max-w-sm w-80" :ui="{ background: 'bg-white dark:bg-gray-950'}">
            <template #header>
                <Placeholder class="h-3 flex items-center justify-center">
                    <span v-if="isSignup">Регистрация</span>
                    <span v-else>Вход</span>
                </Placeholder>
            </template>
            <Placeholder class="h-32">
                <form @submit.prevent="isSignup ? signUp() : login()" class="flex flex-col gap-2 items-center">
                    <input placeholder="почта email" type="text" ref="email" class="input">
                    <input placeholder="пароль" type="password" ref="password" class="input">
                    <button type="submit"
                        class="uppercase tracking-widest font-semibold px-4 mt-5 py-2 rounded bg-gray-200 hover:bg-gray-500 hover:text-gray-200 border dark:bg-gray-950 dark:text-white dark:border-gray-200 dark:hover:bg-gray-200 dark:hover:text-black transition-ease duration-300">Подтвердить</button>
                </form>
            </Placeholder>
            <template #footer>
                <Placeholder class="h-8 flex items-center justify-center">
                    <span @click="isSignup = !isSignup" v-if="isSignup" class="cursor-pointer">У вас уже есть аккаунт?
                        Войти</span>
                    <span @click="isSignup = !isSignup" v-else class="cursor-pointer">Зарегистрироваться</span>
                </Placeholder>
            </template>
        </UCard>
    </div>
</template>

<style scoped>
.input {
    @apply rounded bg-white dark:bg-gray-800 border dark:border-gray-600 px-2 py-1 outline-none focus:border-black dark:focus:border-white;
}
</style>