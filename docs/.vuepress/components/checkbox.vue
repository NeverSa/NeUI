<template>
    <div>
        <ne-checkbox v-model="check1" @select="select">复选框1</ne-checkbox>
        <ne-checkbox v-model="check2">复选框2</ne-checkbox>
         <ne-checkbox v-model="check1">复选框3</ne-checkbox>
        <ne-checkbox v-model="check2">复选框4</ne-checkbox>
    </div>
</template>
<script>
export default {
    data(){
        return {
            check1:true,
            check2:false
        }
    },
    methods:{
        select(){
            console.log(this.check1)
        }
    }
}
</script>



