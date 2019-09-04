

### Checkbox 多选框

>基础用法
单个checkbox的选中值为布尔值 选中为**true** 

<checkbox></checkbox>

<<<@/docs/.vuepress/components/checkbox.vue

>多个成组使用 v-model值为数组，子元素的value值对应需要选中的值

<checkboxgroup></checkboxgroup>

<<<@/docs/.vuepress/components/checkboxgroup.vue
>Checkbox Attributes

| 参数        | 说明           | 类型  | 可选值  |默认值  |
| ------------- |:-------------:| -----:| -----:| -----:|
| value / v-model| 绑定值      | string / number / boolean |———— |———— |


>Checkbox Events

| 事件名       | 说明           | 参数  | 
| ------------- |:-------------:| -----:| 
| select        | 绑定值更新时触发| 无 |

>Checkbox-group Attributes

| 参数        | 说明           | 类型  | 可选值  |默认值  |
| ------------- |:-------------:| -----:| -----:| -----:|
| v-model| 绑定值（数组形式）      | array |———— |———— |

>Checkbox-group  Events

| 事件名        | 说明           | 参数  | 
| ------------- |:-------------:| -----:| 
| select        | 绑定值更新时触发| 无 |

