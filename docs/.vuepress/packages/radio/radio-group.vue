<template>
  <div
    class="el-radio-group"
    role="radiogroup"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'NeRadioGroup',
    componentName: 'NeRadioGroup',
     props: {
        value: { type: [String, Number] },
        disabled: { type: Boolean }
    },
     model: {
      
    },
    watch:{
      value(){
        this.$emit("change",this.value)
      }
    }
 
   
  };
</script>

