<template>
  <div>
    <ne-table :columns="columns1" :data="data1"></ne-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name",
          render: (h, params) => {
            return h("div", [h("strong", params.row.date)]);
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
      data1: [
        // {
        //   name: "John Brown",
        //   age: 18,
        //   address: "New York No. 1 Lake Park",
        //   date: "2016-10-03"
        // },
        // {
        //   name: "Jim Green",
        //   age: 24,
        //   address: "London No. 1 Lake Park",
        //   date: "2016-10-01"
        // },
        // {
        //   name: "Joe Black",
        //   age: 30,
        //   address: "Sydney No. 1 Lake Park",
        //   date: "2016-10-02"
        // },
        // {
        //   name: "Jon Snow",
        //   age: 26,
        //   address: "Ottawa No. 2 Lake Park",
        //   date: "2016-10-04"
        // }
      ]
    };
  },
  created() {
    setTimeout(() => {
      this.data1 = [
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