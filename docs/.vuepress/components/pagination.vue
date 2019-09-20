<template>
  <div>
    <ne-pagination :total="1000" :page-size="20" :page-count="10" @change="handleChange"></ne-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>



