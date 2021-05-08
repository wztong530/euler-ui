<template>
  <div class="ec-higher-query">
    <!-- 按钮 -->
    <a-button class="ec-higher-query-btn" type="link" @click="visible = !visible">
      高级<a-icon class="ec-higher-query__icon" type="down" />
    </a-button>

    <!-- 高级查询面板抽屉 -->
    <a-drawer :visible="visible" title="高级查询" class="ec-higher-query-panel__wrapper"
              :width="ecWidth" :drawer-style="{ height: ecHeight }"
              :mask="mask" :mask-closable="maskClosable" @close="visible = false">
      <div class="ec-higher-query-panel__body">
        <div class="ec-higher-query-items__box">
          <div class="ec-higher-query-items">
            <ec-query-panel :show-action="false" :col-count="colCount" :layout="layout"
                            v-bind="$attrs">
              <slot />
            </ec-query-panel>
          </div>
        </div>
        <div class="ec-higher-query-scheme">
          <div class="ec-higher-query-scheme__title">保存的方案</div>
          <div class="ec-higher-query-scheme__box">
            <div class="ec-higher-query-scheme-items">
              <div class="ec-higher-query-scheme-item" v-for="i in 10" :key="i">
                <a-icon style="color: #909399; margin-right: 4px;" type="file-search" />
                <div class="ec-ellipsis-1">生产查询方案{{i}}</div>
                <a-icon class="ec-higher-query-scheme-item__delete" type="delete" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ec-higher-query-panel__footer">
        <a-button @click="__saveScheme">保存查询方案</a-button>
        <a-button style="margin-left: 8px" @click="__reset">重置</a-button>
        <a-button style="margin-left: auto" @click="visible = false">取消</a-button>
        <a-button style="margin-left: 8px" type="primary" :loading="loading"
                  @click="__query">查询</a-button>
      </div>
    </a-drawer>

    <!-- 保存查询方案弹窗 -->
    <ec-modal title="请输入查询方案的名称" :keyboard="false" :mask-closable="false"
              width="380px" height="168px" top="25vh" v-model="schemeVisible"
              @ok="__saveSchemeOk">
      <div style="height: 100%; padding: 24px">
        <a-input placeholder="请输入" v-model="schemeName" />
      </div>
    </ec-modal>
  </div>
</template>

<script>
import EcQueryPanel from "../query-panel/EcQueryPanel"
import EcModal from "../../common/modal/EcModal"

export default {
  name: "EcHigherQuery",
  /**
   * 高级查询：
   * 属性：
   *  colCount、Layout、labelWidth、labelAlign 与EcQueryPanel的使用描述一致，
   *  但在此组件中 colCount默认为 2(2列)，layout默认为 horizontal(水平布局)
   * 事件：
   *    1.query：点击查询时触发的事件，默认带查询加载效果，停止加载效果可调用事件的回调函数
   *             若不需要加载效果，可设置show-loading属性为false
   *      <ec-higher-query @query="queryHandle">
   *      queryHandle(stop) {
   *        stop() //停止查询加载效果
   *      }
   *    2.reset：点击重置时触发的事件
   *      <ec-higher-query @reset="resetHandle">
   */
  components: {
    EcQueryPanel,
    EcModal
  },
  props: {
    // 面板抽屉宽度，仅支持单位px(若只有数字则会自动补齐单位px)，默认 750px
    width: {
      type: String,
      default: '750px'
    },
    // 面板抽屉高度，仅支持单位px(若只有数字则会自动补齐单位px)，默认350px
    height: {
      type: String,
      default: '350px'
    },
    // 是否展示遮罩层，默认true
    mask: {
      type: Boolean,
      default: true
    },
    // 点击蒙层是否允许关闭，默认true
    maskClosable: {
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
    // 查询项的列数，默认2列
    colCount: {
      type: Number,
      default: 2,
      validator(val) {
        if (val <= 1) {
          Promise.reject(new Error("col-count 需为大于1的整数！"))
        } else {
          return val > 1
        }
      }
    },
    // 统一设置所有查询项的布局模式 (查询项亦可单独设置进行覆盖)，默认horizontal(水平布局)
    layout: {
      type: String,
      default: 'horizontal'
    }
  },
  data() {
    return {
      visible: false, //显示高级查询弹窗
      schemeVisible: false, //显示保存查询方案弹窗
      schemeName: '', //查询方案名称
      loading: false //查询加载效果
    }
  },
  computed: {
    ecWidth() {
      return /^\d+$/.test(this.width) ? this.width + "px" : this.width
    },
    ecHeight() {
      return /^\d+$/.test(this.height) ? this.height + "px" : this.height
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
    },
    // 保存查询方案
    __saveScheme() {
      this.schemeVisible = true
      this.schemeName = ''
    },
    // 确定保存查询方案
    __saveSchemeOk() {
      this.schemeVisible = false
      console.log(this.schemeName)
    },
  }
}
</script>

<style lang="less">
@import "../../../styles/view/higher-query.less";
</style>
