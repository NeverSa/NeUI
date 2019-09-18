<template>
  <table class="tableStyle" cellspacing="0" cellpadding="0">
    <col :width="item.width ? item.width : ''" v-for="item in columns" />
    </colgroup>
    <thead>
      <tr class="theadStyle">
        <th class="theadTd" v-for="column in columns">
          <div class="header_sort">
            <span>{{ column.label }}</span>
            <span v-if="column.sortable">
              <i
                @click="sortDown(column)"
                class="iconfont ne-show"
                :class="{'sort_active':column.sort==1}"
              ></i>
              <i
                @click="sortUp(column)"
                class="iconfont ne-closed"
                :class="{'sort_active':column.sort==2}"
              ></i>
            </span>
          </div>
        </th>
      </tr>
    </thead>
  </table>
</template>
<script>
export default {
  name: "TableHeader",
  data() {
    return {
      columns: this.$parent.store.states.columns,
      sort: ""
    };
  },
  methods: {
    sortDown(item) {
      this.$set(item, "sort", 1);
      this.sort = 1;
      let keyVal = item.prop;
      const data = this.$parent.dataSource;

      data.sort((a, b) => {
        return b[keyVal] - a[keyVal];
      });
    },
    sortUp(item) {
      this.$set(item, "sort", 2);
      let keyVal = item.prop;
      const data = this.$parent.dataSource;
      data.sort((a, b) => {
        return a[keyVal] - b[keyVal];
      });
    }
  }
};
</script>
<style lang="less" scoped>
.header_sort {
  display: inline-flex;
  flex-direction: row;
  span {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .iconfont {
      font-size: 12px;
      color: #808080;
      line-height: 10px;
      cursor: pointer;
      margin-top: 3px;
      margin-left: 5px;
    }
    .sort_active {
      color: #60c2ff;
    }
  }
}
</style>
