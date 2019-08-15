<template>
  <div
    class="el-radio-group"
    role="radiogroup"
  >
    <slot></slot>
  </div>
</template>
<script>

  export default {
    name: 'NeRadioGroup',
    componentName: 'NeRadioGroup',
    props: {
      value: {},
      disabled: Boolean
    },

    computed: {
    
    },

    created() {
      this.$on('handleChange', value => {
        this.$emit('change', value);
      });
    },
    mounted() {
  
    },
    methods: {

    },
   
  };
</script>

