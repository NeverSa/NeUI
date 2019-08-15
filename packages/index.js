import Button from './button/index.js';
import Radio from './radio/index.js';
const components = [Button, Radio];
const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    Button,
    Radio,
    install
  };
