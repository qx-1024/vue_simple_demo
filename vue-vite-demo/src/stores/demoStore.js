import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
    const state = ref(0)

    const increment = () => {
        state.value++
    }

    return { state, increment }
})