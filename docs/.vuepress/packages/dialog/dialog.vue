<template>
  <div v-if="value">
    <div class="mask" @click.stop="close()" v-if="modal"></div>
    <div :class="['ne-dialog']" :style="{'width':width}">
      <slot name="title">
        <div class="title">{{title}}</div>
      </slot>
      <div class="ne-dialog-content">
            <slot></slot>
      </div>
      
      <slot name="bottom">
          <div class="bottom-group">
              <ne-button @click="conform">确认</ne-button>
            <ne-button @click="close">取消</ne-button>
          </div>
      </slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "NeDialog",
  componentName: "NeDialog",
  props: {
    value: false,
    title: "",
    width:{
        type:String,
        default:"auto",
    },
    modal:{
         type:Boolean,
          default:true,
    }
  },
  model: {
    prop: "value",
    event: "close"
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    conform(){
        this.$emit("conform")
    },
    close() {
      this.$emit("close", false);
    }
  }
};
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.5);
}
.ne-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 2;
  background: #fff;
  border-radius: 15px;
  padding: 15px;
  .title {
    text-align: left;
  }
  .ne-dialog-content{
      padding: 15px 0px;
  }
  .bottom-group{

  }
}
</style>
