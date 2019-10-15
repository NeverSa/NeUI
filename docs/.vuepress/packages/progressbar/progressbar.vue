<template>
  <div class="ne-progressbar" :style="{'width':width}">
    <span class="label" v-if="position=='left'">{{value}}%</span>
    <div class="ne-progressbar-warper">
      <div class="ne-progressbar-bg" :style="{'width':value+'%'}"></div>
      <span class="label_center" v-if="position=='center'">{{value}}%</span>
    </div>
    <span class="label" v-if="position=='right'">{{value}}%</span>
  </div>
</template>
<script>
export default {
  name: "NeProgressbar",
  props: {
    value: { type: [Number, String], default: 0 },
    width: {
      type: [Number, String],
      default: "100%"
    },
    position: {
      type: String,
      default: "center"
    }
  },
  data() {}
};
</script>
<style lang="less" scoped>
.ne-progressbar {
  display: flex;
  .ne-progressbar-warper {
    width: 80%;
    box-sizing: border-box;
    background: #b7ff99;
    margin: 0px 10px;
    height: 30px;;
      position: relative;
    .ne-progressbar-bg {
      background: #ff9999;
      height: 100%;
      transition: all 0.2s ease;
      width: 0px;
    }
    .label_center{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
  }
}
</style>