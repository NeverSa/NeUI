<template>
  <button @click="handeClick" class="ne-tab-bar" @mouseover="showText=true" @mouseout="showText=false">
    <i class="iconfont" :class="icon"></i>
    <transition name="fade">
      <span class="ne-tab-bar_text" v-show="showText">{{lable}}</span>
    </transition>
  </button>
</template>

<style lang="less">
</style>

<script>
export default {
  name: "NeTabBar",
  componentName: "NeTabBar",
  props: {
    lable: String || Number,
    icon: String
  },
  data() {
    return {
      showText:false
    };
  },
  created() {},
  computed: {},
  methods: {
   handeClick(){
     this.$emit("click")
   }
  }
};
</script>
<style lang="less" scoped>
.ne-tab-bar {
  color: #808080;
  background: transparent;
  border: none;
  margin: 0px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  transition: all 0.2s ease; 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  i{
    font-size: 16px;
  }
  &:hover {
    color: #ff8e31;
    background: #FFE8D0;
    border-radius: 15px;
      padding: 10px 20px;
  }
}


</style>

