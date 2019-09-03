<template>
  <div>
    <ne-checkbox-group v-model="checkList" @select="select()">
      <ne-checkbox value="复选框A">复选框A</ne-checkbox>
      <ne-checkbox value="复选框b">复选框b</ne-checkbox>
      <ne-checkbox value="复选框c">复选框c</ne-checkbox>
      <ne-checkbox value="复选框d">复选框d</ne-checkbox>
    </ne-checkbox-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkList: ["复选框A", "复选框b"]
    };
  },
  methods:{
      select(){
          console.log(this.checkList)
      }
  }
};
</script>



