<template>
  <div class="row q-col-gutter-md q-pa-md">
    <div class="col-12 col-md-3 col-lg-3">
      <q-card flat bordered class="card_height">
        <q-card-section>
          <div class="balance_head flex justify-center q-pt-lg q-pb-lg">
            Opening Balance
          </div>
          <div class="text-center balance_field flex justify-between">
            <p>Bank</p>
            <p>Cash</p>
          </div>
          <div class="text-center flex justify-between">
            <p>₹ {{ balance.bank_opening_bal }}</p>
            <p>₹ {{ balance.cash_opening_bal }}</p>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 col-md-3 col-lg-3">
      <q-card flat bordered class="card_height">
        <q-card-section>
          <div class="balance_head flex justify-center q-pt-lg q-pb-lg">
            EWI Collect
          </div>
          <div class="text-center balance_field flex justify-between">
            <p>Bank</p>
            <p>Cash</p>
          </div>
          <div class="text-center flex justify-between">
            <p>₹ {{ balance.bankByEWI }}</p>
            <p>₹ {{ balance.cashByEWI }}</p>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 col-md-3 col-lg-3">
      <q-card flat bordered class="card_height">
        <q-card-section>
          <div class="balance_head flex justify-center q-pt-lg q-pb-lg">
            Sale Collect
          </div>
          <div class="text-center balance_field flex justify-between">
            <p>Bank</p>
            <p>Cash</p>
          </div>
          <div class="text-center flex justify-between">
            <p>₹ {{ balance.bankBySales }}</p>
            <p>₹ {{ balance.cashBySales }}</p>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 col-md-3 col-lg-3">
      <q-card flat bordered class="card_height">
        <q-card-section>
          <div class="balance_head flex justify-center q-pt-lg q-pb-lg">
            Downpayment Collect
          </div>
          <div class="text-center balance_field flex justify-between">
            <p>Bank</p>
            <p>Cash</p>
          </div>
          <div class="text-center flex justify-between">
            <p>₹ {{ balance.bankByDP }}</p>
            <p>₹ {{ balance.cashByDP }}</p>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 col-md-3 col-lg-3">
      <q-card flat bordered class="card_height">
        <q-card-section>
          <div class="balance_head flex justify-center q-pt-lg q-pb-lg">
            Processing Fees
          </div>
          <div class="text-center balance_field flex justify-between">
            <p>Bank</p>
            <p>Cash</p>
          </div>
          <div class="text-center flex justify-between">
            <p>₹ {{ balance.bankByPF }}</p>
            <p>₹ {{ balance.cashByPF }}</p>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 col-md-3 col-lg-3">
      <q-card flat bordered class="card_height">
        <q-card-section>
          <div class="balance_head flex justify-center q-pt-lg q-pb-lg">
            Others
          </div>
          <div class="text-center balance_field flex justify-between">
            <p>Bank</p>
            <p>Cash</p>
          </div>
          <div class="text-center flex justify-between">
            <p>₹ Comming Soon</p>
            <p>₹ Comming Soon</p>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 col-md-3 col-lg-3">
      <q-card flat bordered class="card_height">
        <q-card-section>
          <div class="balance_head flex justify-center q-pt-lg q-pb-lg">
            Expenses
          </div>
          <div class="text-center balance_field flex justify-between">
            <p>Bank</p>
            <p>Cash</p>
          </div>
          <div class="text-center flex justify-between">
            <p>₹ {{ balance.bankExpenseDaily }}</p>
            <p>₹ {{ balance.cashExpenseDaily }}</p>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 col-md-3 col-lg-3">
      <q-card flat bordered class="card_height">
        <q-card-section>
          <div class="balance_head flex justify-center q-pt-lg q-pb-lg">
            Closing Balance
          </div>
          <div class="text-center balance_field flex justify-between">
            <p>Bank</p>
            <p>Cash</p>
          </div>
          <div class="text-center flex justify-between">
            <p>₹ {{ balance.bankClosingBal }}</p>
            <p>₹ {{ balance.cashClosingBal }}</p>
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

export default defineComponent({
  name: "OpeningClose",

  components: {},

  computed: {
    ...mapFields("openingclose", ["filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();

    const { getAction } = useStoreModule();
    const { getOpeningClosingSummary } = getAction("openingclose", [
      "getOpeningClosingSummary",
    ]);

    const balance = ref({});

    onMounted(() => {
      getOpeningClosingSummary().then((response) => {
        balance.value = response.data;
        console.log(balance.value);
      });
    });

    return {
      hasEditPermission: true,
      aditionalActions: false,
      balance,
    };
  },
});
</script>

<style>
.balance_head {
  font-size: 1.2rem;
  font-weight: 600;
}

.card_height {
  min-height: 250px;
}

.balance_field {
  font-size: 1.1rem;
}
</style>
