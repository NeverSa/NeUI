import NeScreen from './screen';
/* istanbul ignore next */
NeScreen.install = function(Vue) {
  Vue.component(NeScreen.name, NeScreen);
};

export  default NeScreen