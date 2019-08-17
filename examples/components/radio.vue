<template>
    <div>
        <ne-input type="text" v-model="a"  placeholder="测试"></ne-input>

    <NeTabButtonGroup>
 <NeTabButton>
        <i slot="icon">a</i>
        测试
    </NeTabButton>
      <NeTabButton>
        <i slot="icon">a</i>
        测试
    </NeTabButton>
      <NeTabButton>
        <i slot="icon">a</i>
        测试
    </NeTabButton>
  
 <NeTabButton>
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
            a:"asdad"
        }
    },
}
</script>