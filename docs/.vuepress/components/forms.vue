<template>
  <div>
    <ne-form ref="form" :model="formData" :rules="rules">
      <ne-form-item prop="name">
        <ne-input v-model="formData.name" label="测试" :disabled="false"></ne-input>
      </ne-form-item>
      <ne-form-item prop="mail">
        <ne-input v-model="formData.mail" label="邮箱" :disabled="false"></ne-input>
      </ne-form-item>
    </ne-form>
    <div>
      <div @click="submitForm">提交</div>
    </div>
     <ne-input v-model="formData.mail" label="邮箱" :disabled="true"></ne-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: { name: "asd", mail: "" },
      rules: {
        name: [{ required: true, message: "不能为空", trigger: "change" }],
        mail: [
          { required: true, message: "不能为空", trigger: "change" },
          { type: "email", message: "邮箱格式不正确", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert("校验成功");
        } else {
          alert("校验失败");
        }
      });
    },
    change() {
      console.log(this.check);
    }
  }
};
</script>



