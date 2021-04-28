<template>
  <div class="ec-panel">
    <div class="ec-panel-header" v-if="hasHeaderBox">
      <div class="ec-panel-header-main">
        <div class="ec-panel-header__content" v-if="$slots.header">
          <slot name="header" />
        </div>
        <template v-if="$slots.header">
          <div class="ec-panel-header__left">
            <slot name="header-left">
              <div class="ec-title" style="margin: 2px 0;">{{title}}</div>
            </slot>
          </div>
          <div class="ec-panel-header__middle">
            <slot name="header-middle" />
          </div>
          <div class="ec-panel-header__right">
            <slot name="header-right" />
          </div>
        </template>
      </div>
      <div class="ec-panel-header__tool">
        <a-icon class="ec-panel-header__tool__btn" v-if="showHFold" type="double-left" />
      </div>
    </div>
    <div class="ec-panel-toolbar" v-if="hasToolbarBox">
      <div class="ec-panel-toolbar__content" v-if="$slots.toolbar">
        <slot name="toolbar" />
      </div>
      <template v-if="!$slots.toolbar">
        <div class="ec-panel-toolbar__left">
          <slot name="toolbar-left" />
        </div>
        <div class="ec-panel-toolbar__middle">
          <slot name="toolbar-middle" />
        </div>
        <div class="ec-panel-toolbar__right">
          <slot name="toolbar-right" />
        </div>
      </template>
    </div>
    <div class="ec-panel-body" v-if="$slots.body">
      <div class="ec-panel-body__inner">
        <slot name="body" />
      </div>
    </div>
    <div class="ec-panel-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EcPanel",
  /**
   * 面板共分四个区：
   *  1.header(标题栏)：分为header-left(左)、header-middle(中)、header-right(右)及面板控制按钮区
   *    1.1.左：一般放标题文字，
   *           可通过title属性直接设置面板标题 <ec-panel title="面板标题">
   *           也可通过v-slot:header-left插槽自定义标题栏左侧区域的内容
   *    1.2.中：根据需要使用
   *    1.3.右：一般可放一些提示信息或简单说明信息
   *    1.4.面板控制按钮：可通过属性控制其是否展示，如 :show-h-fold="true"
   *    1.5.可单独使用header插槽独占一行标题栏进行布局，即v-slot:header，
   *        若使用了header插槽则header-left(左)、header-middle(中)、header-right(右)插槽无效
   *    1.6.仅在使用header/header-left/header-middle/header-right的情况下提供面板控制按钮
   *  2.toolbar(工具栏)：分为toolbar-left(左)、toolbar-middle(中)、toolbar-right(右)
   *    2.1.左：一般为操作功能区，如新增、删除等操作按钮
   *    2.2.中：根据需要使用
   *    2.3.右：简单查询区(快速搜索栏)或过滤区
   *    2.4.可单独使用toolbar插槽独占一行标题栏进行布局，即v-slot:toolbar，
   *        若使用了toolbar插槽则toolbar-left(左)、toolbar-middle(中)、toolbar-right(右)插槽无效
   *  3.body(主内容区)：可放置表格、列表、树、表单等内容，
   *    该区会自动占满面板除其他区域外的剩余空间，主内容区的子元素若超出当前的大小，会出现滚动条
   *  4.footer(底部栏)：一般放置操作按钮，说明等内容
   *  5.面板结构及所提供的插槽：
   *    <template v-slot:header-left></template>
   *    -- header | (header-left | header-middle | header-right)
   *    -- toolbar | (toolbar-left | toolbar-middle | toolbar-right)
   *    -- body
   *    -- footer
   *  6.面板控制按钮：
   *    6.1.showHFold：是否展示水平折叠按钮，默认false
   *  7.具体可根据实际的需要灵活使用
   *  8.注：header系、toolbar系或footer的子元素未进行样式控制，
   *       若导致水平大小超出面板宽度，则面板会出现水平滚动条，
   *       若导致垂直大小超出面板高度，则面板会出现垂直滚动条，
   *       且未防止body区消失，已提前设置body的最小高度100px
   */
  props: {
    // 面板标题
    title: {
      type: String,
      default: ''
    },
    // 是否展示水平折叠按钮
    showHFold: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasHeaderBox() {
      const headerBoxMap = [
        this.title,
        'header' in this.$slots,
        'header-left' in this.$slots,
        'header-middle' in this.$slots,
        'header-right' in this.$slots
      ]
      return headerBoxMap.some(v => v)
    },
    hasToolbarBox() {
      const toolbarBoxMap = [
        'toolbar' in this.$slots,
        'toolbar-left' in this.$slots,
        'toolbar-middle' in this.$slots,
        'toolbar-right' in this.$slots
      ]
      return toolbarBoxMap.some(v => v)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../styles/panel.less";
</style>
