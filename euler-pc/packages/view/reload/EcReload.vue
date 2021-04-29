<template>
  <div class="ec-handy">
    <a-tooltip title="刷新">
      <a-icon class="ec-handy-btn" type="reload" @click="__reload"/>
    </a-tooltip>
  </div>
</template>

<script>
export default {
  name: "EcReload",
  /**
   * 刷新：
   *  事件：
   *    reload：<ec-reload @reload="reloadHandle" />
   */
  methods: {
    __reload() {
      this.$emit('reload')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../styles/view/handy.less";
</style>
