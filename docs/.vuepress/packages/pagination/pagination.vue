<template>
  <div class="pagination-wrapper">
    <ul :class="['pagination-inner']">
      <!-- backward Paginations -->
      <li
        v-for="item in forwardPaginations"
        :key="item"
        :class="['pagination-item', { 'is-active': item === current }]"
        @click.stop="handleClick({ type: 'select', data: item })"
      >{{ item }}</li>
      <!-- end -->
      <!-- middle paginations -->
      <template v-if="isForwardBrief && isBackwardBrief">
        <li
          v-for="item in middlePaginations"
          :key="item"
          :class="['pagination-item', { 'is-active': item === current }]"
          @click.stop="handleClick({ type: 'select', data: item })"
        >{{ item }}</li>
      </template>
      <!-- end -->
      <!-- backward paginations -->
      <li
        v-for="item in backwardPaginations"
        :key="item"
        :class="['pagination-item', { 'is-active': item === current }]"
        @click.stop="handleClick({ type: 'select', data: item })"
      >{{ item }}</li>
      <!-- end -->
    </ul>
  </div>
</template>
<script>
const prefixCls = "ivu-page";
export default {
  name: "NePagination",
  props: {
    value: { type: [Number, String], default: 1 },
    total: { type: Number, default: 0 },
    pageSize: { type: Number, default: 10 },
    pageCount: { type: Number, default: 7 }
  },
  model: {
    prop: "value",
    event: "change"
  },
  data() {
    return {
      current: 1
    };
  },
  computed: {
    paginalNumber() {
      const { total, pageSize } = this;
      return Math.ceil(total / pageSize);
    },
    canPre() {
      return this.current > 1;
    },
    canNext() {
      return this.current < this.paginalNumber;
    },
    isForwardBrief() {
      const { paginalNumber, pageCount, current } = this;
      return paginalNumber > pageCount && current > pageCount - 3;
    },
    forwardPaginations() {
      const { pageCount, isForwardBrief, paginalNumber } = this;
      let start = 0;
      let length =
        paginalNumber <= pageCount
          ? paginalNumber
          : isForwardBrief
          ? 1
          : pageCount;
      return Array.from({ length }, (v, i) => {
        return i + start + 1;
      });
    },
    isBackwardBrief() {
      const { paginalNumber, pageCount, current } = this;
      return paginalNumber > pageCount && current < paginalNumber - 3;
    },
    backwardPaginations() {
      const { current, pageCount, isBackwardBrief, paginalNumber } = this;
      let start = paginalNumber - (isBackwardBrief ? 1 : pageCount + 1);
      let length =
        paginalNumber <= pageCount ? 0 : isBackwardBrief ? 1 : pageCount + 1;
      return Array.from({ length }, (v, i) => {
        return i + start + 1;
      });
    },
    middlePaginations() {
      const { current, pageCount, isForwardBrief, isBackwardBrief } = this;
      const offset = Math.round(pageCount / 2);
      let start = current - offset;
      return Array.from({ length: pageCount }, (v, i) => {
        return i + start + 1;
      });
    }
  },
  watch: {
    value: {
      handler(value) {
        this.current = Number(value);
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleClick({ type, data }) {
      const handler = {
        select: index => (this.current = index),
        pre: () => this.canPre && --this.current,
        next: () => this.canNext && ++this.current
      };
      handler[type] && handler[type](data);
      this.$emit("change", this.current);
    }
  }
};
</script>