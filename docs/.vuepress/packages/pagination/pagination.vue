<template>
  <div class="ne-pagination_warper">
    <span class="pagination_prew" :class="{'is_disabled':!canPre}">
      <i class="iconfont ne-arrow_left" @click.stop="handleClick({ type: 'pre' })"></i>
    </span>
    <ul class="pagination-inner">
      <li
        v-for="item in forwardPaginations"
        :key="item"
        :class="{ 'is-active': item === current }"
        @click.stop="handleClick({ type: 'select', data: item })"
      >
        {{ item }}
        <span class="active_text" v-show="item === current">{{ item }}</span>
      </li>

      <template v-if="isForwardBrief && isBackwardBrief">
        <li
          v-for="item in middlePaginations"
          :key="item"
          :class=" { 'is-active': item === current }"
          @click.stop="handleClick({ type: 'select', data: item })"
        >
          {{ item }}
          <span class="active_text" v-show="item === current">{{ item }}</span>
        </li>
      </template>

      <li
        v-for="item in backwardPaginations"
        :key="item"
        :class=" { 'is-active': item === current }"
        @click.stop="handleClick({ type: 'select', data: item })"
      >
        {{ item }}
        <span class="active_text" v-show="item === current">{{ item }}</span>
      </li>
    </ul>
    <span class="pagination_prew" @click.stop="handleClick({ type: 'next' })" :class="{'is_disabled':!canNext}">
      <i class="iconfont ne-arrow_right"></i>
    </span>
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
<style lang="less" scoped>
.ne-pagination_warper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .pagination_prew {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #f6f6f8;
    color: #979797;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
  }
  .is_disabled{
      cursor: not-allowed;
      color: #f1f1f1
  }
  .pagination-inner {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    background: #f6f6f8;
    border-radius: 15px;
    padding: 3px 10px;
    margin: 0px 10px;
    li {
      cursor: pointer;
      width: 30px;
      height: 30px;
      text-align: center;
      position: relative;
      .active_text {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #fff;
        color: #000;
        left: 0px;
        top: -6px;
        box-shadow: 0px 2px 8px 0px #c1bcbc;
        border-radius: 5px;
      }
    }
    .is-active {
    }
  }
}
</style>