<template>
  <div>
    <ne-table :columns="columns" :data="data" border>
      <div slot="common">
        <ne-tab-bar lable="查找" icon="ne-bianji"  @click="test()"/>
        <ne-tab-bar lable="导出" icon="ne-bianji"  @click="test()"/>
        <ne-button icon="ne-bianji" @click="test()">默认状态</ne-button>
      </div>
      <div slot="check">
        <ne-tab-bar lable="删除" icon="ne-close"  @click="test()"/>
        <ne-tab-bar lable="编辑" icon="ne-time"  @click="test()"/>
        <ne-button  @click="test()">激活状态</ne-button>
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
          title: "Name",
          key: "name",
          render: (h, params) => {
            return h("div", params.row.date);
          }
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data: []
    };
  },
  methods: {
    rowClick(row) {
      console.log(row);
    },
    test(){
      alert(1)
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