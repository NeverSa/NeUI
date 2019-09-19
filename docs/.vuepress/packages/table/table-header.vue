<template>
  <table cellspacing="0" cellpadding="0" border="0">
    <colgroup>
     <col v-if="table.showCheck"/>
      <col v-for="(column, index) in columns" />
    </colgroup>
    <thead>
      <tr>
        <th v-if="table.showCheck">
          <ne-checkbox v-model="table.checkall"/>
        </th>
        <th v-for="(column, index) in columns">
          <div>
           {{column.title}}
          </div>
        </th>
      </tr>
    </thead>
  </table>
</template>
<script>
import renderHeader from "./header";
export default {
  name: "NeTableHead",
  components: { renderHeader },
  props: {
    columns: Array,
  },
  created(){
  },
  inject:["table"],
  computed: {
 
  },
  methods: {
 
  }
};
</script>
