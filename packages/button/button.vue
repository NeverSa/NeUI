<template>
  <button @click="handleClick" class="ne-button ripple " :style="paddingStyle" :class="[
      type ? 'el-button--' + type : '',
        size ? 'el-button--' + size : '',
      {
        'is-round':round,
        'is-disabled':disabled
      }
    ]">
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <canvas class="zk-ripple" @click="ripple"></canvas>
  </button>
</template>

<script>
export default {
  name: "NeButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    padding: {
      type: Array,
      default: () => {
        return [12, 20, 12, 20];
      }
    },
    size: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: ""
    },
    round: Boolean,
    disabled: Boolean
  },
  data() {
    return {};
  },
  computed: {
    paddingStyle() {
      let style = {};
      if (this.padding.length == 4) {
        style = {
          paddingTop: this.padding[0] + "px",
          paddingRight: this.padding[1] + "px",
          paddingBottom: this.padding[2] + "px",
          paddingLeft: this.padding[3] + "px"
        };
      }
      return style;

      console.log(this.padding);
    }
  },
  methods: {
    ripple(event) {
      if (this.timer) {
        window.cancelAnimationFrame(this.timer);
      }
      this.el = event.target;
      // 执行初始化
      if (!this.initialized) {
        this.initialized = true;
        this.init(this.el);
      }
      this.radius = 0;
      // 点击坐标原点
      this.origin.x = event.offsetX;
      this.origin.y = event.offsetY;
      this.context.clearRect(0, 0, this.el.width, this.el.height);
      this.el.style.opacity = this.opacity;
      this.draw();
    },
    draw() {
      this.context.beginPath();
      // 绘制波纹
      this.context.arc(
        this.origin.x,
        this.origin.y,
        this.radius,
        0,
        2 * Math.PI,
        false
      );
      this.context.fillStyle = this.color;
      this.context.fill();
      // 定义下次的绘制半径和透明度
      this.radius += this.speed;
      this.el.style.opacity -= this.speedOpacity;
      // 通过判断半径小于元素宽度或者还有透明度，不断绘制圆形
      if (this.radius < this.el.width || this.el.style.opacity > 0) {
        this.timer = window.requestAnimationFrame(this.draw);
      } else {
        // 清除画布
        this.context.clearRect(0, 0, this.el.width, this.el.height);
        this.el.style.opacity = 0;
      }
    },
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style lang="less" >
@import "../theme/button.less";
.ne-button {
  position: relative;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: @color-white;
  border: @border-base;
  border-color: @border-color-base;
  color: @color-text-regular;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  text-decoration: none;
  font-weight: @font-size-base;
  border-radius: @border-radius-base;
  canvas{
    position: absolute;
    overflow: hidden;
  }
  &.el-button--primary {
    color: @color-white;
    background: @color-primary;
  }
  &.el-button--success {
    color: @color-white;
    background: @color-success;
  }
  &.el-button--info {
    color: @color-white;
    background: @color-info;
  }
  &.el-button--warning {
    color: @color-white;
    background: @color-warning;
  }
  &.el-button--danger {
    color: @color-white;
    background: @color-danger;
  }
  &.is-round {
    border-radius: 20px;
  }
  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  &.el-button--medium {
    padding: @padding-button-medium !important;
    font-size: 14px;
  }
  &.el-button--small {
    padding: @padding-button-small !important;
    font-size: 12px;
  }
  &.el-button--mini {
    padding: @padding-button-mini !important;
    font-size: 10px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    padding-top: 100%;
    background: transparent;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.ripple {
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }
}
.ripple:active:after {
  transform: scale(0, 0);
  opacity: 0.2;
  transition: 0s;
}
</style>

