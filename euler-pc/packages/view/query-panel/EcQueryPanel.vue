<template>
  <div class="ec-query-panel">
    <div class="ec-query-panel__content">
      <!-- 默认显示的查询项 -->
      <slot></slot>

      <!-- 隐藏在内部的查询项--通过展开按钮可见 -->
      <slot v-if="!isFold" name="inner"></slot>

      <!-- 操作区 -->
      <div class="ec-query-panel-action" v-if="showAction"
           :style="{width: 1 / colCount * 100 + '%'}">
        <a-button v-if="showReset" @click="__reset">重置</a-button>
        <a-button type="primary" :loading="loading"
                  @click="__query">查询
        </a-button>
        <a-button class="ec-query-panel-btn__link" type="link"
                  v-if="showFold" @click="isFold = !isFold">
          {{isFold ? "展开" : "收起"}}
          <a-icon class="ec-query-action__fold" type="double-right"
                  :class="isFold ? 'ec-query-action__fold-unfold' : 'ec-query-action__fold-fold'"/>
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EcQueryPanel",
  /**
   * 查询面板：
   *  事件：
   *    1.query：点击查询时触发的事件，默认带查询加载效果，停止加载效果可调用事件的回调函数
   *             若不需要加载效果，可设置show-loading属性为false
   *      <ec-query-panel @query="queryHandle">
   *      queryHandle(stop) {
   *        stop() //停止查询加载效果
   *      }
   *    2.reset：点击重置时触发的事件
   *      <ec-query-panel @reset="resetHandle">
   */
  props: {
    // 查询项的列数，大于1的整数，默认3列 (建议不超过4列)
    colCount: {
      type: Number,
      default: 3,
      validator(val) {
        if (val <= 1) {
          Promise.reject(new Error("col-count 需为大于1的整数！"))
        } else {
          return val > 1
        }
      }
    },
    /**
     * 支持统一设置所有查询项的布局模式 (查询项亦可单独设置进行覆盖)
     * 提供 horizontal(水平布局) | vertical(垂直布局)，默认horizontal(水平布局)
     * 水平布局：左侧为文本域，右侧为表单控件
     * 垂直布局：上部为文本域，下部为表单控件
     * 注：垂直布局模式下，labelWidth和labelAlign属性无效，
     *    文本域宽度始终100%，文本域对齐方式始终left
     */
    layout: {
      type: String,
      default: 'horizontal'
    },
    /**
     * 支持统一设置所有查询项的文本域宽度 (查询项亦可单独设置进行覆盖)
     * 单位 px | % (若只有数字则会自动补齐单位px)，默认占33.33%
     * 表单控件自动占满剩余空间，且给予最小值60px
     */
    labelWidth: {
      type: String,
      default: '33.33%'
    },
    /**
     * 支持统一设置所有查询项的文本域对齐方式 (查询项亦可单独设置进行覆盖)，默认right
     * 提供 left | center | right，默认right
     */
    labelAlign: {
      type: String,
      default: 'right'
    },
    // 是否显示展开/收起按钮，用于控制 v-slot:inner的显示隐藏，默认true
    showFold: {
      type: Boolean,
      default: true
    },
    // 是否显示重置按钮，默认true
    showReset: {
      type: Boolean,
      default: true
    },
    // 是否显示查询按钮loading加载效果，默认true
    showLoading: {
      type: Boolean,
      default: true
    },
    // 是否显示整个操作区，默认true
    showAction: {
      type: Boolean,
      default: true
    },
    // 查询区域是否是收起状态，默认false(展开)
    isFold: {
      type: Boolean,
      default: false
    },
  },
  provide() {
    return {
      colCount: this.colCount,
      layout: this.layout,
      labelWidth: this.labelWidth,
      labelAlign: this.labelAlign
    }
  },
  data() {
    return {
      loading: false //查询加载效果
    }
  },
  methods: {
    // 查询
    __query() {
      this.showLoading && (this.loading = true)
      this.$emit("query", this.__stop)
    },
    // 停止loading加载效果
    __stop() {
      this.loading = false
    },
    // 重置
    __reset() {
      this.$emit("reset")
    }
  }
}
</script>

