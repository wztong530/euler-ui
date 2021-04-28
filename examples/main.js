import Vue from 'vue'
import AntD from "ant-design-vue"
import App from './App.vue'
import router from './router'
import store from './store'
import "ant-design-vue/dist/antd.less"
import EulerPc from '../euler-pc'
// import { EcContainer } from '../euler-pc'

Vue.config.productionTip = false

Vue.use(AntD)
Vue.use(EulerPc)
// Vue.use(EcContainer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
