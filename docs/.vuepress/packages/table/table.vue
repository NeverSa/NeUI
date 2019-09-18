<template>
  <div class="el-table">
    <!--隐藏列-->
    <div class="hidden-columns"><slot></slot></div>
    <!--表头部分-->
    <div class="el-table__header-wrapper">
        <table-header
        ref="tableHeader"
        :store="store"
       >
      </table-header>
    </div>
    <!--表格主体-->
    <div class="el-table__body-wrapper">
       <table-body  
       ref="TableBody"
       :store="store"
       ></table-body>
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
import TableLayout from "./table-layout";
import TableColumn from "./table-column";
import TableHeader from "./table-header";
import TableBody from "./table-body";
export default {
  name: "NeTable",
  props: {
    dataSource: {
      required: true
    },
    emptyText: {
      default: "没有数据"
    },
    height: [String, Number]
  },
  data() {
    const store = new TableStore(this);
    const layout = new TableLayout({ table: this, store: store });
    return {
      store,
      layout,
      columns: [],
    };
  },
  computed: {
   
  },
  mounted() {
    this.doLayout();
    this.columns = this.store.states.columns;
  },
  methods: {
    doLayout() {
      this.layout.setHeight(this.height);
    },
    clickTr(row){
        this.store.commit("handleRowClick",row)
    },
   
  },
  watch: {
    // dataSource(oldVal, val) {
    //   debugger
    //   this.dataSource = val;
    // }
  },
  components: {
    TableColumn,
    TableHeader,
    TableBody,
  }
};
</script>

<style lang="less" scoped>
</style>