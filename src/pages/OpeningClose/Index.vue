<template>
  <div class="row q-col-gutter-md q-pa-md">
    <div class="col-12 col-md-3 col-lg-3">
      <q-card
        flat
        bordered
        class="card_height flex justify-center items-center"
      >
        <q-card-section>
          <div class="balance_head">Opening Balance</div>
          <div class="text-center balance_field">₹ {{ data.openingBal }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-3 col-lg-3">
      <q-card
        flat
        bordered
        class="card_height flex justify-center items-center"
      >
        <q-card-section>
          <div class="balance_head">EWI Collect</div>
          <div class="text-center balance_field">₹ {{ data.openingBal }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-3 col-lg-3">
      <q-card
        flat
        bordered
        class="card_height flex justify-center items-center"
      >
        <q-card-section>
          <div class="balance_head">Cash Sale Collect</div>
          <div class="text-center balance_field">₹ {{ data.openingBal }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-3 col-lg-3">
      <q-card
        flat
        bordered
        class="card_height flex justify-center items-center"
      >
        <q-card-section>
          <div class="balance_head">Downpayment Collect</div>
          <div class="text-center balance_field">₹ {{ data.openingBal }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-3 col-lg-3">
      <q-card
        flat
        bordered
        class="card_height flex justify-center items-center"
      >
        <q-card-section>
          <div class="balance_head">Processing Fees</div>
          <div class="text-center balance_field">₹ {{ data.openingBal }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-3 col-lg-3">
      <q-card
        flat
        bordered
        class="card_height flex justify-center items-center"
      >
        <q-card-section>
          <div class="balance_head">Others</div>
          <div class="text-center balance_field">₹ {{ data.openingBal }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-3 col-lg-3">
      <q-card
        flat
        bordered
        class="card_height flex justify-center items-center"
      >
        <q-card-section>
          <div class="balance_head">Expenses</div>
          <div class="text-center balance_field">₹ {{ data.openingBal }}</div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 col-md-3 col-lg-3">
      <q-card
        flat
        bordered
        class="card_height flex justify-center items-center"
      >
        <q-card-section>
          <div class="balance_head">Closing Balance</div>
          <div class="text-center balance_field">₹ {{ data.openingBal }}</div>
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

    const data = ref({});

    onMounted(() => {
      getOpeningClosingSummary().then((response) => {
        data.value = response.data.data;
      });
    });

    return {
      hasEditPermission: true,
      dataStore: "profitloss",
      aditionalActions: false,
      data,
    };
  },
});
</script>

<style>
.balance_head {
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
