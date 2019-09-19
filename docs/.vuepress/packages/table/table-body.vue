<template>
  <table cellspacing="0" cellpadding="0" border="0">
    <colgroup>
      <col v-if="table.showCheck" />
      <col v-for="(column, index) in columns" />
    </colgroup>
    <tbody>
      <template v-for="(row, index) in data">
        <table-tr :row="row" class="table-tr">
          <td
            v-if="table.showCheck"
            class="td_index"
            style="width:20px"
            :class="{'check-show':hasOneCheck}"
          >
            <span class="td-index_text">{{index+1}}</span>
            <span class="td-index_checkbox">
              <ne-checkbox v-model="row.check" />
            </span>
          </td>
          <td v-for="column in columns" @click="handeRowClick(row)">
            <table-cell :row="row" :column="column"></table-cell>
          </td>
        </table-tr>
      </template>
    </tbody>
  </table>
</template>
<script>
import TableTr from "./table-tr.vue";
import TableCell from "./cell.vue";

export default {
  name: "TableBody",
  components: { TableCell, TableTr },
  props: {
    columns: Array,
    data: Array // rebuildData
  },
  inject: ["table"],
  computed: {
    hasOneCheck() {
      return this.data.some(item => {
        return item.check == true;
      });

    }
  },
  watch:{
    hasOneCheck(val){
         this.table.hasCheck=val;
    }
  },
  methods: {
    handeRowClick(row) {
      if (row.check) {
        row.check = false;
      } else {
        this.$set(row, "check", true);
      };
      this.table.$emit('row-click', row)
    }
  }
};
</script>
<style lang="less" scoped>
.td_index {
  position: relative;
  .td-index_text,
  .td-index_checkbox {
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
    transform: translate3d(-50%, -50%, 0);
    transition: all 0.3s ease;
  }
  .td-index_text {
    opacity: 1;
  }
  .td-index_checkbox {
    opacity: 0;
  }
}
.check-show {
  .td-index_text {
    opacity: 0;
  }
  .td-index_checkbox {
    opacity: 1;
  }
}
.table-tr {
  cursor: pointer;
  &:hover {
    .td-index_text {
      opacity: 0;
    }
    .td-index_checkbox {
      opacity: 1;
    }
  }
}
</style>
