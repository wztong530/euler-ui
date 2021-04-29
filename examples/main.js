import Vue from 'vue'
import AntD from "ant-design-vue"
import App from './App.vue'
import router from './router'
import store from './store'
import "ant-design-vue/dist/antd.less"
import EulerPc from '../euler-pc'
/*import {
  EcContainer,
  EcVLayout,
  EcHLayout,
  EcPanel,
  EcModal,
  EcQueryPanel,
  EcQueryItem,
  EcHigherQuery,
  EcReload,
  EcExport,
  EcSetting
} from '../euler-pc'*/

Vue.config.productionTip = false

Vue.use(AntD)
Vue.use(EulerPc)
/*Vue.use(EcContainer)
Vue.use(EcVLayout)
Vue.use(EcHLayout)
Vue.use(EcPanel)
Vue.use(EcModal)
Vue.use(EcQueryPanel)
Vue.use(EcQueryItem)
Vue.use(EcHigherQuery)
Vue.use(EcReload)
Vue.use(EcExport)
Vue.use(EcSetting) */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
