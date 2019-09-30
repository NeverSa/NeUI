<template>
  <div class="ne-date_picker">
      <ne-input :label="label" v-model="datavalue" @handlefocus="handlefocus"/>
      <div class="ne-date_pannal" v-show="showpannel">asdsd</div>
  </div>
</template>


<script>
export default {
  name: "NeDatePicker",
  componentName: "NeDatePicker",
  props: {
    label:{
        type:String,
        default:"请选择时间"
    },
  
  },
  model: {
    prop: "value",
    event: "close"
  },
  data() {
    return {
       showpannel:false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    handlefocus(){
      this.showpannel=true
    },
    close() {
      this.$emit("close", false);
    }
  }
};
</script>
<style lang="less" scoped>
.ne-date_picker{
    position: relative;
}
</style>
