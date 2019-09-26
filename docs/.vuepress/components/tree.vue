<template>
    <ne-tree :data="data1"  @on-drop="getDropData" @nodeClick="nodeClick" :optionRedule="optionRedule">
    </ne-tree>
</template>
<script>

export default {
  data() {
    return {
       optionRedule: (h, params) => {
            return h("span", [h("strong", )]);
          },
      data1: [
          {
             title: "直属普高",
               isExpand: false,
                children: [
                {
                  title: "杭州外国语学校",
                  children:[]
                },
                {
                  title: "浙大附中",
                  children:[]
                }
              ]
          },
        {
          title: "浙江省教育厅",
          isExpand: true,
          children: [
            {
              title: "直属普高",
              isExpand: true,
              children: [
                {
                  title: "杭州外国语学校",
                  children:[]
                },
                {
                  title: "浙大附中",
                  children:[]
                },
                 {
                  title: "大关小学申花校区",
                  children:[]
                },
                 {
                  title: "濮家小学",
                  children:[]
                },
              ]
            },
           
          ]
        }
      ]
    };
  },
  methods: {
      nodeClick(item){
      },
    getDropData(info) {
      var dragData = info.dragNode.nodeData;
      var dragParent = info.dragNode.parentNode;
      var dropData = info.dropNode.nodeData;
      var dropParent = info.dropNode.parentNode;
      var dropPosition = info.dropPosition; //0作为子级，-1放在目标节点前面，1放在目标节点后面
      //把拖拽元素从父节点中删除
      dragParent.children.splice(dragParent.children.indexOf(dragData), 1);
      if (dropPosition === 0) {
        dropData.children.push(dragData);
      } else {
        var index = dropParent.children.indexOf(dropData);
        if (dropPosition === -1) {
          dropParent.children.splice(index, 0, dragData);
        } else {
          dropParent.children.splice(index + 1, 0, dragData);
        }
      }
    }
  }
};
</script>