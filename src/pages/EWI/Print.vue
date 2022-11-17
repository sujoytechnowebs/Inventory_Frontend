<template>
  <table>
    <thead>
      <tr>
        <th>EWI No.</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr v-for="row in data" :key="row.no"> -->
      <td>{{ getPrintData.ewi_no }}</td>
      <td>{{ $dateConvert.format(getPrintData.ewi_date) }}</td>
      <td>{{ getPrintData.ewi }}</td>
      <td>{{ getPrintData.status }}</td>
      <!-- </tr> -->
    </tbody>
  </table>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

import { dateConvert } from "src/boot/dateConvert";

export default defineComponent({
  name: "EwiPrintPage",

  setup() {
    const { getGetters } = useStoreModule();

    const { getPrintData } = getGetters("ewi", ["getPrintData"]);

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
      {
        no: 2,
        collectionDate: "2022-11-02",
        amount: 1500,
        status: "Collected",
      },
      {
        no: 3,
        collectionDate: "2022-11-03",
        amount: 1500,
        status: "Collected",
      },
    ]);

    return {
      data,
      getPrintData,
    };
  },
});
</script>

<style scoped>
.EWI-form {
  width: 50%;
  max-width: 50%;
}
</style>
