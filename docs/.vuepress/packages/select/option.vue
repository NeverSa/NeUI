<template>
  <div class="ne-select-item" @click="handleClick" :class="{
    'is-select':isSelect
  }">
    <slot>{{label}}</slot>
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
      if (!this.multiple) {
        this.neSelect.selectItems = [];
        this.neSelect.selectItems.push({
          value,
          label
        });
       this.neSelect.$emit("input", value);
        this.neSelect.$emit("change", value)
      }
    }
  },
  computed: {
    isSelect() {
      const {
        value,
        neSelect: { selectItems }
      } = this;
      return selectItems.find(item => item.value == value);
    }
  },

  created() {},
  watch: {
    ["neSelect.value"]: {
      handler(newValue) {
        if (newValue == this.value) {
          this.neSelect.selectItems = [];
          this.neSelect.selectItems.push({
            value: newValue,
            label: this.label
          });
      
        }
      },
      immediate: true
    }
  }
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
.is-select {
  color: #9d88ff;
}
</style>

