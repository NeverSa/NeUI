<template>
  <div>
    <ne-pagination 
    :total="1000"
    :page-size="20"
    @change="handleChange"></ne-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: { current: 1, total: 80, pageSize: 10 }
    };
  },
  methods: {
    change() {
      console.log(this.check);
    }
  }
};
</script>



