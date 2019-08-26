<template>
  <div class="ne-select-item" @click="handleClick" :class="{
    'is-select':isSelect
  }">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "NeOption",
  componentName: "NeOption",

  data() {
    return {};
  },
  props: {
    value: { type: [Object, String, Number], required: true },
    label: { type: String }
  },
  inject: ["neSelect"],
  methods: {
    handleClick() {
      const { value, label } = this;
      this.neSelect.selectValue = value;
      this.neSelect.selectItems = label;
    }
  },
 computed: {
    isSelect() {
      const {
        value,
        neSelect: {selectValue}
      } = this;
      return selectValue==value
    
     // return selectItems.find(item => item.key === key);
    }
  },
  
  created() {
  },
  watch:{
     ["neSelect.value"]:{
       handler(newValue){
         if(newValue==this.value){
             this.neSelect.selectValue = newValue;
              this.neSelect.selectItems = this.label;
         }
       },
       immediate: true
     }
  },
 

};
</script>
<style lang="less" scoped>
.ne-select-item {
  cursor: pointer;
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  padding: 0px 15px;
  text-align: left;
  transition: all 0.2;
  color: #4a4642;
  &:hover {
    background: #f5f5f5;
    border-radius: 5px;
  }
}
.is-select{
  color:#9D88FF
}
</style>

