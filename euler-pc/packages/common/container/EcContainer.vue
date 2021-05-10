<template>
  <div class="ec-container">
    <!-- 顶部栏 -->
    <div class="ec-container-header" v-if="$slots.header">
      <slot name="header" />
    </div>
    <!-- 主体区 -->
    <div class="ec-container-body" :class="{'ec-container-no-padding': noPadding}">
      <slot />
    </div>
    <!-- 底部栏 -->
    <div class="ec-container-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EcContainer",
  /**
   * 页面容器：默认流式布局
   *  提供插槽header(顶部栏，固定于页面顶部)，使用方式
   *  <template v-slot:header>
   *    <h1>顶部插槽</h1>
   *  </template>
   *  提供插槽footer(底部栏，固定于页面底部)，使用方式
   *  <template v-slot:footer>
   *    <a-button>取消</a-button>
   *  </template>
   */
  props: {
    // 是否显示无内边距
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isInModal: false
    }
  },
  mounted() {
    const setParentHeight = parent => {
      if (parent.parentNode.className.includes("ant-modal")) {
        this.isInModal = true
      }
      if (!parent.parentNode.className.includes('ant-modal-body')) {
        parent.parentNode.style.height = '100%'
      }
      if (parent.parentNode.tagName === 'BODY') {
        parent.parentNode.style.height = '100vh'
      }
      if (!this.isInModal && parent.parentNode.tagName !== 'BODY') {
        setParentHeight(parent.parentNode)
      }
    }
    setParentHeight(this.$el)
  }
}
</script>
