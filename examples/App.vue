<template>
  <div id="app">
    <!-- <ne-button>默认按钮</ne-button>
  <ne-button type="primary" round>主要按钮</ne-button>
  <ne-button type="success" disabled size="medium">成功按钮</ne-button>
  <ne-button type="info" size="small" icon="el-icon-search">信息按钮</ne-button>
  <ne-button type="warning" size="mini">警告按钮</ne-button>
  <ne-button type="danger">危险按钮</ne-button>


    <ne-radio v-model="radio" label="1" @change="change()" name="a">备选项</ne-radio>
     <ne-radio v-model="radio" label="2" @change="change()"  name="a">备选项</ne-radio>


    <ne-radio-group v-model="radio">
        <ne-radio label="1" @change="change()"  >备选项</ne-radio>
        <ne-radio  label="2" @change="change()" >备选项</ne-radio>
    </ne-radio-group> -->
<div style="    margin-top: 200px;">
  <!-- <ne-checkbox v-model="value"  @select="select()">备选项</ne-checkbox>
  <ne-checkbox v-model="value"  @select="select()">备选项</ne-checkbox> -->
</div>
    
    <ne-checkbox-group v-model="checkList" @select="select" :max="2">
    <ne-checkbox :value="1">备选项</ne-checkbox>
    <ne-checkbox :value="2">备选项</ne-checkbox>
     <ne-checkbox :value="3">备选项</ne-checkbox>
    </ne-checkbox-group>  

 <ne-checkbox-group v-model="checkList1" @select="select" >
    <ne-checkbox :value="1">备选项</ne-checkbox>
    <ne-checkbox :value="2">备选项</ne-checkbox>
     <ne-checkbox :value="3">备选项</ne-checkbox>
    </ne-checkbox-group>    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      radio:"1",
      value:true,
      checkList:["1","2"],
      checkList1:["1","2"],
    }
  },
  watch:{
    
  },
  methods:{
    change(ev){
     console.log(this.radio)
    },
    select(){
       console.log(this.checkList)
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
