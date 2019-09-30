<template>
  <div class="ne-screen">
    <div class="ne-screen_result">
      <span>{{resultlabel}}</span>

      <span class="result_list">
        <button class="result_list_botton" v-for="(item,index) in selectdata">
          {{item.name}}
          <i class="ne-close iconfont" @click="deleteNode(item,index)"></i>
        </button>
      </span>
    </div>
    <transition name="fade">
      <div class="ne-scree_list" v-if="open">
        <slot></slot>
      </div>
    </transition>
    <div class="option_btn_warp">
      <button class="option_btn" @click="open=!open">{{open?'收起筛选':'展开筛选'}}</button>
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
    selectdata: {
      //选中筛选的集合
      type: Array,
      default: []
    },
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
    return {
       open:true, 
    };
  },
  created() {},
  computed: {},
  methods: {
    deleteNode(item, index) {
      this.selectdata.splice(index, 1);
    }
  }
};
</script>
<style lang="less" >
.ne-screen {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
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
        margin: 0px 5px;
        .ne-close {
          font-size: 12px;
          color: #ffb463;
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .option_btn_warp {
    display: flex;
    align-items: center;
    justify-items: center;
    margin-top:15px;
    .option_btn {
      padding: 5px 20px;
      background: #ffe8d0;
      color: #ff8e31;
      border-radius: 10px;
      cursor: pointer;
      border: none;
      outline: none;
      margin: 0 auto;
    }
  }
}
</style>

