<template>
  <div class="ne-tab-button-group" :style="{'width':widthStyle+'px'}">
    <slot></slot>
  </div>

</template>

<style lang="less">
.ne-tab-button-group {
  flex-direction: column;
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
  props: {},
  data() {
    return {
        widthStyle:0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      for (let i = 0; i < this.$el.children.length; i++) {
         this.widthStyle += this.$el.children[i].clientWidth + 50;
         console.log(this.$el.children[i].clientWidth)
      }
    
    });
  },

  methods: {}
};
</script>

