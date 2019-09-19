const TableStore = function (table, initialState) {
    if (!table) {
      throw new Error('Table is required')
    }
  }
  TableStore.prototype.mutations = {
    handleRowClick (row) {
      this.table.$emit('row-click', row)
    },
    handleHoverEvent (row) {
      this.table.$emit('row-hover', row)
    },
    insertColumn(column){
      this.states.columns.push(column)
    }
  }
  TableStore.prototype.commit = function (name, ...args) {
    const mutations = this.mutations
    if (mutations[name]) {
      mutations[name].apply(this, args)
    } else {
      throw new Error(`Action not found ${name}`)
    }
  }
  export default TableStore