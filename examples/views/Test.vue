<template>
  <div>
    <ec-container>
      <template v-slot:header>
        <a-button @click="visible = true">弹窗测试</a-button>
        <ec-modal v-model="visible">
          <template v-slot:title>
            <a-icon type="play-circle" /> 标题
          </template>
        </ec-modal>
      </template>
      <ec-v-layout :items="layoutItems">
        <template v-slot:query>
          <ec-query-panel :col-count="4">
            <ec-query-item :label="queryItems.item0.label">
              <a-select placeholder="请选择" v-model="queryItems.item0.value" mode="multiple"
                        :options="queryItems.item0.options"/>
            </ec-query-item>
            <ec-query-item :label="queryItems.item1.label">
              <a-radio-group name="radioGroup" v-model="queryItems.item1.value"
                             :options="queryItems.item1.options"/>
            </ec-query-item>
            <ec-query-item :label="queryItems.item2.label">
              <a-checkbox-group name="checkboxGroup" v-model="queryItems.item2.value"
                                :options="queryItems.item2.options"/>
            </ec-query-item>
            <template v-slot:inner>
              <ec-query-item :label="queryItems.item3.label">
                <a-input placeholder="请输入" v-model="queryItems.item3.value"/>
              </ec-query-item>
              <ec-query-item :label="queryItems.item4.label">
                <a-time-picker v-model="queryItems.item4.value"/>
              </ec-query-item>
              <ec-query-item :label="queryItems.item5.label">
                <a-date-picker v-model="queryItems.item5.value"/>
              </ec-query-item>
              <ec-query-item :label="queryItems.item6.label">
                <a-range-picker v-model="queryItems.item6.value"/>
              </ec-query-item>
            </template>
          </ec-query-panel>
        </template>
        <template v-slot:table>
          <ec-panel>
            <template v-slot:toolbar-left>
              <a-button type="primary">新增</a-button>
              <a-button style="margin-left: 8px">取消</a-button>
              <a-button style="margin-left: 8px">打印</a-button>
            </template>
            <template v-slot:toolbar-right>
              <div style="display: flex; align-items: center">
                <ec-query-item style="width: 250px" :label="queryItems.item0.label">
                  <a-select placeholder="请选择" v-model="queryItems.item0.value" mode="multiple"
                            :options="queryItems.item0.options"/>
                </ec-query-item>
                <ec-query-item style="width: 250px" :label="queryItems.item1.label">
                  <a-radio-group name="radioGroup" v-model="queryItems.item1.value"
                                 :options="queryItems.item1.options"/>
                </ec-query-item>
                <a-button type="primary">查询</a-button>
                <ec-higher-query>
                  <ec-query-item :label="queryItems.item0.label">
                    <a-select placeholder="请选择" v-model="queryItems.item0.value"
                              mode="multiple" :options="queryItems.item0.options"/>
                  </ec-query-item>
                  <ec-query-item :label="queryItems.item1.label">
                    <a-radio-group name="radioGroup" v-model="queryItems.item1.value"
                                   :options="queryItems.item1.options"/>
                  </ec-query-item>
                  <ec-query-item :label="queryItems.item2.label">
                    <a-checkbox-group name="checkboxGroup" v-model="queryItems.item2.value"
                                      :options="queryItems.item2.options"/>
                  </ec-query-item>
                  <ec-query-item :label="queryItems.item3.label">
                    <a-input placeholder="请输入" v-model="queryItems.item3.value"/>
                  </ec-query-item>
                  <ec-query-item :label="queryItems.item4.label">
                    <a-time-picker v-model="queryItems.item4.value"/>
                  </ec-query-item>
                  <ec-query-item :label="queryItems.item5.label">
                    <a-date-picker v-model="queryItems.item5.value"/>
                  </ec-query-item>
                  <!--<ec-query-item :label="queryItems.item6.label">
                    <a-range-picker v-model="queryItems.item6.value"/>
                  </ec-query-item>-->
                </ec-higher-query>
                <ec-reload />
                <ec-export />
                <ec-setting />
              </div>
            </template>
            <template v-slot:body>
              <ec-h-layout :items="hItems">
                <template v-slot:aa></template>
                <template v-slot:bb></template>
              </ec-h-layout>
            </template>
          </ec-panel>
        </template>
      </ec-v-layout>
      <template v-slot:footer>
        <a-button>取消</a-button>
      </template>
    </ec-container>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      layoutItems: [
        { name: 'query', size: 'auto' },
        { name: 'table' }
      ],
      queryItems: {
        item0: {
          label: "条件零",
          value: [],
          options: [
            {
              value: "0aaa",
              label: "0AAA",
            },
            {
              value: "0bbb",
              label: "0BBB",
            },
          ]
        },
        item1: {
          label: "条件一",
          value: "",
          options: [
            {
              value: "1aaa",
              label: "1AAA",
            },
            {
              value: "1bbb",
              label: "1BBB",
            },
          ]
        },
        item2: {
          label: "条件二",
          value: [],
          options: [
            {
              value: "2aaa",
              label: "2AAA",
            },
            {
              value: "2bbb",
              label: "2BBB",
            },
          ]
        },
        item3: {
          label: "条件三",
          value: "",
        },
        item4: {
          label: "条件四",
          value: undefined,
        },
        item5: {
          label: "条件五",
          value: undefined,
        },
        item6: {
          label: "条件六",
          value: undefined,
        },
      },
      visible: false,
      hItems: [
        { name: 'aa' },
        { name: 'bb' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
