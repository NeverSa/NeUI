<template>
  <div class="ne-screen_option">
    <span class="label">{{label}}:</span>
    <span class="option_list">
      <button>全部</button>
      <button v-for="item in filterData" @click="selectItem(item)">{{item[value]}}</button>
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
    all: {
      type: Boolean,
      default: true
    },
    keys: {
      type: String,
      default: ""
    }
  },
  model: {},
  data() {
    return {
     
    };
  },
 
  inject: ["screen"],
  computed: {
       filterData(){
            return this.data.filter(item=>{
                console.log(item[this.keys])
             return  item[this.keys]!=="1"
            })
       }
  },
  created() {
    this.screen.selectdata.forEach(element => {
      if (element[this.value]) {
        this.$set(element, "name", element[this.value]);
      }
    });
  },
  methods: {
    selectItem(item) {
      let has = this.screen.selectdata.find(value => {
        return (
          value[this.value] == item[this.value] &&
          value[this.keys] == item[this.keys]
        );
      });
      if (!has) {
        item.name = item[this.value];
        this.screen.selectdata.push(item);
         this.$emit("handelclick",item);
          this.screen.$emit("change",this.screen.selectdata)
      };
     
     
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

