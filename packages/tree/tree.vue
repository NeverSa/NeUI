<template>
    <ul class="ne-tree-node">
        <li v-for="(item,index) in data" :key="index" @click.stop="toggleChildren(item)">
           <i class="iconfont ne-yousanjiaoxing" :class="{'open':item.Showchilder}"></i> <ne-checkbox v-model="item.check"></ne-checkbox>   {{item.label}}
            <template v-if="item.children" >
                    <ne-tree :data="item.children" v-show="item.Showchilder"></ne-tree>
            </template>
        </li>
    </ul>
</template>


<script>
export default {
  name: "NeTree",
  componentName: "NeTree",
  components:{
     
  },
  props: {
    lable: "",
    data:{
        type:Array,
    },
  },
  data() {
    return {
        isOpen:false
    };
  },
  created(){
 
  },
  computed: {},
  methods: {
    toggleChildren(item){
        if(item.Showchilder){
            this.$set(item,"Showchilder",false)
        }else{
             this.$set(item,"Showchilder",true)
        }
      
    }
  }
};
</script>
<style lang="less">
.ne-tree-node{
list-style: none;
display: flex;
flex-direction: column;
margin: 0px ;
padding: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    .ne-yousanjiaoxing{
        color: #84868b;
        font-size: 12px;
    }
    .open{
        transition: all 200ms ease;
              transform: rotate(90deg);
                display: inline-block;
    }
    li{
        padding-left: 30px;
    }
}
</style>
