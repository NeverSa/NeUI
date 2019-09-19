<template>
  <div class="ne-table">
    <!--表头部分-->
    <div class="ne-table_bar">
      <slot name="common" v-if="!hasCheck"></slot>
      <slot name="check" v-if="hasCheck"></slot>
    </div>
    <div class="ne-table__header-wrapper">
      <table-header :columns="columns"></table-header>
    </div>
    <!--表格主体-->
    <div class="el-table__body-wrapper">
      <table-body :data="cloneData" :columns="columns"></table-body>
    </div>
    <!--左侧固定列-->
    <div class="el-table__fixed"></div>
    <!--右侧固定列-->
    <div class="el-table__fixed-right"></div>
    <!--右侧固定列补丁-->
    <div class="el-table__fixed-right-patch"></div>
    <!--列宽调整代理-->
    <div class="el-table__column-resize-proxy"></div>
  </div>
</template>

<script>
import TableStore from "./TableStore";
import TableHeader from "./table-header";
import TableBody from "./table-body";
import { deepCopy } from "./uitis";
export default {
  name: "NeTable",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
     
    },
     showCheck:{
        type: Boolean,
        default:true,
      },
    
  },
  provide(){
     return {
      table: this
    };
  },
  data() {
    return {
      cloneData: deepCopy(this.data),
      objData: [],
      checkall:false,//全选
      hasCheck:false,//激活操作按钮
    };
  },
  computed: {},
  mounted() {
    console.log(deepCopy(this.data));
  },
  methods: {},
  watch: {
    data: {
      handler(oldval, newval) {
        this.cloneData = deepCopy(this.data);
      },
      deep: true
    }
  },
  components: {
    TableHeader,
    TableBody
  }
};
</script>

<style lang="less" >
.ne-table {
  table {
    margin: 0;
    padding: 0;
    border: none;
    width: 100%;
    th,
    td,
    tr,
    th {
      border: none;
      background: #fff;
    }
  }
  .ne-table__header-wrapper {
    th {
      font-size: 16px;
      color: #4a4642;
      font-weight: 500;
    }
   
  }
  .ne-table_bar{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>