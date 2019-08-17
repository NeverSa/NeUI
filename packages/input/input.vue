<template>
  <div :class="['ne-input']">
    <textarea
      v-if="type === 'textarea'"
      class="textarea-inner"
      v-bind="$attrs"
    />
    <template v-else>
        <div class="ne-inline-input" :class="{'is-focus':isfocus}">
            <span class="input-lable" >
                机构名称
            </span>
                 <input
              :class="['input-inner']"
                 :type="type"
              :value="currentValue"
               @input="inputload"
           
            />
       
        </div>
      
    </template>
</div>
 
</template>

<style lang="less" scoped>
.ne-inline-input {
  border: 1px solid #e6e6e6;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0px;
  position: relative;
  .input-lable{
    text-align: left;
    opacity: 0.6;
    display: inline-block;
    padding-left: 15px;
    margin-bottom: -15px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease
  }
  input {
      width: 100%;
    border: none;
    outline: none;
    padding: 7px 14px;
    height: 48px;
    box-sizing: border-box;
    z-index: 9;
    &::placeholder{
     font-size: 16px;
      color: #979797;
    }
  }
}
.is-focus{
    .input-lable{
        top:10px;
        font-size: 12px;
        color: #424242;
    }
    input{
        margin-top: 14px;
          padding: 0 14px;
              height: 33px;
    }
}
</style>
<script>
export default {
  name: "NeInput",
  componentName: "NeInput",
  props: {
    type: {
      type: String
    },
     value: {
      type: [String, Number],
      default: ""
    },
  },
   model: {
        prop: "value",
        event: "input"
    },
  data() {
    return {
      focus: false,
      currentValue: this.value,
    };
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    }

},
   computed: {
      isfocus(){
          if(this.currentValue!==""){
              return true
          }else{
              return false
          }
      }
    },
  methods: {
    setfocus() {
      this.focus = true;
    },
    setblur(){
            this.focus = false;
    },
     setCurrentValue(value) {
      console.log(value)
      if (value === this.currentValue) return;     
      this.currentValue = value;
    },
    inputload(event){
      let value = event.target.value;      
      this.$emit('input', value)
    }
  }
  
};
</script>
