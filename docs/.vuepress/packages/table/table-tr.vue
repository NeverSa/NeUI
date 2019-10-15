<template>
   
    <tr   @mouseenter.stop="handleMouseIn()"   @mouseleave.stop="handleMouseOut()" :class="rowClasses(row._index)" :draggable="draggable" @dragstart="onDrag($event,row._index)" @drop="onDrop($event,row._index)" @dragover="allowDrop($event)" v-if="draggable"><slot></slot></tr>
    <tr  @mouseenter.stop="handleMouseIn()"   @mouseleave.stop="handleMouseOut()" :class="rowClasses(row._index)" v-else><slot></slot></tr>
</template>
<script>
    export default {
        props: {
            row: Object,
            prefixCls: String,
            draggable: Boolean,
            checked:Boolean,
        },
        inject: ["tableRoot"],
        computed: {
            objData () {
                return this.$parent.objData;
            }
        },
        methods: {
            rowselect(){
                
            },
            handleMouseIn(){
              this.tableRoot.rowHover=true
            },
            handleMouseOut(){
               this.tableRoot.rowHover=false
            },
            onDrag (e,index) {
                e.dataTransfer.setData('index',index);
            },
            onDrop (e,index) {
                const dragIndex = e.dataTransfer.getData('index');
                this.$parent.$parent.dragAndDrop(dragIndex,index);
                e.preventDefault();
            },
            allowDrop (e) {
                e.preventDefault();
            },
            rowClasses (_index) {
                return [
                    this.rowClsName(_index),
                    this.checked?'row-checked':"",
                    {
                        [`${this.prefixCls}-row-highlight`]: this.objData[_index] && this.objData[_index]._isHighlight,
                        [`${this.prefixCls}-row-hover`]: this.objData[_index] && this.objData[_index]._isHover
                    }
                ];
            },
            rowClsName (_index) {
                return this.$parent.$parent.rowClassName(this.objData[_index], _index);
            },
        }
    };
</script>
