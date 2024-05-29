import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            component: () => import("../views/Home.vue"),
        },
    ]
})

export default router;