

### Table 表格

>基础用法

<tables></tables>

<<<@/docs/.vuepress/components/tables.vue

>Table  Attributes

| 参数        | 说明           | 类型  | 可选值  |默认值  |
| ------------- |:-------------:| -----:| -----:| -----:|
|data| 表格实际数据  | array |———— |———— |
|columns| 表格列数据  | array |———— |———— |
|empty-text| 空数据时显示的文本内容  | string  |———— |暂无数据 |
|border| 是否为带边框的表格  | Boolean  |———— |false |
|height|表格高度，超出表格内容会滚动，表头固定  | number  |———— | |

>columns  Attributes

| 参数        | 说明           | 类型  | 可选值  |默认值  |
| ------------- |:-------------:| -----:| -----:| -----:|
|title| 字段名称（显示为表头字段）  | string |———— |———— |
|key| 对应data里面实际的字段key  | string |———— |———— |
|type| 设置为selection开启复选框选中模式  | string  |———— | |
|fixed| 固定列(此功能有问题暂时无法使用)               | string  |'left','right' | |
|width|单元格宽度 | number  |———— | |
|render|自定义列(使用方法参照vue render渲染函数用法) | function  |———— | |
|sortable|当前列是否可以排序| Boolean  |———— | false |



>Table  Events

| 事件名        | 说明           | 参数  | 
| ------------- |:-------------:| -----:| 
| getSelection        | 激活时获取选中列的数据| 无 |
| exportData        | 导出csv文件| 无 |


>Table slot 

| 参数        | 说明           | 类型  | 可选值  |默认值  |
| ------------- |:-------------:| -----:| -----:| -----:|
| common| 默认时候的操作组    | |———— |———— |
| check| 激活时候的操作组    |  |———— |———— |
| left| 左侧操作组   |  |———— |———— |


