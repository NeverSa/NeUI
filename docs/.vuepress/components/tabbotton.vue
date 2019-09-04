<template>
  <div>
    <div class="item">
      <ne-tab-button-group v-model="active" @change="change">
        <ne-tab-button lable="1">按钮1</ne-tab-button>
        <ne-tab-button lable="2">按钮2</ne-tab-button>
        <ne-tab-button lable="3">按钮3</ne-tab-button>
      </ne-tab-button-group>
    </div>

    <div class="item">
      <ne-tab-button-group v-model="active" @change="change">
        <ne-tab-button lable="1">
          <i class="iconfont ne-bianji" name="icon"></i>
          按钮1
        </ne-tab-button>
        <ne-tab-button lable="2">按钮2</ne-tab-button>
        <ne-tab-button lable="3">按钮3</ne-tab-button>
      </ne-tab-button-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1
    };
  },
  methods: {
    change() {
      console.log(this.active);
    }
  }
};
</script>



