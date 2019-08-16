<template>
  <div
    class="el-check-group"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'NeCheckboxGroup',
    componentName: 'NeCheckboxGroup',
     props: {
        value: { type: [String, Number,Array] },
        disabled: { type: Boolean },
        max:{type:[Number,undefined]}
    },
     model: {
      prop:"value",
      event:"select"
    },
   watch:{
     value(newval){
       this.$emit("select",newval)
     }
   },
    methods: {
   
    },
   
  };
</script>

