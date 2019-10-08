<template>
  <div class="ne-date_picker">
    <ne-input :label="label" v-model="datavalue" @handlefocus="handlefocus" />
    <div class="ne-date_pannal" v-show="showpannel">
      <!-- 切换月份 -->
      <div class="prew_option" v-if="!showYear">
        <i class="iconfont ne-arrow_left" @click="prevMonthPreview"></i>
        <span @click="showYear=true">{{tmpYear}}年{{tmpMonth+1}}月</span>
        <i class="iconfont ne-arrow_right" @click="nextMonthPreview "></i>
      </div>
      <!-- 切换年 -->
      <div v-if="showYear">
        <div class="prew_option">
          <i class="iconfont ne-arrow_left" @click="prevYear"></i>
          <span>{{tmpYear}}</span>
          <i class="iconfont ne-arrow_right" @click="nextYear "></i>
        </div>
        <div class="month_list">
          <span
            @click="selectYear(item)"
            v-for="item in monthList"
            :class="{'active':item-1==tmpMonth}"
          >{{item}}</span>
        </div>
      </div>

      <div class="week_list">
        <span v-for="item in weekList">{{item | week}}</span>
      </div>
      <ul class="date-list">
        <li v-for="(item, index) in dateList" :key="index" @click="selectDay(item)">
          <div class="message" :class="{'disabled':item.previousMonth||item.nextMonth}">
            <div class="bg"></div>
            <span v-text="item.value"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "NeDatePicker",
  componentName: "NeDatePicker",
  props: {
    label: {
      type: String,
      default: "请选择时间"
    },
    value: ""
  },
  model: {
    prop: "value",
    event: "select"
  },
  data() {
    let now = new Date();
    let startDate,
      endDate,
      year,
      month,
      date,
      tmpYear,
      tmpMonth,
      tmpStartYear,
      tmpStartMonth,
      tmpStartDate,
      tmpEndYear,
      tmpEndMonth,
      tmpEndDate;
    startDate = endDate = this.value ? new Date(this.value) : now;
    year = endDate.getUTCFullYear();
    month = endDate.getUTCMonth();
    date = endDate.getUTCDate();

    tmpYear = endDate.getUTCFullYear();
    tmpMonth = endDate.getUTCMonth();
    tmpStartYear = startDate.getUTCFullYear();
    tmpStartMonth = startDate.getUTCMonth();
    tmpStartDate = startDate.getUTCDate();
    tmpEndYear = endDate.getUTCFullYear();
    tmpEndMonth = endDate.getUTCMonth();
    tmpEndDate = endDate.getUTCDate();
    return {
      showYear: false,
      showpannel: false,
      datavalue: "",
      year: year,
      month: month,
      date: date,
      tmpYear: tmpYear,
      tmpMonth: tmpMonth,
      tmpStartYear: tmpStartYear,
      tmpStartMonth: tmpStartMonth,
      tmpStartDate: tmpStartDate,
      tmpEndYear: tmpEndYear,
      tmpEndMonth: tmpEndMonth,
      tmpEndDate: tmpEndDate,
      minYear: Number,
      minMonth: Number,
      minDate: Number,
      maxYear: Number,
      maxMonth: Number,
      maxDate: Number,
      yearList: Array.from(
        { length: 12 },
        (value, index) => new Date().getFullYear() + index
      ),
      monthList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      weekList: [0, 1, 2, 3, 4, 5, 6]
    };
  },
  watch: {},
  computed: {
    dateList() {
      let currentMonthLength = new Date(
        this.tmpYear,
        this.tmpMonth + 1,
        0
      ).getDate();
      let dateList = Array.from(
        { length: currentMonthLength },
        (val, index) => {
          return {
            currentMonth: true,
            value: index + 1
          };
        }
      );
      let startDay = new Date(this.tmpYear, this.tmpMonth, 1).getDay();
      let previousMongthLength = new Date(
        this.tmpYear,
        this.tmpMonth,
        0
      ).getDate();
      for (let i = 0, len = startDay; i < len; i++) {
        dateList = [
          { previousMonth: true, value: previousMongthLength - i }
        ].concat(dateList);
      }
      for (let i = dateList.length, item = 1; i < 42; i++, item++) {
        dateList[dateList.length] = { nextMonth: true, value: item };
      }
      return dateList;
    }
  },
  filters: {
    week: item => {
      return { 0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六" }[
        item
      ];
    }
  },
  mounted() {
    this.datavalue = this.value;
  },
  methods: {
    //切换上一个月
    prevMonthPreview() {
      if (this.tmpMonth == 0) {
        this.tmpYear--;
      }
      this.tmpMonth = this.tmpMonth === 0 ? 11 : this.tmpMonth - 1;
    },
    //切换下一个月
    nextMonthPreview() {
      if (this.tmpMonth == 11) {
        this.tmpYear++;
      }
      this.tmpMonth = this.tmpMonth === 11 ? 0 : this.tmpMonth + 1;
    },
    prevYear() {
      this.tmpYear--;
    },
    nextYear() {
      this.tmpYear++;
    },
    //选择月份及年份
    selectYear(item) {
      this.tmpMonth = item - 1;
      this.showYear = false;
    },
    handlefocus() {
      this.showpannel = true;
    },
    close() {
      this.$emit("close", false);
    },
    //选中日期
    selectDay(item) {
      if (!item.currentMonth) {
        return;
      }
      this.datavalue = `${this.tmpYear}-${this.tmpMonth + 1}-${item.value}`;
      this.showpannel = false;
      this.$emit("select", this.datavalue);
    }
  }
};
</script>
<style lang="less" scoped>
.ne-date_picker {
  position: relative;
  .ne-date_pannal {
    width: 304px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    padding: 15px;
    border-radius: 8px;
    position: absolute;
    z-index: 9;
    background: #fff;
    margin-top: 5px;
    .prew_option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .month_list {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      span {
        color: #000000;
        font-size: 14px;
        display: inline-block;
        text-align: center;
        width: 25%;
        cursor: pointer;
        padding: 5px 0px;
        &:hover {
          background: #f6f6f8;
          border-radius: 8px;
        }
      }
      .active {
        background: #f6f6f8;
        border-radius: 8px;
      }
    }
  }
  .date-list {
    display: flex;
    list-style: none;
    padding: 0px;
    margin: 0px;
    flex-wrap: wrap;
    li {
      width: 14.2%;
      .message {
        text-align: center;
        color: #000000;
        font-size: 14px;
        cursor: pointer;
      }
      .disabled {
        color: #b3b3b3;
      }
    }
  }
  .week_list {
    display: flex;
    margin-bottom: 5px;
    span {
      display: inline-block;
      width: 14.2%;
      text-align: center;
      color: #808080;
    }
  }
}
</style>
