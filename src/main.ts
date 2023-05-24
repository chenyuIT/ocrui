//import TDesign from 'tdesign-vue-next'
import TDesign from 'tdesign-mobile-vue';

import { createApp } from 'vue'
import { createPinia } from 'pinia'



import App from './App.vue'
import router from './router'


import './assets/main.css'

const app = createApp(App)

app.config.globalProperties.$filename = "demo01"

app.use(createPinia())
app.use(router)
app.use(TDesign)
app.mount('#app')
