import { createApp } from 'vue'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import App from './App.vue'

let app = createApp(App)
app.component('fa-icon', FontAwesomeIcon)
app.mount('#app')
