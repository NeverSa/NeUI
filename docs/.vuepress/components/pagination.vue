<template>
  <div>
    <ne-pagination :total="total" :page-size="pageSize" @change="handleChange"></ne-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      total: 0,
      pageSize: 10
    };
  },
  created() {
    setTimeout(() => {
      this.total = 100;
      this.pageSize = 10;
    }, 1000);
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>



