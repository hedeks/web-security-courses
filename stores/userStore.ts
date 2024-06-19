import { defineStore } from "pinia";

interface User {
    email?: string
}

export const userStore = defineStore('user', () => {
    const userInfo: User = {};
    const isLoggedIn = false;

    
    return{
        userInfo,
        isLoggedIn
    }
})