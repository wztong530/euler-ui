<template>
  <div class="ec-query-item" :class="{
    alone: colCount === 1,
    vertical: layout === 'vertical' || itemLayout === 'vertical'
  }"
       :style="{width: col / colCount * 100 + '%'}">
    <div class="ec-query-item__label" v-if="label" :style="{
      width: ecWidth,
      'text-align': labelAlign || itemLabelAlign
    }" v-cloak>{{label}}</div>
    <div class="ec-query-item__control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "EcQueryItem",
  props: {
    // 文本域内容，若不设置则不显示文本域
    label: {
      type: String,
      default: ''
    },
    // 本项占的列数 (单独使用时会独占一行，即100%，可在外部设置该组件的宽度样式)
    col: {
      type: Number,
      default: 1
    },
    /**
     * 查询项的布局模式：
     * 提供 horizontal(水平布局) | vertical(垂直布局)，默认horizontal(水平布局)
     * 水平布局：左侧为文本域，右侧为表单控件
     * 垂直布局：上部为文本域，下部为表单控件
     * 注：垂直布局模式下，labelWidth和labelAlign属性无效，
     *    文本域宽度始终100%，文本域对齐方式始终left
     */
    layout: {
      type: String,
      default: ''
    },
    /**
     *  文本域宽度，单位 px | % (若只有数字则会自动补齐单位px)，默认占33.33%
     *  表单控件自动占满剩余空间，且给予最小值60px
     *  (单独设置后会覆盖父组件的统一设置)
     */
    labelWidth: {
      type: String,
      default: ''
    },
    /**
     * 文本域对齐方式，提供 left | center | right，默认right
     * (单独设置后会覆盖父组件的统一设置)
     */
    labelAlign: {
      type: String,
      default: ''
    }
  },
  inject: {
    colCount: {
      default: 1
    },
    itemLayout: {
      from: 'layout',
      default: 'horizontal'
    },
    itemLabelWidth: {
      from: 'labelWidth',
      default: '33.33%'
    },
    itemLabelAlign: {
      from: 'labelAlign',
      default: 'right'
    }
  },
  computed: {
    ecWidth() {
      const width = this.labelWidth || this.itemLabelWidth
      return /^\d+$/.test(width) ? width + "px" : width
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../styles/view/query-item.less";
</style>
