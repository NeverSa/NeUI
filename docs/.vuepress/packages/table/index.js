import NeTable from './src/table';
import NeTableColumn from './src/table-column';
/* istanbul ignore next */
NeTable.install = function(Vue) {
  Vue.component(NeTable.name, NeTable);
};

NeTableColumn.install = function(Vue) {
  Vue.component(NeTableColumn.name, NeTableColumn);
};




export {NeTable,NeTableColumn} 
