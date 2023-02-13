<template>
  <div class="heading_margin"><b>Collection Slip</b></div>
  <div class="normal_margin"><b>Id:</b> {{ getPrintData.customer_id }}</div>
  <div class="normal_margin"><b>Name:</b> {{ getPrintData.account_name }}</div>
  <div class="normal_margin">
    <b>Application No.:</b> {{ getPrintData.application_no }}
  </div>
  <div class="normal_margin"><b>Total EWI:</b> {{ getPrintData.totalEwi }}</div>
  <div class="normal_margin">
    <b>Ewi Amount:</b> {{ getPrintData.ewiAmount }}
  </div>
  <div class="normal_margin">
    <b>Current EWI:</b> {{ getPrintData.current_ewi }}
  </div>
  <div class="normal_margin">
    <b>Total Amount:</b> {{ getPrintData.amount }}
  </div>
  <div class="normal_margin">
    <b>Date:</b> {{ $dateConvert.format(getPrintData.payment_date) }}
  </div>
  <div class="normal_margin">
    <b>Total Paid:</b> {{ getPrintData.totalPaidAmt }}
  </div>
  <div class="normal_margin"><b>Overdue:</b> {{ getPrintData.overDue }}</div>
  <div class="normal_margin"><b>Advance:</b> {{ getPrintData.advance }}</div>
  <div class="normal_margin"><b>Outstading:</b> {{ getPrintData.os }}</div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

import { dateConvert } from "src/boot/dateConvert";

export default defineComponent({
  name: "EwiPrintPage",

  setup() {
    const { getGetters, getAction } = useStoreModule();

    const { getPrintData } = getGetters("ewi", ["getPrintData"]);

    const { getReportInvoice } = getAction("ewi", ["getReportInvoice"]);

    onMounted(() => {
      window.print();
    });

    const data = ref([
      {
        no: 1,
        collectionDate: "2022-11-01",
        amount: 1500,
        status: "Collected",
      },
      // {
      //   no: 2,
      //   collectionDate: "2022-11-02",
      //   amount: 1500,
      //   status: "Collected",
      // },
      // {
      //   no: 3,
      //   collectionDate: "2022-11-03",
      //   amount: 1500,
      //   status: "Collected",
      // },
    ]);

    return {
      data,
      getPrintData,
      getReportInvoice,
    };
  },
});
</script>

<style scoped>
.heading_margin {
  margin-bottom: 10px;
}

.normal_margin {
  margin-bottom: 3px;
}
</style>
