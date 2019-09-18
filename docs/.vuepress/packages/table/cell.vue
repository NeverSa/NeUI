<template>
  <div ref="cell">
    <table-expand
      v-if="renderType === 'render'"
      :row="row"
      :column="column"
      :index="index"
      :render="column.render"
    ></table-expand>
    <span v-if="renderType !== 'render'">{{row[column.key]}}</span>
  </div>
</template>
<script>
import TableSlot from "./slot";
import TableExpand from "./expand";
export default {
  name: "TableCell",
  components: { TableSlot, TableExpand },
  props: {
    prefixCls: String,
    row: Object,
    column: "",
    naturalIndex: Number, // index of rebuildData
    index: Number, // _index of data
    checked: Boolean,
    disabled: Boolean,
    expanded: Boolean,
    fixed: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return {
      _renderType: "",
      get renderType() {
        return this._renderType;
      },
      set renderType(value) {
        this._renderType = value;
      },
      uid: -1,
      context: this.$parent.$parent.$parent.currentContext,
      showTooltip: false // 鼠标滑过overflow文本时，再检查是否需要显示
    };
  },
  computed: {
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
    toggleSelect() {
      this.$parent.$parent.$parent.toggleSelect(this.index);
    },
    toggleExpand() {
      this.$parent.$parent.$parent.toggleExpand(this.index);
    },
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
