<template>
  <div>
    <ne-table  :dataSource="tableData">
      <ne-table-column label="日期" prop="date" :sortable="true">
       
      </ne-table-column>
      <ne-table-column label="姓名" prop="name" :sortable="true"></ne-table-column>
      <ne-table-column label="地址" prop="address"></ne-table-column>
    </ne-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        // {
        //   date: "1",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄"
        // },
        // {
        //   date: "3",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1517 弄"
        // },
        // {
        //   date: "4",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1519 弄"
        // },
        // {
        //   date: "5",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄"
        // }
      ]
    };
  },
  created(){
    setTimeout(()=>{
      this.tableData=[
        {
          date: "1",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "3",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ];
      console.log(this.tableData)
    },1000);

     setTimeout(()=>{
      this.tableData=[
        {
          date: "3",
          name: "asd",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "3",
          name: "asd",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "3",
          name: "asd",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "5",
          name: "asd",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ];
      console.log(this.tableData)
    },5000);
  }

  
};
</script>