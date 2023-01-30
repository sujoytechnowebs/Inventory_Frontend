<template>
  <div class="heading_margin">
    <b>Collection Slip-{{ getPrintData.today }}</b>
  </div>
  <div class="normal_margin"><b>Id:</b> {{ getPrintData.customer_id }}</div>
  <div class="normal_margin"><b>Name:</b> {{ getPrintData.customer_name }}</div>
  <div class="normal_margin"><b>Loan No.:</b> {{ getPrintData.loanNo }}</div>
  <div class="normal_margin">
    <b>Total Paid EWI:</b> {{ getPrintData.totalPaidEMIAmt }}
  </div>
  <div class="normal_margin"><b>Ewi Amount:</b> {{ getPrintData.emiAmt }}</div>
  <div class="normal_margin">
    <b>Loan Amount:</b> {{ getPrintData.loan_amount }}
  </div>
  <div class="normal_margin">
    <b>Payment Date:</b> {{ $dateConvert.format(getPrintData.payment_date) }}
  </div>
  <div class="normal_margin"><b>Last Paid:</b> {{ getPrintData.amount }}</div>
  <div class="normal_margin"><b>Advance:</b> {{ getPrintData.adv }}</div>
  <div class="normal_margin"><b>Due:</b> {{ getPrintData.due }}</div>
  <div class="normal_margin"><b>Outstading:</b> {{ getPrintData.os }}</div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

import { dateConvert } from "src/boot/dateConvert";

export default defineComponent({
  name: "EmiPrintPage",

  setup() {
    const { getGetters, getAction } = useStoreModule();

    const { getPrintData } = getGetters("emi", ["getPrintData"]);

    const { getReportInvoice } = getAction("emi", ["getReportInvoice"]);

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
