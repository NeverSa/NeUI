<template>
  <div class="ne-tab-button-group" >
    <slot></slot>
  </div>

</template>

<style lang="less">
.ne-tab-button-group {
    display: inline-block;
flex-direction: row;
  padding: 3px;
  border-radius: 15px;
  background: rgba(242, 242, 242, 1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
  .ne-tab-button:last-child {
    margin-right: 0px;
  }
}
</style>

<script>
export default {
  name: "NeTabButtonGroup",
  componentName: "NeTabButtonGroup",
  props: {
    select:String || Number
  },
  model:{
    prop: 'select',
    event: 'change',
  },
  data() {
    return {
      
    };
  },
  mounted() {
  
  },

  methods: {
   
  }
};
</script>

