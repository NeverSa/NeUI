<template>
  <div id="app">
    <ne-button>默认按钮</ne-button>
  <ne-button type="primary" round>主要按钮</ne-button>
  <ne-button type="success" disabled size="medium">成功按钮</ne-button>
  <ne-button type="info" size="small" icon="el-icon-search">信息按钮</ne-button>
  <ne-button type="warning" size="mini">警告按钮</ne-button>
  <ne-button type="danger">危险按钮</ne-button>


    <ne-radio v-model="radio" label="1" @change="change()" name="a">备选项</ne-radio>
     <ne-radio v-model="radio" label="2" @change="change()"  name="a">备选项</ne-radio>


   <!-- <ne-radio-group v-model="radio">
      <ne-radio label="1" @change="change()"  >备选项</ne-radio>
      <ne-radio  label="2" @change="change()" >备选项</ne-radio>
   </ne-radio-group> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      radio:"1"
    }
  },
  watch:{
    
  },
  methods:{
    change(ev){
     console.log(this.radio)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Hnevetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
