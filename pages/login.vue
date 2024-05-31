<script setup lang="ts">
import type { AuthError } from '@supabase/supabase-js';
const toast = useToast()
const store = userStore();
const email: Ref<HTMLInputElement> = ref() as Ref<HTMLInputElement>;
const password: Ref<HTMLInputElement> = ref() as Ref<HTMLInputElement>;
const isSignup: Ref<Boolean> = ref(false);
const supabase = useSupabaseClient();
const errorMain = ref<AuthError | null>(null);
const isLoading: Ref<Boolean> = ref(false)
const signUp = async (): Promise<void> => {
    isLoading.value = true;
    const { data: { user: user }, error } = await supabase.auth.signUp({
        email: email.value.value,
        password: password.value.value,
    });
    isLoading.value = false;
    if (user) {
        toast.add({ title: `Подтвердите свой email ${user.email}` });
    }
    if (error) {
        errorMain.value = error;
        store.$state.isLoggedIn = false;
        store.$state.userInfo = {};
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
        navigateTo('/profile');
        store.$state.isLoggedIn = true;
        store.$state.userInfo = user;
    }
    if (error) {
        errorMain.value = error;
        store.$state.isLoggedIn = false;
        store.$state.userInfo = {};
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
                    <UButton block color="black" variant="solid" square type="submit" class="mt-7 shadow" :ui="{base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0'}"
                        label="Подтвердить" :loading="isLoading">
                        <template #trailing>
                            <UIcon name="i-heroicons-arrow-up-circle" class="w-5 h-5" />
                        </template>
                    </UButton>

                </form>
                <div v-if="errorMain" class="alert mt-5">
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
        <span v-if="!store.$state.isLoggedIn" class="alert mt-5">Просматривать
            курсы и профиль можно только войдя в аккаунт</span>
    </div>
</template>

<style scoped>
.input {
    @apply shadow-sm rounded bg-white dark:bg-gray-800 border dark:border-gray-600 px-2 py-1 outline-none focus:border-black dark:focus:border-white transition-all duration-300;
}

@keyframes wrong {
    0% {
        transform: translateX(5px);
        opacity: 0;
    }

    50% {
        transform: translateX(-5px);
        opacity: 0.5;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.alert {
    @apply text-center border border-red-500 text-red-900 dark:text-red-400 dark:bg-red-950 bg-red-50 p-5 rounded shadow uppercase tracking-widest font-mono font-bold transition ease-linear duration-300 animate-slide;
}
</style>