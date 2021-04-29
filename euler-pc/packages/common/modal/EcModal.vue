<template>
  <a-modal
    v-bind="$attrs"
    v-on="$listeners"
    v-model="visible"
    :body-style="{ padding: 0 }"
    :dialog-class="`ec-modal ${hasFooter ? '' : 'no-footer'}`"
    :dialog-style="{ height: ecHeight, top: ecTop }"
  >
    <slot></slot>
    <template v-if="$slots.title" v-slot:title>
      <slot name="title" />
    </template>
    <template v-if="$slots.footer" v-slot:footer>
      <slot name="footer" />
    </template>
  </a-modal>
</template>

<script>
export default {
  name: "EcModal",
  /**
   * 弹窗：
   * 1.兼容AntD的Modal的API和事件 (bodyStyle、dialogStyle、dialogClass已被占用，不可用)
   * 2.仅支持通过 v-model='xxx'控制弹窗是否可见
   * 3.可通过height属性控制弹窗的高度，默认400px，支持 px | % | vh (若只有数字则会自动补齐单位px)
   * 4.可通过top属性控制弹窗距页面顶部的距离，默认100px，支持 px | % | vh (若只有数字则会自动补齐单位px)
   */
  inheritAttrs: false,
  props: {
    // 是否显示弹窗 v-model='xxx'
    value: {
      type: Boolean,
      default: false
    },
    // 弹窗高度 支持 px | % | vh
    height: {
      type: String,
      default: '400px'
    },
    // 弹窗距页面顶部的距离 支持 px | % | vh
    top: {
      type: String,
      default: '100px'
    }
  },
  computed: {
    visible: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    ecHeight() {
      return /^\d+$/.test(this.height) ? this.height + "px" : this.height
    },
    ecTop() {
      return /^\d+$/.test(this.top) ? this.top + "px" : this.top
    },
    hasFooter() {
      return !(this.$attrs.footer === null)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../styles/common/modal.less";
</style>
