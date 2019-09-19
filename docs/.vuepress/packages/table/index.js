import NeTable from './table';
import NeTabBar  from "./tab-bar"
/* istanbul ignore next */
NeTable.install = function(Vue) {
  Vue.component(NeTable.name, NeTable);
};

NeTabBar.install = function(Vue) {
  Vue.component(NeTabBar.name, NeTabBar);
};


export {NeTable,NeTabBar} 
