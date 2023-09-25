import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/style.css';

import App from './App'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
