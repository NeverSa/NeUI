<template>
  <div class="ne-tab">
    <div class="tab_option">
      <ne-button>操作</ne-button>
    </div>
    <table>
      <thead>
        <tr class="tr-wrapper">
          <th></th>
          <th v-for="(item, index) in labels" :key="index" @click="SortBy(item)">
            {{ item.label }}
            <span class="label_sort" v-if="item.sort"></span>
          </th>
        </tr>
      </thead>
      <tbody class="table__body-wrapper">
        <tr v-for="(item, index) in copDaya" :key="index" :data-index="index" class="tr-wrapper">
          <td>
            <div class="solt_check" :class="{'is-check':IsCheck}">
              <span class="ne-table-order">{{index+1}}</span>
              <span class="ne-table-checkbox">
                <ne-checkbox v-model="item.check"></ne-checkbox>
              </span>
            </div>
          </td>
          <slot :item="item"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "NeTable",
  componentName: "NeTable",
  props: {
    data: { type: Array, default: () => [] },
    align: { type: String, default: "center" }
  },
  data() {
    return {
      labels: [],
      copDaya: JSON.parse(JSON.stringify(this.data))
    };
  },
  provide() {
    return {
      neTable: this
    };
  },
  computed: {
    IsCheck() {
      return this.copDaya.some(item => {
        return item.check;
      });
    }
  },
  methods: {
    //初始化表头
    addLabel(label) {
      const { labels } = this;
      const existItem = labels.find(item => item.label === label.label);
      if (existItem) {
        existItem.colspan += 1;
      } else {
        labels.push({
          label: label.label,
          sort: label.sort,
          prop: label.prop,
          colspan: 1
        });
      }
    },
    //字段排序
    SortBy(item) {
      if (!item.sort) {
        return;
      }

      let newarr = this.copDaya.sort(this.compare(item.prop));
      newarr.forEach((items, index) => {
        this.$set(this.copDaya, index, items);
      });
      console.log(this.copDaya);
    },

    compare(prop) {
      return function(obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
          val1 = Number(val1);
          val2 = Number(val2);
        }
        if (val1 < val2) {
          return -1;
        } else if (val1 > val2) {
          return 1;
        } else {
          return 0;
        }
      };
    }
  }
};
</script>
<style lang="less" scoped>
.ne-tab {
  .tab_option {
    display: flex;
    justify-content: flex-end;
  }
  table {
    border: none;
    width: 100%;
    thead {
      th {
        font-size: 16px;
        color: #4a4642;
        font-weight: 600;
        cursor: pointer;
      }
    }
    tbody {
      td {
        font-size: 14px;
        color: #4a4642;
        padding: 15px;
      }
    }
    .table__body-wrapper {
      tr {
        .solt_check {
          display: block;
        }
        .ne-table-order {
          opacity: 1;
          transition: all 0.2s ease;
        }
        .ne-table-checkbox {
          opacity: 0;
          margin-left: -16px;
          transition: all 0.2s ease;
        }
        cursor: pointer;
        &:hover {
          .ne-table-order {
            opacity: 0;
          }
          .ne-table-checkbox {
            opacity: 1;
          }
        }
        .is-check {
          .ne-table-order {
            opacity: 0 !important;
          }
          .ne-table-checkbox {
            opacity: 1 !important;
          }
        }
      }
    }
  }
}
</style>