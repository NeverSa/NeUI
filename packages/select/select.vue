<template>
    <transition name="fade">
    <div
      :class="['ne-select', { 'is-disabled': disabled }]"
         tabindex="0"
      @click.stop="isOpen = !disabled && !isOpen"
      @blur="handleBlur"
    >
      <div class="ne-select-dropdown" v-show="isOpen">
          <slot></slot>
      </div>
    </div>
  </transition>
</template>



<script>
export default {
  name: "NeSelect",
  componentName: "NeSelect",
  props: {
    placeholder: { type: String, default: "请选择" },
    optionKey: { type: String, default: "value" },
    value: { type: [String, Object, Number, Array] },
    multiple: { type: Boolean, default: false },
    collapseTags: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
   model: {
    prop: "value",
    event: "input"
  },
  data() {
    return {
      isOpen: false,
      selectValue: [],
      selectItems: []
    };
  },
   provide() {
    return {
      neSelect: this
    };
  },

  computed: {
    // restValueNum() {
    //   return this.selectItems.length - 1;
    // }
  },
  //   watch: {
  //   value: {
  //     handler(value) {
  //       const { multiple } = this;
  //       const init = value ? value : multiple ? [] : "";
  //       this.selectValue = multiple ? [...init] : init;
  //     },
  //     immediate: true
  //   },
  //   selectValue: {
  //     handler(value) {
  //       this.selectItems = [];
  //     }
  //   }
  // },

    methods: {
    handleDelete(item) {
      const { value } = item;
      this.selectValue = this.selectValue.filter(item => item !== value);
      this.$emit("input", this.selectValue);
      this.$emit("change", this.selectValue);
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
    handleFocus(event) {
      this.$emit("focus", event);
    }
  }
};
</script>
<style lang="less" >
.ne-select {
  position: relative;
  padding: 0 24px 0 12px;
  width: 100%;
  min-height: 32px;
  box-sizing: border-box;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  font-size: 14px;
  color: #979797;
  outline: none;
  transition: all 0.2s;
  &:focus {
    border: 1px solid #209cee;
    box-shadow: 0 0 5px 0 rgba(32, 156, 238, 0.5);
  }
  &.is-disabled {
    background-color: rgba(192, 196, 204, 0.25);
    color: #c0c4cc;
    cursor: not-allowed;
    &:focus {
      box-shadow: none;
      border: 1px solid #ccc;
    }
  }
  .placeholder {
    color: #999;
  }
  .ne-select-dropdown{
    left: 0px;
    right: 0px;
    position: absolute;
    width: 100%;
    top:35px;
    max-height: 304px;
   box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
   overflow-y: scroll;
   padding:0px 20px;
   box-sizing: border-box; 
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
   padding-bottom: 15px;
    padding-top: 15px;
  }
}
</style>

