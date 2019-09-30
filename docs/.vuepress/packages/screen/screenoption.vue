<template>
  <div class="ne-screen_option">
    <span class="label">{{label}}:</span>
    <span class="option_list">
      <button v-if="multiple" @click="selectAll()">全部</button>
      <button v-for="item in copydata" @click="selectItem(item)">{{item[value]}}</button>
    </span>
  </div>
</template>



<script>
export default {
  name: "NeScreenOption",
  componentName: "NeScreenOption",
  props: {
    label: {
      type: String,
      default: "选择"
    },
    data: {
      type: Array,
      default: []
    },
    value: {
      type: String,
      default: ""
    },
    keys: {
      type: String,
      default: ""
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  model: {},
  data() {
    return {
      copydata: []
    };
  },
  inject: ["screen"],
  computed: {
    //结果中是否已经存在
    exist() {
      let exist = false;
      this.data.forEach(item => {
        let has = this.screen.selectdata.find(value => {
          return (
            value[this.value] == item[this.value] &&
            value[this.keys] == item[this.keys]
          );
        });
        if (has) {
          exist = true;
        }
      });
      return exist;
    }
  },
  created() {
    this.screen.selectdata.forEach(element => {
      if (element[this.value]) {
        this.$set(element, "name", element[this.value]);
      }
    });
    this.getcopyData();
  },
  watch: {
    "screen.selectdata": {
      handler() {
        this.getcopyData();
      },
      deep: true
    }
  },

  methods: {
    getcopyData() {
      let arr = [];
      this.data.forEach(item => {
        let has = this.screen.selectdata.find(value => {
          return (
            value[this.value] == item[this.value] &&
            value[this.keys] == item[this.keys]
          );
        });
        if (!has) {
          arr.push(item);
        }
      });
      this.copydata = arr;
    },
    selectItem(item) {
      let has = this.screen.selectdata.find(value => {
        return (
          value[this.value] == item[this.value] &&
          value[this.keys] == item[this.keys]
        );
      });
      //非多选模式下只能选中一个
      if (this.multiple == false) {
        if (this.exist) {
          return;
        }
      }

      if (!has) {
        item.name = item[this.value];
        this.screen.selectdata.push(item);
        this.$emit("handelclick", item);
        this.screen.$emit("change", this.screen.selectdata);
        this.getcopyData();
      }
    },
    selectAll() {
      this.data.forEach(item => {
        this.selectItem(item);
      });
    }
  }
};
</script>
<style lang="less" >
.ne-screen_option {
  padding: 8px 0px;
  box-sizing: border-box;
  .label {
    color: #4a4642;
  }
  .option_list {
    button {
      background: #f6f6f8;
      border: none;
      border-radius: 4px;
      color: #808080;
      outline: none;
      margin-right: 8px;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
}
</style>

