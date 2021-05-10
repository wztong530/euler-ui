import EcContainer from './packages/common/container/index.js'
import EcVLayout from './packages/common/v-layout/index.js'
import EcHLayout from './packages/common/h-layout/index.js'
import EcPanel from './packages/common/panel/index.js'
import EcModal from './packages/common/modal/index.js'
import EcInline from './packages/common/inline/index.js'
import EcQueryPanel from './packages/view/query-panel/index.js'
import EcQueryItem from './packages/view/query-item/index.js'
import EcHigherQuery from './packages/view/higher-query/index.js'
import EcReload from './packages/view/reload/index.js'
import EcExport from './packages/view/export/index.js'
import EcSetting from './packages/view/setting/index.js'
import "./styles/global.less"

const components = [
  EcContainer,
  EcVLayout,
  EcHLayout,
  EcPanel,
  EcModal,
  EcInline,
  EcQueryPanel,
  EcQueryItem,
  EcHigherQuery,
  EcReload,
  EcExport,
  EcSetting,
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
}

export {
  EcContainer,
  EcVLayout,
  EcHLayout,
  EcPanel,
  EcModal,
  EcInline,
  EcQueryPanel,
  EcQueryItem,
  EcHigherQuery,
  EcReload,
  EcExport,
  EcSetting,
}
