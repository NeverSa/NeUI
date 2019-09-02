<template>
    <div>
        <ne-checkbox v-model="checkbox">sadas</ne-checkbox> <ne-checkbox v-model="checkbox">sadas</ne-checkbox>
    </div>
   
</template>

<script>

    export default {
        data(){
            return {
                checkbox:true,
            }
        },
        methods: {
            btnClick(e) {
                console.log(e.target.innerText)
            }
        }
    }
</script>

