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
import "./icon/ne-iconfont.css"
const components = [Button, Radio, RadioGroup, Checkbox, CheckboxGroup, Input, TabButton, TabButtonGroup,Select,Option,Tree];
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$message=Message
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
  install
};
