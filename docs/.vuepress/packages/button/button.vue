<template>
  <button @click="handleClick" class="ne-button "  :class="[
      type ? 'el-button--' + type : '',
        size ? 'el-button--' + size : '',
      {
        'is-round':round,
        'is-disabled':disabled
      }
    ]">
    <i :class="icon"  class="iconfont"></i>
    <span >
      <slot></slot>
    </span>
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
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style lang="less" >
.ne-button {
  position: relative;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #FFE8D0;
  font-size: 16px;
  color: #FF8E31;
  border-radius: 15px;
  padding: 10px 20px;
  border: none;
  outline: none;
  transition: all 0.2s ease;
  &:hover{
    background: #FFB463;
    color: #fff;
  }
}

</style>

