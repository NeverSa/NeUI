import Vue from 'vue'
import NeUi from './packages/index'
import "./public/base.less"
export default ({
    Vue,
    options,
    router
   }) => {
    Vue.use(NeUi)
   }
