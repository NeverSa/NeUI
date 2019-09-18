<template>
  <div class="el-table">
    <!--表头部分-->
    <div class="el-table__header-wrapper">
      <table-header :columns="columns"></table-header>
    </div>
    <!--表格主体-->
    <div class="el-table__body-wrapper">
      <table-body :data="cloneData" :columns="columns" ></table-body>
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
import TableColumn from "./table-column";
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
      }
    }
  },
  data() {
    return {
      cloneData: deepCopy(this.data),
      objData: []
    };
  },
  computed: {},
  mounted() {
    console.log(deepCopy(this.data));
  },
  methods: {},
  watch: {
            data: {
                handler (oldval,newval) {
                 this.cloneData = deepCopy(this.data);
                },
                deep: true
            },
          
       
  },
  components: {
    TableColumn,
    TableHeader,
    TableBody
  }
};
</script>

<style lang="less" scoped>
</style>