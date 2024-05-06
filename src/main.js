import { createApp } from 'vue'
import './assets/scss/style.scss'

// Import router
import { router } from './router/index.js'



import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
