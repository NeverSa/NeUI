<template>
  <table cellspacing="0" cellpadding="0" border="0" >
    <colgroup>
      <col v-for="(column, index) in columns"  />
    </colgroup>
    <tbody>
      <template v-for="(row, index) in data">
        <table-tr :row="row">
          <td v-for="column in columns" >
            <table-cell
              :row="row"
              :column="column"
            ></table-cell>
          </td>
        </table-tr>
      </template>
    </tbody>
  </table>
</template>
<script>
// todo :key="row"
import TableTr from "./table-tr.vue";
import TableCell from "./cell.vue";

export default {
  name: "TableBody",
  components: { TableCell, TableTr },
  props: {
    prefixCls: String,
    styleObject: Object,
    columns: Array,
    data: Array, // rebuildData
    objData: Object,
    columnsWidth: Object,
    fixed: {
      type: [Boolean, String],
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    rowKey: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    expandRender() {
      let render = function() {
        return "";
      };
      for (let i = 0; i < this.columns.length; i++) {
        const column = this.columns[i];
        if (column.type && column.type === "expand") {
          if (column.render) render = column.render;
        }
      }
      return render;
    }
  },
  methods: {
    rowChecked(_index) {
      return this.objData[_index] && this.objData[_index]._isChecked;
    },
    rowDisabled(_index) {
      return this.objData[_index] && this.objData[_index]._isDisabled;
    },
    rowExpanded(_index) {
      return this.objData[_index] && this.objData[_index]._isExpanded;
    },
    handleMouseIn(_index) {
      this.$parent.handleMouseIn(_index);
    },
    handleMouseOut(_index) {
      this.$parent.handleMouseOut(_index);
    },
    clickCurrentRow(_index) {
      this.$parent.clickCurrentRow(_index);
    },
    dblclickCurrentRow(_index) {
      this.$parent.dblclickCurrentRow(_index);
    }
  }
};
</script>
