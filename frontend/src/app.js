import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuesax from 'vuesax' 
import 'vuesax/dist/vuesax.css'  
import './app.scss';
 

Vue.config.productionTip = false
Vue.use(Vuesax)
Vue.mixin({
    data: function() {
      return {
        test:'sdsd'
      }
    }
  })
Vue.prototype.$test = 'My App'

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')