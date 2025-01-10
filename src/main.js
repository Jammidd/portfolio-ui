import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import i18n from "./locales"
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import rest from './api/rest'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import 'primeflex/primeflex.css'
import './assets/scss/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/scss/app.scss'

const app = createApp(App)
const emitter = mitt()
app.config.globalProperties.emitter = emitter
app.use(i18n)
app.use(store)
app.use(router)
app.use(VueAxios, rest)

app.use(PrimeVue)
app.use(ToastService)
app.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
        libraries: "places"
    }
})

app.provide('http', app.config.globalProperties.axios)

app.mount('#app')
