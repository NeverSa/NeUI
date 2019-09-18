
const getDefaultColumns = function(options) {
  const column = {};
  for (let name in options) {
    column[name] = options[name];
  }
  return column;
};

export default {
  name: "NeTableColumn",
  props: {
    prop: String,
    label: String,
    width: String,
    sortable: Boolean
  },
  data(){
    return {
      columns: []
    }
  },
  mounted() {
    let store = this.$parent.store;
    const option = getDefaultColumns({
      prop: this.prop,
      label: this.label,
      width: this.width || "180",
      sortable: this.sortable || false
    });
    //保存头部列配置
    store.commit('insertColumn', option);
  
  },
  render(h) {
    // slots 也要渲染，
    return h('div', this.$slots.default);
  }
};

