<template>
    <button class="ne-tab-button">
        <slot name="icon"></slot>
      <slot></slot>
    </button >
   
 
 
</template>

<style lang="less">
  .ne-tab-button{
          background: #ffb463;
            border-radius: 14px;
            border: none;
            font-size: 14px;
            padding: 8px 30px;
            margin-right: 10px;
            outline: none;
            cursor: pointer;
  }
</style>

<script>
export default {
  name: "NeTabButton",
   componentName: 'NeTabButton',
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
  },
  data() {
    return {};
  },
  computed: {
    isGroup(){
       let parent = this.$parent;
         while (parent) {
          if (parent.$options._componentTag !== 'ne-radio-group') {
            parent = parent.$parent;
          } else {
            this._radioGroup = parent;
            return true;
          }
        }
        return false;
    },
    model: {
      get() {
        return this.isGroup? this.$parent.value:this.value
      },
      set(val) {
         this.isGroup ? this.$parent.$emit("input", val) : this.$emit("input", val);
      }
    }
  },

  methods: {
      handleChange(){
            this.$emit('change', this.model);
      },
  }
};
</script>

