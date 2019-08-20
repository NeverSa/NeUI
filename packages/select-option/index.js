import NeOption from '../select/option';
/* istanbul ignore next */
NeOption.install = function(Vue) {
  Vue.component(NeOption.name, NeOption);
};

export  default NeOption