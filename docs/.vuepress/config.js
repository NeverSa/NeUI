module.exports = {
    base: '/',
    title: '一条大何全靠浪',
    description: '~~~~~~~~~',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebar: [
            ['/', '首页'],
            {
                title: '开始使用',
                children: [
                    ['/blog/botton.md', '按钮'],
                    ['/blog/checkbox.md', 'Checkbox 多选框'],
                    ['/blog/radio.md', 'Radio 单选框'],
                    ['/blog/tab-botton.md', 'Tab 操作按钮组'],
                    ['/blog/select.md', 'Select 下拉选择'],
                    ['/blog/table.md', 'Table 表格'],
                    ['/blog/pagination.md', 'Pagination 翻页器'],
                    ['/blog/tree.md', 'Tree 树形控件'],
                    ['/blog/dropdown.md', 'dropdown 下拉'],
                    ['/blog/screen.md', 'screen 筛选器'],
                    ['/blog/datepicker.md', 'datepicker 时间选择器'],
                ]
            },
            {
                title: '表单',
                children: [
                    ['/blog/form.md', '表单'],
                ]
            }
        ]
    }
}
