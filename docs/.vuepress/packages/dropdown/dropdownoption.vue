<template>
  <div :class="[
      'dorpdown-option',
    ]" @mousedown="handleClick">
    <slot>{{ label }}</slot>
  </div>
</template>

<script>
export default {
  name: "NeDropdownOption",
  inject: {
    Dropdown: { default: "Dropdown" }
  },
  props: {
    label: ""
  },
  watch: {
    value(value) {
      this.currentValue = value;
    }
  },

  data() {
    return {
      currentValue: this.value,
      id: this.label,
      isFoucse: false
    };
  },
  computed: {},
  mounted() {},
  methods: {
    handleClick() {
      this.Dropdown.$emit("handleClick", this.label);
    }
  }
};
</script>
<style lang="less" scoped>
.dorpdown-option {
  cursor: pointer;
  padding: 5px;
  &:hover {
    background: #f5f5f5;
    border-radius: 5px;
  }
}
</style>