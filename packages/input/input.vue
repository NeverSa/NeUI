<template>
  <div :class="['ne-input']">
    <textarea
      v-if="type === 'textarea'"
      class="textarea-inner"
      v-bind="$attrs"
    />

    <template v-else>
        <input
            :class="['input-inner']"
            :type="type"
              v-bind="$attrs"
        />
    </template>
</div>
 
</template>

<style lang="less" scoped>
</style>
<script>
export default {
  props: {
    type: {
      type: String
    }
  },
  name: "NeInput",
  componentName: "NeInput"
};
</script>
