<template>
  <div id="app">
    <router-view></router-view>
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
