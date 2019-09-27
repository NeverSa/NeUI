import NeDropdown from './dropdown';
import NeDropdownOption from './dropdownoption';
/* istanbul ignore next */
NeDropdown.install = function(Vue) {
  Vue.component(NeDropdown.name, NeDropdown);
};
NeDropdownOption.install = function(Vue) {
    Vue.component(NeDropdownOption.name, NeDropdownOption);
  };
  


export {NeDropdown,NeDropdownOption} 