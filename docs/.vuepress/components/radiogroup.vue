<template>
  <div>
    <ne-radio-group @change="change" v-model="check">
      <ne-radio label="1">单选框1</ne-radio>
      <ne-radio label="2">单选框2</ne-radio>
      <ne-radio label="3">单选框3</ne-radio>
    </ne-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      check: 1
    };
  },
  methods: {
    change() {
      console.log(this.check);
    }
  }
};
</script>



