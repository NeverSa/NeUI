export default {
    name: 'NeTableBody',
    data(){
        return {
            data:[]
        }
    },
    props: {
        store: {
          required: true
        },
        
      },
      mounted(){
        this.data=this.$parent.dataSource;
        this.columns=this.store.states.columns
     
    },
    render(h) {
        const data = this.data || [];
        console.log(data)
        return (
          <table
            class="el-table__body"
            cellspacing="0"
            cellpadding="0"
            border="0">
            <colgroup>
              {
                this.columns.map(column => <col name={ column.id } key={column.id} />)
              }
            </colgroup>
            <tbody>
              {
               this.data.map(column => {
                return (<tr name={ column.prop }>
                     {
                         Object.values(column).map(value=><td>{value}</td>)
                     }
                    </tr>) 
               })
              }
             
            </tbody>
          </table>
        );
      },
      methods:{
        renderTd(row){
            return (
                <td>{Object.values(row)}</td>
            )
        }
    }
     
}