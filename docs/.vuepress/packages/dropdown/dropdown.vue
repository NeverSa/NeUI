<template>
  <div
    :class="['ne-dropdown', { 'is-hover': trigger === 'hover' && isOpen }]"
    tabindex="0"
    @click.stop="isOpen = !isOpen"
    @blur="trigger !== 'hover' && (isOpen = false)"
  >
    <div class="'dropdown__label'">
      <slot name="label">
        <span>{{ placeholder }}</span>
      </slot>
    </div>
    <div class="dropdown__menu" v-if="trigger === 'hover' || isOpen">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NeDropdown",
  provide() {
    return {
      Dropdown: this
    };
  },
  props: {
    placeholder: { type: String, default: "下拉菜单" },
    trigger: { type: String, default: "click" },
    selectValue: { type: [String, Number] },
    optionKey: { type: String, default: "value" }
  },
  watch: {
    value(value) {
      this.currentValue = value;
    }
  },

  data() {
    return {
      isOpen: this.trigger === "hover",
      selectItem: {}
    };
  },
  model: {
    prop: "selectValue",
    event: "select"
  },
  mounted() {
  
  },
  methods: {
 
  }
};
</script>
<style lang="less" scoped>
.ne-dropdown {
  outline: none;
  position: relative;
}
.dropdown__menu{
   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
   padding: 5px;
   border-radius: 5px;
   position: absolute;
   z-index: 3;
   background: #fff;
   min-width: 100px;;
}
</style>