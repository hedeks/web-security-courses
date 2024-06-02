import { defineStore } from "pinia";

interface User {
    email?: string
}

export const userStore = defineStore('user', {
    state: () => ({
        userInfo: <User>{},
        isLoggedIn: false
    })
})