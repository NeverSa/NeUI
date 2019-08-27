<template>
  <div>
    <!-- <NeTabButtonGroup style="margin-top:40px" v-model="active">
      <NeTabButton :lable="1">
        <i slot="icon">a</i>
        测试
      </NeTabButton>
      <NeTabButton :lable="2">
        <i slot="icon">a</i>
        测试
      </NeTabButton>
      <NeTabButton :lable="3">
        <i slot="icon">a</i>
        测试
      </NeTabButton>

      <NeTabButton :lable="4">
        <i slot="icon">a</i>
        现场支持这咋打是
      </NeTabButton>
    </NeTabButtonGroup> -->

    <ne-select v-model="test">
      <ne-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >{{ item.label }}</ne-option>
    </ne-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1,
      test:"选项4",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭",
          disabled: true
        }
      ],
      inputValue: "选项2",
      multipleInputValue: ["选项2"]
    };
  },
  created(){
   this.$message('这是一条消息提示');

  }
};
</script>