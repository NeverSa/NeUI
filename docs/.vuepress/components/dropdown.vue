<template>
  <div>
    <ne-dropdown  @handleClick="handleClick">
      <div slot="label">
        <i class="iconfont ne-ullist" />
      </div>
      <template slot="menu">
        <ne-dropdown-option label="sada"></ne-dropdown-option>
         <ne-dropdown-option label="sada"></ne-dropdown-option>
      </template>
    </ne-dropdown>


     <ne-dropdown  @handleClick="handleClick">
      <div slot="label">
         <ne-button icon="ne-bianji">按钮</ne-button>
      </div>
      <template slot="menu">
        <ne-dropdown-option label="sada"></ne-dropdown-option>
         <ne-dropdown-option label="sada"></ne-dropdown-option>
      </template>
    </ne-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectValue: "1"
    };
  },
  methods: {
    change() {
      console.log(this.check);
    },
    handleClick(a){
    },
  }
};
</script>



