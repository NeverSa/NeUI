<template>
  <div>
    <ne-select v-model="select" placeholder="自定义提示" @change="change">
      <ne-option value="1" label="选项1"></ne-option>
      <ne-option value="2" label="选项2"></ne-option>
      <ne-option value="3" label="选项3"></ne-option>
      <ne-option value="4" label="选项4"></ne-option>
    </ne-select>

      <ne-select v-model="select">
      <ne-option value="1" label="选项1"></ne-option>
      <ne-option value="2" label="选项2"></ne-option>
      <ne-option value="3" label="选项3"></ne-option>
      <ne-option value="4" label="选项4"></ne-option>
    </ne-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: "2"
    };
  },
  methods:{
      change(){
          console.log(this.select)
      }
  }
};
</script>
<style scoped>
.ne-select{
    margin-bottom:20px;
}
</style>