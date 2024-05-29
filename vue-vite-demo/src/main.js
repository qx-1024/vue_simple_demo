import { createApp } from 'vue'

import './style.css'
import App from './App.vue'

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// Element Plus icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// Vue Router
import router from './router/router'

// pinia
import { createPinia } from 'pinia'

let app = createApp(App)
let pinia = createPinia()

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
