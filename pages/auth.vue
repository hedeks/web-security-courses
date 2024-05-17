<script setup lang="ts">
import type { FormError } from '#ui/types'

const fields = [{
    name: 'email',
    type: 'text',
    label: 'Почта',
    placeholder: 'Введите свой email'
}, {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    placeholder: 'Введите свой пароль'
}]

const validate = (state: any) => {
    const errors: FormError[] = []
    if (!state.email) errors.push({ path: 'email', message: 'Почта необходима' })
    if (!state.password) errors.push({ path: 'password', message: 'Пароль необходим' })
    return errors
}

function onSubmit(data: any) {
    console.log('Submitted', data)
}

const error = ref(true)

</script>

<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
    <UCard class="max-w-sm w-full mx-auto">
        <UAuthForm :fields="fields" :validate="validate" title="С возвращением!" icon="i-heroicons-lock-closed"
            :loading="false" :ui="{
                base: 'text-center', default: {
                    submitButton: {
                        label: 'Войти'
                    }
                }
            }" @submit="onSubmit">
            <template #description>
                Нет аккаунта? <NuxtLink to="/register" class="font-medium text-black underline">Зарегистрироваться
                </NuxtLink>.
            </template>

            <template #validation>
                <UAlert color="gray" icon="i-heroicons-information-circle-20-solid" title="Ошибка входа" />
            </template>
        </UAuthForm>
    </UCard>
</template>