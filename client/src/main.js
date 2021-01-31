import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import { VueCookieNext } from 'vue-cookie-next'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import ProgressSpinner from 'primevue/progressspinner';
import Menubar from 'primevue/menubar';

//add toast notifications
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
//add theme
// import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App)

app.component('Toast', Toast);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Menubar', Menubar);

// cookies
VueCookieNext.config({ expire: '7d' })
// setup axios global variable
app.config.globalProperties.$axios = axios
//setup local server url
app.config.globalProperties.$serverUrl = 'http://127.0.0.1:3000'

app
.use(store)
.use(router)
.use(PrimeVue, {ripple: true})
.use(VueCookieNext)
.use(ToastService)
.mount('#app')
