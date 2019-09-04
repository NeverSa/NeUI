

### rdio 单选框

>基础用法
单个rdio的选中值为label对应的值

<radio></radio>

<<<@/docs/.vuepress/components/radio.vue

>多个成组使用 v-model值为数组，子元素的value值对应需要选中的值

<radiogroup></radiogroup>

<<<@/docs/.vuepress/components/radiogroup.vue
>Checkbox Attributes

| 参数        | 说明           | 类型  | 可选值  |默认值  |
| ------------- |:-------------:| -----:| -----:| -----:|
| v-model| 绑定值      | string / number / boolean |———— |———— |
|label| 对应radio的value      | string / number / boolean |———— |———— |


>Rdio Events

| 事件名       | 说明           | 参数  | 
| ------------- |:-------------:| -----:| 
| change        | 绑定值更新时触发| 无 |

>Rdio-group Attributes

| 参数        | 说明           | 类型  | 可选值  |默认值  |
| ------------- |:-------------:| -----:| -----:| -----:|
| v-model| 绑定值（数组形式）      | array |———— |———— |

>Rdio-group  Events

| 事件名        | 说明           | 参数  | 
| ------------- |:-------------:| -----:| 
| change        | 绑定值更新时触发| 无 |

