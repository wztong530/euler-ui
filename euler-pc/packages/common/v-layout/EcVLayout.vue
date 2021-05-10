<template>
  <div class="ec-v-layout" :style="{display: auto ? 'block' : 'flex'}">
    <template v-for="item in ecItems">
      <div class="ec-v-layout-item" :class="{'ec-v-unauto': item.size !== 'auto'}"
           :key="item.name" :style="{ height: item.size, flex: item.flex }">
        <template v-if="item.size === 'auto'">
          <slot :name="item.name" />
        </template>
        <div class="ec-v-layout-item__inner" v-else>
          <slot :name="item.name" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "EcVLayout",
  props: {
    /**
     * 垂直布局容器：
     * 分区配置描述，对象数组
     * [
     *  {
     *    name: 'aaa', //分区名称 <template v-slot:aaa></template>
     *    size: '200px', //分区高度大小，支持 px | % | auto (若只有数字则会自动补齐单位px)
     *    flex: 2, //分区占比 (未设置则默认为 1)
     *  }
     * ]
     * 说明：
     *  0.垂直布局分区，若分区内子元素大小超出分区宽度，则分区会出现水平滚动条
     *  1.分区会依据数组的顺序进行展示
     *  2.name为必须项，不提供default插槽
     *  3.若size为 px | %，则该分区仅占size的大小，flex属性无效，不分配剩余空间
     *  4.若size为 auto，则该分区以分区内子元素大小自动填充，flex属性无效，且始终不分配剩余空间
     *  5.若所有分区均设置了size值：
     *    5.1.总和未超过当前容器高度，则各分区按照其flex(未设置默认为 1)占比分配剩余空间
     *    5.2.总和超过当前容器高度，则布局容器出现垂直滚动条
     *  6.若仅部分分区设置了size值：
     *    6.1.总和未超过当前容器高度，则未设置size的分区按照其flex(未设置默认为1)占比分配剩余空间
     *    6.2.总和超过当前容器高度，则未设置size的分区会给予最小高度20px，且布局容器出现垂直滚动条
     */
    items: {
      type: Array,
      default: () => []
    },
    // 是否使用自动布局(流式布局)
    auto: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ecItems() {
      if (this.items.some(item => !item.size)) {
        // 未全部设置size值
        return this.items.map(({ name, size, flex = 1 }) => {
          size = /^\d+$/.test(size) ? size + "px" : size
          return {
            name,
            size,
            flex: size === 'auto' ? 'none' : (size ? `0 0 ${size}` : `${flex} 0 20px`)
          }
        })
      } else {
        // 全部设置了size值
        return this.items.map(({ name, size, flex = 1 }) => {
          size = /^\d+$/.test(size) ? size + "px" : size
          return {
            name,
            size,
            flex: size === 'auto' ? 'none' : `${flex} 0 ${size}`
          }
        })
      }
    }
  }
}
</script>
