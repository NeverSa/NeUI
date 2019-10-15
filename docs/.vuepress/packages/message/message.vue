<template>
  <transition name="ne-message-fade" @after-leave="handleAfterLeave">
    <div :class="[
        'el-message',
      ]" :style="positionStyle" v-show="visible">
      <slot>
        <i class="iconfont ne-success" v-if="type=='success'"></i>
        <i class="iconfont ne-warning" v-if="type=='warning'"></i>
        <i class="iconfont ne-error" v-if="type=='error'"></i>
        {{ message }}
      </slot>
    </div>
  </transition>
</template>

<script >
const typeMap = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error"
};
export default {
  data() {
    return {
      visible: false,
      message: "",
      duration: 2000,
      type: "info",
      iconClass: "",
      onClose: null,
      closed: false,
      verticalOffset: 20,
      timer: null
    };
  },
  computed: {
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`
      };
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    }
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {}
};
</script>
<style lang="less" scoped>
.el-message {
  position: fixed;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 32px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  .ne-success {
    color: #67c23a;
    margin: 0px 10px;
  }
  .ne-error {
    color: #f56c6c;
    margin: 0px 10px;
  }
  .ne-warning {
    color: #e6a23c;
    margin: 0px 10px;
  }
}
</style>