<template>
    <div>
        <ne-radio v-model="check"  label="1" @change="change">单选框1</ne-radio>
       <ne-radio v-model="check" label="2">单选框2</ne-radio>
        <ne-radio v-model="check" label="3" >单选框3</ne-radio>
    </div>
</template>
<script>
export default {
    data(){
        return {
            check:1,
        }
    },
    methods:{
        change(){
            console.log(this.check)
        }
    }
}
</script>



