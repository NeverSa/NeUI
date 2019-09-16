import NeForm from './form';
import NeFormItem from './formItem';
import Meinput from './input';
/* istanbul ignore next */
NeForm.install = function(Vue) {
  Vue.component(NeForm.name, NeForm);
};
NeFormItem.install = function(Vue) {
    Vue.component(NeFormItem.name, NeFormItem);
  };

  Meinput.install = function(Vue) {
    Vue.component(Meinput.name, Meinput);
  };

  export {NeForm,NeFormItem,Meinput} 