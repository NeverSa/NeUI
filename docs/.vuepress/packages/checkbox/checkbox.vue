<template>
  <label
    :class="[
        'ne-checkbox',
        { 'is-checked': isChecked },
        { 'is-disabled': disabled }
    ]"
    @click.stop="handleClick"
  >
    <span class="checkbox-inner"></span>
    <input
      v-if="false"
      type="checkbox"
      v-bind="$attrs"
      :value="model"
      @click.stop
    >
    <slot></slot>
  </label>

</template>

<style lang="less">
.ne-checkbox {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .checkbox-inner {
    width: 16px;
    height: 16px;
    border: 3px solid #e6e6e6;
    display: inline-flex;
    box-sizing: border-box;
    border-radius: 3px;
    margin-right: 5px;
    position: relative;
    justify-content: center;
    align-items: center;
    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background: #ffb463;
      border-radius: 2px;
      opacity: 0;
      transition: all 200ms ease;
    }
  }
}
.is-checked {
  .checkbox-inner {
    &::after {
      opacity: 1;
    }
  }
}
</style>

<script>
export default {
  name: "NeCheckbox",
  componentName: "NeCheckbox",
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: [Boolean],
      default: false
    },
    propValue: {
      type: [String, Number, Boolean]
    }
  },
  model: {
    prop: "propValue",
    event: "select"
  },
  data() {
    return {};
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options._componentTag !== "ne-checkbox-group") {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    isChecked() {
      if (!this.isGroup) {
        return this.model;
      } else {
        return this.$parent.value.some(item => item == this.value);
      }
    },
    model: {
      get() {
        if (this.isGroup) {
          return this.$parent.value;
        } else {
          return this.propValue;
        }
      },
      set(val) {
        this.$emit("select", val);
      }
    }
  },

  methods: {
    handleClick(event) {
      if (!this.isGroup) {
        this.model = !this.model;
      } else {
        if (this.model.some(item => item == this.value)) {
          this.model.splice(this.model.findIndex(item => item==this.value), 1)
          
        } else {
          if(this.$parent.max!==undefined&& this.model.length>=this.$parent.max){
            return
          }
          this.model.push(this.value.toString());
        }
      }
    }
  }
};
</script>

