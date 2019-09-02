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
    </NeTabButtonGroup>-->

    <ne-select v-model="test">
      <ne-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >{{ item.label }}</ne-option>
    </ne-select>

    <ne-tree :data="data" :show-checkbox="false" @node-click="nodeClick"></ne-tree>
    <ne-dialog v-model="show" title="提示" @conform="conform" width="500px" >
      <div class="content">
        测试撒支持支持支持在
      </div>
    </ne-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1,
      show:true,
      test: "选项4",
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
      multipleInputValue: ["选项2"],
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                   children:[
                     {
                        label: "四级4-2-1",
                     }
                   ]
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  created() {
    this.$message("这是一条消息提示");
  },
  methods:{
    nodeClick(node){
    },
    conform(){
      this.show=false
    }
  }
};
</script>