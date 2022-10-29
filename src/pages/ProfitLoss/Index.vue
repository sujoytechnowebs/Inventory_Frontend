<template>
  <p class="profitLossHead q-pa-md">Profit & Loss</p>
  <div class="row q-col-gutter-md q-pa-md">
    <div class="col-12 col-md-6 col-lg-6">
      <DateRangePicker
        v-model="myDateRange"
        :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy' }"
      />
    </div>
    <div class="col-12 col-md-6 col-lg-6">
      <q-btn
        color="primary"
        label="Calculate"
        type="submit"
        @click="getProfitLoss()"
      />
    </div>
  </div>

  <div class="row q-col-gutter-md q-pa-md">
    <div class="col-12 col-md-4 col-lg-4">
      <q-card
        flat
        bordered
        class="card_height flex justify-center items-center"
      >
        <q-card-section>
          <div class="calculate_head">Gross Profit</div>
          <div class="text-center balance_field">₹ {{ data.gross_profit }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-card
        flat
        bordered
        class="card_height flex justify-center items-center"
      >
        <q-card-section
          ><div class="calculate_head">Total Expense</div>
          <div class="text-center balance_field">₹ {{ data.totalExpense }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-card
        flat
        bordered
        class="card_height flex justify-center items-center"
      >
        <q-card-section>
          <div class="calculate_head">Profit/Loss</div>
          <div class="text-center balance_field">
            ₹ {{ data.total_profitOrLoss }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

import DateRangePicker from "daterange-picker-vue3";
import "daterange-picker-vue3/dist/daterange-picker-vue3.css";

export default defineComponent({
  name: "ProfitLossIndexPage",

  components: {},

  computed: {
    ...mapFields("profitloss", ["filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();

    const { getAction } = useStoreModule();
    const { getItem } = getAction("profitloss", ["getItem"]);

    const myDateRange = ref({
      startDate: "",
      endDate: "",
    });

    const data = ref({});

    const getProfitLoss = () => {
      getItem(myDateRange.value)
        .then((response) => {
          console.log("Hello");
          data.value = response.data;
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          console.log("finally", "finally");
        });
    };

    return {
      hasEditPermission: true,
      dataStore: "profitloss",
      aditionalActions: false,
      myDateRange,
      data,
      getProfitLoss,
    };
  },
});
</script>

<style>
.profitLossHead {
  font-size: 20px;
}

.calculate_head {
  font-size: 1.2rem;
  font-weight: 500;
}

.card_height {
  min-height: 250px;
}

.balance_field {
  font-size: 1.1rem;
}
</style>
