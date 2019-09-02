import NeTable from './table';
import NeTableColumn from './table-column';
/* istanbul ignore next */
NeTable.install = function(Vue) {
  Vue.component(NeTable.name, NeTable);
};



export {NeTable,NeTableColumn} 
