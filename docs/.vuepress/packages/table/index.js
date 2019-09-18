import NeTable from './table';
import NeTableColumn from './table-column';
/* istanbul ignore next */
NeTable.install = function(Vue) {
  Vue.component(NeTable.name, NeTable);
};

NeTableColumn.install = function(Vue) {
  Vue.component(NeTableColumn.name, NeTableColumn);
};




export {NeTable,NeTableColumn} 
