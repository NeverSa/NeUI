import NeScreen from './screen';
import NeScreenOption from './screenoption';
/* istanbul ignore next */
NeScreen.install = function (Vue) {
    Vue.component(NeScreen.name, NeScreen);
};
NeScreenOption.install = function (Vue) {
    Vue.component(NeScreenOption.name, NeScreenOption);
};

export { NeScreen, NeScreenOption } 
