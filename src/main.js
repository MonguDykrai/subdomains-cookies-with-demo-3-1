import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueRouter from 'vue-router'
import Overview from './components/Overview'
import MagicDoor from './components/MagicDoor'

Vue.use(VueRouter)

Vue.use(iView)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/overview' },
    { path: '/magic-door', component: MagicDoor },
    { path: '/overview', component: Overview }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
