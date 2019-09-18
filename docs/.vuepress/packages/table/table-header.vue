<template>
  <table cellspacing="0" cellpadding="0" border="0">
    <colgroup>
      <col v-for="(column, index) in columns" />
    </colgroup>
    <thead>
      <tr>
        <th v-for="(column, index) in columns">
          <div>
           {{column.title}}
          </div>
        </th>
      </tr>
    </thead>
  </table>
</template>
<script>
import renderHeader from "./header";
export default {
  name: "NeTableHead",
  components: { renderHeader },
  props: {
    prefixCls: String,
    styleObject: Object,
    columns: Array,
    objData: Object,
    data: Array, // rebuildData
    columnsWidth: Object,
    fixed: {
      type: [Boolean, String],
      default: false
    },
    columnRows: Array,
    fixedColumnRows: Array
  },
  created(){
  },
  computed: {
    styles() {
      const style = Object.assign({}, this.styleObject);
      const width = parseInt(this.styleObject.width);
      style.width = `${width}px`;
      return style;
    },
    isSelectAll() {
      let isSelectAll = true;
      if (!this.data.length) isSelectAll = false;
      if (!this.data.find(item => !item._disabled)) isSelectAll = false; // #1751
      for (let i = 0; i < this.data.length; i++) {
        if (
          !this.objData[this.data[i]._index]._isChecked &&
          !this.objData[this.data[i]._index]._isDisabled
        ) {
          isSelectAll = false;
          break;
        }
      }

      return isSelectAll;
    },
    headRows() {
      const isGroup = this.columnRows.length > 1;
      if (isGroup) {
        return this.fixed ? this.fixedColumnRows : this.columnRows;
      } else {
        return [this.columns];
      }
    },
    isSelectDisabled() {
      let isSelectDisabled = false;
      if (!this.data.length) isSelectDisabled = true;
      if (!this.data.find(item => !item._disabled)) isSelectDisabled = true;
      return isSelectDisabled;
    }
  },
  methods: {
    cellClasses(column) {
      return [
        `${this.prefixCls}-cell`,
        {
          [`${this.prefixCls}-hidden`]:
            !this.fixed &&
            column.fixed &&
            (column.fixed === "left" || column.fixed === "right"),
          [`${this.prefixCls}-cell-with-selection`]: column.type === "selection"
        }
      ];
    },
    scrollBarCellClass() {
      let hasRightFixed = false;
      for (let i in this.headRows) {
        for (let j in this.headRows[i]) {
          if (this.headRows[i][j].fixed === "right") {
            hasRightFixed = true;
            break;
          }
          if (hasRightFixed) break;
        }
      }
      return [
        {
          [`${this.prefixCls}-hidden`]: hasRightFixed
        }
      ];
    },
    itemClasses(column, item) {
      return [
        `${this.prefixCls}-filter-select-item`,
        {
          [`${this.prefixCls}-filter-select-item-selected`]:
            column._filterChecked[0] === item.value
        }
      ];
    },
    itemAllClasses(column) {
      return [
        `${this.prefixCls}-filter-select-item`,
        {
          [`${this.prefixCls}-filter-select-item-selected`]: !column
            ._filterChecked.length
        }
      ];
    },
    selectAll() {
      const status = !this.isSelectAll;
      this.$parent.selectAll(status);
    },
    handleSort(index, type) {
      // 在固定列时，寻找正确的 index #5580
      const column = this.columns.find(item => item._index === index);
      const _index = column._index;

      if (column._sortType === type) {
        type = "normal";
      }
      this.$parent.handleSort(_index, type);
    },
    handleSortByHead(index) {
      // 在固定列时，寻找正确的 index #5580
      const column = this.columns.find(item => item._index === index);
      if (column.sortable) {
        const type = column._sortType;
        if (type === "normal") {
          this.handleSort(index, "asc");
        } else if (type === "asc") {
          this.handleSort(index, "desc");
        } else {
          this.handleSort(index, "normal");
        }
      }
    },
    handleFilter(index) {
      this.$parent.handleFilter(index);
    },
    handleSelect(index, value) {
      this.$parent.handleFilterSelect(index, value);
    },
    handleReset(index) {
      this.$parent.handleFilterReset(index);
    },
    handleFilterHide(index) {
      this.$parent.handleFilterHide(index);
    },
    // 因为表头嵌套不是深拷贝，所以没有 _ 开头的方法，在 isGroup 下用此列
    getColumn(rowIndex, index) {
      const isGroup = this.columnRows.length > 1;

      if (isGroup) {
        const id = this.headRows[rowIndex][index].__id;
        return this.columns.filter(item => item.__id === id)[0];
      } else {
        return this.headRows[rowIndex][index];
      }
    }
  }
};
</script>
