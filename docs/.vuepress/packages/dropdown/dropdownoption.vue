<template>
  <div
    class="ne-input-warp"
    :class="{'is_focus':focusClass,'is_error':isShowMes,'is_disabled':disabled}"
  >
    <input
      class="ne-input"
      ref="input"
      :type="type"
      :value="currentValue"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handlefocus"
      :disabled="disabled"
      :class="{'is_active_input':currentValue!==''}"
    />
    <div class="ne-input_placehold" :class="{'is_active_placehold':currentValue!==''}">{{label}}</div>
    <div v-if="isShowMes" class="ne-err_message">{{message}}</div>
  </div>
</template>
<script>
import Emitter from "../mixins/eventbus.js";
export default {
  name: "NeInput",
  mixins: [Emitter],
  props: {
    label: { type: String, default: "" },
    type: { type: String, default: "text" },
    value: { type: String, default: "" },
    disabled: {
      type: Boolean,
      default: false,
    }
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
      isFoucse: false,
    };
  },
  computed: {
    focusClass() {
      return this.isFoucse;
    },
    isShowMes(){
        return this.$parent.isShowMes
    },
    message(){
        return this.$parent.message
    }
  },
  mounted() {
      
      console.log(this)
    if (this.$parent.labelFor) this.$refs.input.id = this.$parent.labelFor;
  },
  methods: {
    handlefocus(e) {
      this.isFoucse = true;
    },
    handleInput(e) {
      const value = e.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("NeFormItem", "form-change", value);
    },
    handleBlur() {
      this.isFoucse = false;
      this.dispatch("NeFormItem", "form-blur", this.currentValue);
    }
  }
};
</script>
<style lang="less" scoped>
.ne-input-warp {
  display: flex;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  position: relative;
  .ne-input {
    border: none;
    outline: none;
    padding: 13px 15px;
    width: 100%;
    margin: 1px;
    border-radius: 4px;
  }
  .is_active_input {
    padding-bottom: 6px;
    padding-top: 20px;
  }
  .ne-input_placehold {
    color: #808080;
    font-size: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    transition: all 0.2s ease;
  }
  .is_active_placehold {
    font-size: 12px;
    top: 28%;
  }
}
.is_focus {
  border: 1px solid #ffb463;
  box-shadow: 0px 0px 0px 3px rgba(255, 180, 99, 0.3);
}
.is_error {
  border: 1px solid #fb463b;
  box-shadow: 0px 0px 0px 3px rgba(251, 70, 59, 0.3);
}
.ne-err_message {
  position: absolute;
  color: #fb463b;
  font-size: 12px;
  right: 15px;
}
.is_disabled {
  cursor: not-allowed;
  border: none;
  .ne-input {
    background: #ebebf0;
    color: #b3b3b3;
  }
}
</style>