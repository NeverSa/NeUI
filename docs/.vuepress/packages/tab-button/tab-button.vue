<template>
  <button class="ne-tab-button" :class="{'active':lable==$parent.select}" @click="changeBtn()">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<style lang="less">
.ne-tab-button {
  
  border-radius: 14px;
  border: none;
  font-size: 14px;
  padding: 8px 30px;
  margin-right: 10px;
  outline: none;
  cursor: pointer;
  background: #f2f2f2;
  &.active{
  background: #ffb463;
  color: #fff;
  }
}
</style>

<script>
export default {
  name: "NeTabButton",
  componentName: "NeTabButton",
  props: {
    lable: String || Number
  },
  data() {
    return {};
  },
  created(){
 
  },
  computed: {},
  methods: {
    changeBtn(){
       this.$parent.$emit('change', this.lable)
    }
  }
};
</script>

