import Button from './button/index.js';
import Radio from './radio/index.js';
import RadioGroup from './radio-group/index.js';
import Checkbox from './Checkbox/index.js';
import CheckboxGroup from './checkbox-group/index.js';
import Input from './input/index.js';
import TabButton from './tab-button/index.js';
import TabButtonGroup from './tab-button-group/index.js';
import Select from './select/index.js';
import Option from './select-option/index.js';
import Message from './message/index.js';
import Tree from './tree/index.js';
import "./icon/iconfont.css"
import Dialog from './dialog/index.js';
import { NeTable,NeTabBar} from './table/index.js';
import { NeForm, NeFormItem ,Meinput} from './form/index.js';
import NePagiNation from './pagination/index.js';
import { NeDropdown,NeDropdownOption} from './dropdown/index.js';
import NeScreen from './screen/index.js';
const components = [Button, Dialog, Radio, RadioGroup, NeTable,  Checkbox, CheckboxGroup, Input, TabButton, TabButtonGroup, Select, Option, Tree,
  NeTabBar,
  NeForm,
  NeFormItem,
  Meinput,
  NePagiNation,
  NeDropdown,
  NeDropdownOption,
  NeScreen
];
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$message = Message
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  Button,
  Radio,
  Checkbox,
  RadioGroup,
  CheckboxGroup,
  Input,
  TabButton,
  TabButtonGroup,
  Select,
  Option,
  Message,
  Tree,
  NeTable,
  Dialog,
  NeTabBar,
  NeForm,
  NeFormItem,
  Meinput,
  NePagiNation,
  NeDropdown,
  NeDropdownOption,
  NeScreen,
  install
};
