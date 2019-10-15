<template>
  <div :class="classes"  ref="cell"  >
    <template v-if="renderType === 'selection'">
       <span v-if="!showCkeckBox">{{naturalIndex+1}}</span> 
      <ne-checkbox v-if="showCkeckBox" v-model="checked" @select="toggleSelect" :disabled="disabled"></ne-checkbox>
    </template>
    <template v-if="renderType === 'html'">
      <span v-html="row[column.key]"></span>
    </template>
    <template v-if="renderType === 'normal'">
      <template v-if="column.tooltip">
        <Tooltip
          transfer
          :content="row[column.key]"
          :theme="tableRoot.tooltipTheme"
          :disabled="!showTooltip"
          :max-width="300"
          class="ivu-table-cell-tooltip"
        >
          <span
            ref="content"
            @mouseenter="handleTooltipIn"
            @mouseleave="handleTooltipOut"
            class="ivu-table-cell-tooltip-content"
          >{{ row[column.key] }}</span>
        </Tooltip>
      </template>
      <span v-else>{{row[column.key]}}</span>
    </template>
    <template v-if="renderType === 'expand' && !row._disableExpand">
      <div :class="expandCls" @click="toggleExpand">
        <Icon type="ios-arrow-forward"></Icon>
      </div>
    </template>
    <table-expand
      v-if="renderType === 'render'"
      :row="row"
      :column="column"
      :index="index"
      :render="column.render"
    ></table-expand>
    <table-slot v-if="renderType === 'slot'" :row="row" :column="column" :index="index"></table-slot>
  </div>
</template>
<script>
import TableExpand from "./expand";
import TableSlot from "./slot";
export default {
  name: "TableCell",
  components: { TableExpand, TableSlot },
  props: {
      checkeds:Boolean,
    prefixCls: String,
    row: Object,
    column: Object,
    naturalIndex: Number, // index of rebuildData
    index: Number, // _index of data
    disabled: Boolean,
    expanded: Boolean,
    fixed: {
      type: [Boolean, String],
      default: false
    }
  },
  inject: ["tableRoot"],
  data() {
    return {
      checked: false,
      renderType: "",
      uid: -1,
      context: this.$parent.$parent.$parent.currentContext,
      showTooltip: false, // 鼠标滑过overflow文本时，再检查是否需要显示,
      isHover:false,
    };
  },
  computed: {
      showCkeckBox(){
          if(this.tableRoot.rowHover){
              return true
          }else{
            return this.tableRoot.checkArr.length>0
          }
         
      },
    classes() {
      return [
        `${this.prefixCls}-cell`,
        {
          [`${this.prefixCls}-hidden`]:
            !this.fixed &&
            this.column.fixed &&
            (this.column.fixed === "left" || this.column.fixed === "right"),
          [`${this.prefixCls}-cell-ellipsis`]: this.column.ellipsis || false,
          [`${this.prefixCls}-cell-with-expand`]: this.renderType === "expand",
          [`${this.prefixCls}-cell-with-selection`]:
            this.renderType === "selection"
        }
      ];
    },
    expandCls() {
      return [
        `${this.prefixCls}-cell-expand`,
        {
          [`${this.prefixCls}-cell-expand-expanded`]: this.expanded
        }
      ];
    }
  },
  methods: {
    toggleSelect(val) {
      if (val) {
        this.tableRoot.checkArr.push(this.index);
      } else {
        this.tableRoot.checkArr = this.tableRoot.checkArr.filter(item => {
          return item !== this.index;
        });
      }
     
      this.tableRoot.toggleSelect(this.index);
    },
    // toggleExpand() {
    //   this.$parent.$parent.$parent.toggleExpand(this.index);
    // },
    handleClick() {
      // 放置 Checkbox 冒泡
    },
    handleTooltipIn() {
      const $content = this.$refs.content;
      this.showTooltip = $content.scrollWidth > $content.offsetWidth;
    },
    handleTooltipOut() {
      this.showTooltip = false;
    }
  },
  created() {
    if (this.column.type === "index") {
      this.renderType = "index";
    } else if (this.column.type === "selection") {
      this.renderType = "selection";
    } else if (this.column.type === "html") {
      this.renderType = "html";
    } else if (this.column.type === "expand") {
      this.renderType = "expand";
    } else if (this.column.render) {
      this.renderType = "render";
    } else if (this.column.slot) {
      this.renderType = "slot";
    } else {
      this.renderType = "normal";
    }
  }
};
</script>
