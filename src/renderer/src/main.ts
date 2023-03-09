import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@renderer/assets/css/tailwind.less'
import router from '@renderer/router'
import i18n from './i18n'

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
