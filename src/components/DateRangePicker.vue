<template>
  <q-field label="Date" outlined dense v-model="dateRange">
    <template v-slot:prepend>
      <q-icon name="event" />
    </template>
    <template v-slot:append>
      <q-btn
        round
        flat
        dense
        icon="cancel"
        @click="onClearDateRange()"
        v-if="dateRange.startDate != '' && dateRange.endDate != ''"
      />
    </template>
    <template v-slot:control>
      <date-range-picker v-model="dateRange" :opens="position">
        <template v-slot:input="picker">
          <span
            v-if="
              picker.startDate &&
              picker.endDate &&
              dateRange.startDate != '' &&
              dateRange.endDate != ''
            "
          >
            {{ moment(picker.startDate).format("MMM Do YYYY") }} -
            {{ moment(picker.endDate).format("MMM Do YYYY") }}
          </span>
          <span class="input_box_click" v-else> - </span>
        </template>
        <div class="slot">
          <div data-v-1ebd09d2="" class="drp-buttons">
            <span data-v-1ebd09d2="" class="drp-selected"> - </span>
            <button
              data-v-1ebd09d2=""
              v-on:click="data.clickCancel"
              type="button"
              class="cancelBtn btn btn-sm btn-secondary"
            ></button>
            <button
              data-v-1ebd09d2=""
              type="button"
              @click="data.clickApply"
              class="applyBtn btn btn-sm btn-success"
            >
              Apply
            </button>
          </div>
        </div>
      </date-range-picker>
    </template>
  </q-field>
</template>

<script>
import DateRangePicker from "daterange-picker-vue3";
import "daterange-picker-vue3/dist/daterange-picker-vue3.css";
import moment from "moment-timezone";

export default {
  props: {
    modelValue: Object,
    position: {
      type: String,
      default: "center",
    },
  },
  data() {
    return {
      moment: moment,
      dateRange: {
        startDate: "",
        endDate: "",
      },
    };
  },
  methods: {
    onClearDateRange() {
      this.dateRange = {
        startDate: "",
        endDate: "",
      };
    },
  },
  mounted() {},
  components: {
    DateRangePicker,
  },
  watch: {
    dateRange: {
      handler() {
        console.log("value", this.modelValue);
        console.log(this.dateRange);
        this.$emit("update:modelValue", this.dateRange);
      },
      deep: true,
    },
  },
};
</script>
<style>
/* .reportrange-text[data-v-1ebd09d2] {
  background: black !important;
  border: 1px solid #616161 !important;
  height: 40px;
  border-radius: 4px;
} */
.reportrange-text {
  border: none !important;
}
/* .input_box_click {
  display: none !important;
} */
/* .daterangepicker.openscenter:after,
.daterangepicker.openscenter:before {
  left: 288px;
  right: 0;
  width: 0;
  margin-left: auto;
  margin-right: auto;
} */
.daterangepicker.openscenter[data-v-74709826] {
  right: auto;
  left: -11%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
}
/* .calendars[data-v-74709826] {
  background-color: red;
} */
/* .daterangepicker.show-calendar .drp-buttons,
.daterangepicker.show-calendar .drp-calendar {
  display: block;
  background-color: black;
} */
/* .daterangepicker {
  background-color: #616161;
} */
/* td[data-v-98ac2448],
th[data-v-98ac2448] {
  padding: 2px;
  background-color: #000;
} */
/* .daterangepicker .calendar-table {
  border: 1px solid #000;
  border-radius: 4px;
  background-color: black;
} */
/* .daterangepicker td.off,
.daterangepicker td.off.end-date,
.daterangepicker td.off.in-range,
.daterangepicker td.off.start-date {
  background-color: black;
  border-color: #000;
  color: black;
} */
/* .daterangepicker td.in-range {
  background-color: #14add2;
  border-color: transparent;
  color: #ffff;
  border-radius: 0;
} */
/* .daterangepicker .btn-primary,
.daterangepicker .btn-success {
  background-color: #7b7b7b;
  color: #fff;
} */
/* .daterangepicker .calendar-table .next span,
.daterangepicker .calendar-table .prev span {
  color: #fff;
  border: solid #ffff;
  border-width: 0 2px 2px 0;
  border-radius: 0;
  display: inline-block;
  padding: 3px;
} */
/* .daterangepicker .ranges li.active {
  background-color: #14add2;
  color: #fff;
} */

/* .reportrange-text[data-v-74709826] {
  padding-top: 0;
  background: black !important;
  height: auto !important;
  border: none !important;
} */
/* .vue-daterange-picker {
  width: 100%;
  font-size: 12px;
} */

/* .daterangepicker .btn-secondary {
  background-color: #000;
  color: #fff;
} */
.daterangepicker .drp-selected {
  display: inline-block;
  font-size: 12px;
  padding-right: 8px;
  color: #0000;
}
</style>
