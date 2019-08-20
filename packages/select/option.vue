<template>
    <div class="ne-select-item">
        <slot></slot>
    </div>
</template>


<script>
export default {
  name: "NeOption",
  componentName: "NeOption",
 
  data() {
    return {
      isOpen: false,
      selectValue: [],
      selectItems: []
    };
  },

    methods: {
 
  }
};
</script>
<style lang="less" scoped>
.ne-select-item{
     cursor: pointer;
        height: 36px;
        line-height: 36px;
        box-sizing: border-box;
        padding: 0px 15px;
     text-align: left;
     transition: all 0.2 ;
     color: #4A4642;
    &:hover{
        background: #F5F5F5;
        border-radius: 5px;
    }
}

</style>

