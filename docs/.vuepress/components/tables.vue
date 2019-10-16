<template>
  <div>
    <ne-table :columns="columns" height="200" :data="data" border ref="table">
      <div slot="left">
         <ne-button icon="ne-bianji" @click="test()">左侧操作</ne-button>
      </div>
      <div slot="common">
        <ne-tab-bar lable="查找" icon="ne-bianji" @click="test()" />
        <ne-tab-bar lable="导出" icon="ne-bianji" @click="exportData()" />
        <ne-button icon="ne-bianji" @click="test()">默认状态</ne-button>
      </div>
      <div slot="check">
        <ne-tab-bar lable="删除" icon="ne-close" @click="test()" />
        <ne-tab-bar lable="编辑" icon="ne-time" @click="test()" />
        <ne-button @click="test()">激活状态</ne-button>
      </div>
    </ne-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 100
        },
        {
          title: "Name",
          key: "name",
          width: 200,
          render: (h, params) => {
            return h("ne-button", params.row.date);
          }
        },
        {
          title: "Age",
          key: "age",
          width: 100,
          sortable: true
        },
        {
          title: "Address",
          key: "address",
          width: 100
        },
        {
          //  fixed:"left",
          title: "Age",
          key: "age",
          width: 100
        },
        {
          title: "Address",
          key: "address",
          width: 100
        },
        {
          title: "Age",
          key: "age",
          width: 100
        },
        {
          title: "Address",
          key: "address",
          width: 100
        },
        {
          title: "Age",
          key: "age",
          width: 100
        },
        {
          title: "Address",
          key: "address",
          width: 100
        },
        {
          title: "Age",
          key: "age",
          width: 100
        }
      ],
      data: []
    };
  },
  methods: {
    exportData() {
      this.$refs.table.exportCsv({
        filename: "原始数据"
      });
    },
    rowClick(row) {
      console.log(row);
    },
    test() {
      alert(1);
    }
  },
  created() {
    setTimeout(() => {
      this.data = [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ];
      console.log(this.data1);
    }, 1000);
  }
};
</script>
<style scoped>
table {
  margin: 0px !important;
}
</style>