<template>
  <table class="tableStyle" cellspacing="0" cellpadding="0" ref="table">
    <table-header></table-header>
    <slot></slot>
    <table-body></table-body>
  </table>
</template>

<script>
  import TableStore from './TableStore'
  import TableLayout from './table-layout'
  import TableColumn from './table-column'
  import TableHeader from './table-header'
  import TableBody from './table-body'
  export default {
    name: 'NeTable',
    props: {
      dataSource: {
        required: true
      },
      emptyText: {
        default: '没有数据'
      },
      height: [String, Number]
    },
    data () {
      const store = new TableStore(this)
      const layout = new TableLayout({table: this, store: store})
      return {
        store,
        layout
      }
    },
    computed: {
      size () {
        return this.dataSource.length + 1
      }
    },
    mounted () {
      this.doLayout()
      this.store.commit('init')
    },
    methods: {
      doLayout () {
        this.layout.setHeight(this.height)
      }
    },
    watch: {
      dataSource (oldVal, val) {
        this.dataSource = val
      }
    },
    components: {
       TableColumn,
      TableHeader,
      TableBody
    }
  }
</script>

<style lang="less" scoped>

</style>