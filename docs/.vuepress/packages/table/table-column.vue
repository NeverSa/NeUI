<template>
  <td class="td-wrapper c-size-m">
    <span v-show="!Array.isArray(item)">  <slot :row="item" >{{item[prop]}}</slot></span>
  </td>
</template>

<script>
export default {
  name: "NeTableColumn",
  componentName: "NeTableColumn",
  props: {
    label: { type: String, required: true },
    prop: { type: String },
    sort:{type: Boolean, default: false}
  },
  inject: ["neTable"],
  data() {
    return {
      item:[]
    };
  },
  created() {
    this.$nextTick(() => {
      //此处会损耗性能暂时未有好的解决方案
      let dom = this.$el.parentNode;
      this.item = this.neTable.data[dom.getAttribute("data-index")];
      this.neTable.addLabel({
        label:this.label,
        sort:this.sort,
        prop:this.prop,
      });
    });
  }
};
</script>
<style lang="less">
.td-wrapper {
}
</style>