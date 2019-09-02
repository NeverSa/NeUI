<template>
    <label class="ne-radio" :class="{'is-disabled':disabled}">
      <span class="ne-radio__input" :class="{'is-select':label==model}">
          <span class="ne-radio__model" ></span>
         <input type="radio" :name="name" :value="label" v-model="model"
      @change="handleChange" :disabled="disabled">
      </span>
      <span class="ne-radio__label">
         <slot></slot>
          <template v-if="!$slots.default">{{label}}</template>
      </span>
      
    </label>
 
 
</template>

<style lang="less">
//  @import "../theme/radio.less";
.ne-radio{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #000;
  font-size: 14px;
  padding: 4px 8px ;
  border-radius: 15px;
  cursor: pointer;
  &:hover{
    background: rgba(255,180,99,0.3);
    .ne-radio__model{
      border-color:  #FFB463 !important
    }
  }
  .ne-radio__input{
    display: block;
  
    .ne-radio__model{
      width: 16px;
      height: 16px;
      box-sizing: border-box;
      border: 2px solid #E6E6E6;
      border-radius: 50%;
      display: inline-block;
    }
      &.is-select{
      .ne-radio__model{
            border: 6px solid #FFB463;
      }
    }
    input{
      position: absolute;
      opacity: 0;
      width:100%;
      height:100%;

    }
  }
  .ne-radio__label{
     display: block;
    margin-left: 8px;
  }

}
</style>

<script>
export default {
  name: "NeRadio",
   componentName: 'NeRadio',
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

