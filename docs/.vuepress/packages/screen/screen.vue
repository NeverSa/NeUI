<template>
  <div class="ne-screen">
    <div class="ne-screen_result">
      <span>{{resultlabel}}></span>
      <span class="result_list">
        <button class="result_list_botton" v-for="item in selectdata">
          {{item.name}}
          <i class="ne-close iconfont"></i>
        </button>
      </span>
    </div>
    <div class="ne-scree_list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NeScreen",
  componentName: "NeScreen",
  props: {
    resultlabel: {
      type: String,
      default: "结果"
    },
    selectdata: {//选中筛选的集合
      type: Array,
      default: []
    }
  },
  model: {
    prop: "selectdata",
    event: "change"
  },
  provide() {
    return {
      screen: this
    };
  },
  data() {
    return {};
  },
    created(){
        
    },
  computed: {},
  methods: {}
};
</script>
<style lang="less" >
.ne-screen {
  .ne-screen_result {
    .result_list {
      .result_list_botton {
        font-size: 14px;
        color: #4a4642;
        border: 1px dashed #ffb463;
        border-radius: 5px;
        background: transparent;
        padding: 5px 15px;
        outline: none;
        .ne-close {
          font-size: 12px;
          color: #ffb463;
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

