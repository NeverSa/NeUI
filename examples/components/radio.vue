<template>
    <div>
        <ne-input type="text" v-model="a"  placeholder="测试"></ne-input>

    <NeTabButtonGroup style="margin-top:40px" v-model="active">
 <NeTabButton :lable="1">
        <i slot="icon">a</i>
        测试
    </NeTabButton>
      <NeTabButton :lable="2">
        <i slot="icon">a</i>
        测试
    </NeTabButton>
      <NeTabButton :lable="3">
        <i slot="icon">a</i>
        测试
    </NeTabButton>
  
 <NeTabButton :lable="4">
        <i slot="icon">a</i>
        现场支持这咋打是
    </NeTabButton>
    </NeTabButtonGroup>

 
  

    </div>
</template>
<script>
export default {
    data() {
        return {
            active:1
        }
    },
}
</script>