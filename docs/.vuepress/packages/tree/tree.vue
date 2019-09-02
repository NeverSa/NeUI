<template>
  <ul class="ne-tree-node">
    <li v-for="(item,index) in data" :key="index" @click.stop="toggleChildren(item)" :style="{'paddingLeft':item.children?15+'px':7+'px'}">
      <i class="iconfont ne-yousanjiaoxing" :class="{'open':item.Showchilder}" v-if="item.children" ></i>
      <ne-checkbox v-model="item.check" v-if="showCheckbox"></ne-checkbox>
      {{item.label}}
      <template v-if="item.children">
        <ne-tree :data="item.children" v-show="item.Showchilder"></ne-tree>
      </template>
    </li>
  </ul>
</template>


<script>
export default {
  name: "NeTree",
  componentName: "NeTree",
  components: {},
  props: {
    showCheckbox: {
      type: Boolean,
      default: false
    },
    lable: "",
    data: {
      type: Array
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  created() {
      console.log(this.showCheckbox)
  },
  computed: {},
  methods: {
    toggleChildren(item) {
        this.$emit("node-click",item)
      if (!item.children) {
        return;
      }
      if (item.Showchilder) {
        this.$set(item, "Showchilder", false);
      } else {
        this.$set(item, "Showchilder", true);
      }
    }
  }
};
</script>
<style lang="less">
.ne-tree-node {
  list-style: none;
  margin: 0px;
  padding-left: 10px;
  .ne-yousanjiaoxing {
    color: #84868b;
    font-size: 12px;
  }
  .open {
    transition: all 200ms ease;
    transform: rotate(90deg);
    display: inline-block;
  }
  li {
    text-align: left;
    padding: 15px 0px;
    color: #4a4642;
    font-size: 14px;
    cursor: pointer;
  }
 
}
</style>
