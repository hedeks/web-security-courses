<script setup lang="ts">
import type { AuthError } from '@supabase/supabase-js';
const toast = useToast()
const store = userStore();
const email: Ref<HTMLInputElement> = ref() as Ref<HTMLInputElement>;
const password: Ref<HTMLInputElement> = ref() as Ref<HTMLInputElement>;
const isSignup: Ref<Boolean> = ref(false);
const supabase = useSupabaseClient();
const errorMain = ref<AuthError | null>(null);
const isLoading = ref<Boolean>(false)
const signUp = async (): Promise<void> => {
    isLoading.value = true;
    const { data: { user: user }, error } = await supabase.auth.signUp({
        email: email.value.value,
        password: password.value.value
    });
    isLoading.value = false;
    if (user) {
        toast.add({ title: `Подтвердите свой email ${user.email}` });
        navigateTo('/courses');
    }
    if (error) {
        errorMain.value = error;
    }
}

const login = async (): Promise<void> => {
    isLoading.value = true;
    const { data: { user: user }, error } = await supabase.auth.signInWithPassword({
        email: email.value.value,
        password: password.value.value
    });
    isLoading.value = false;
    if (user) {
        toast.add({ title: `Вы вошли в аккаунт ${user.email}` });
        navigateTo('/courses');
        store.$state.isLoggedIn = true;
        store.$state.userInfo = user;
    }
    if (error) {
        errorMain.value = error;
    }


}
</script>

<template>
    <div class="container m-auto w-full h-full flex flex-col items-center justify-center">
        <UCard class="max-w-sm w-80" :ui="{ background: 'bg-white dark:bg-gray-950' }">
            <template #header>
                <div class="h-3 flex items-center justify-center">
                    <span v-if="isSignup">Регистрация</span>
                    <span v-else>Вход</span>
                </div>
            </template>
            <div class="h-fit">
                <form @submit.prevent="isSignup ? signUp() : login()" class="flex flex-col gap-2 items-center">
                    <input placeholder="почта email" type="text" ref="email" class="input">
                    <input placeholder="пароль" type="password" ref="password" class="input">
                    <button type="submit"
                        class="uppercase tracking-widest font-semibold px-4 mt-5 py-2 rounded bg-gray-200 hover:bg-gray-500 hover:text-gray-200 border dark:bg-gray-950 dark:text-white dark:border-gray-200 dark:hover:bg-gray-200 dark:hover:text-black transition-ease duration-300">
                        Подтвердить
                    </button>
                </form>
                <div v-if="errorMain" class="mt-10 bg-red-500 rounded p-2 border shadow-sm text-center text-white">
                    {{ errorMain.message }}</div>
            </div>
            <template #footer>
                <div class="h-8 flex items-center justify-center">
                    <span @click="isSignup = !isSignup" v-if="isSignup" class="cursor-pointer">У вас уже есть аккаунт?
                        Войти</span>
                    <span @click="isSignup = !isSignup" v-else class="cursor-pointer">Зарегистрироваться</span>
                </div>
            </template>
        </UCard>
    </div>
</template>

<style scoped>
.input {
    @apply shadow-sm rounded bg-white dark:bg-gray-800 border dark:border-gray-600 px-2 py-1 outline-none focus:border-black dark:focus:border-white transition-all duration-300;
}
</style>