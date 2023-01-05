<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="EMI Collection"
      >
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12">
            <q-select
              outlined
              v-model="payment_method"
              :options="options"
              label="Payment Method"
              dense
              :rules="[
                (val) =>
                  (val && !validationErrors.payment_method > 0) ||
                  validationErrors.payment_method
                    ? validationErrors.payment_method
                    : 'Please Chose The Payment Method',
              ]"
            />
          </div>
          <div class="col-12">
            <q-input
              ref="emi_amount"
              outlined
              v-model="emi_amount"
              dense
              type="number"
              readonly
              label="EMi Amount"
              :rules="[
                (val) =>
                  (val && !validationErrors.emi_amount > 0) ||
                  validationErrors.emi_amount
                    ? validationErrors.emi_amount
                    : 'Please write the payment amount',
              ]"
            >
            </q-input>
          </div>
          <div class="col-12">
            <q-input
              ref="amount"
              outlined
              v-model="amount"
              dense
              type="number"
              label="Payment Amount"
              :rules="[
                (val) =>
                  (val && !validationErrors.amount > 0) ||
                  validationErrors.amount
                    ? validationErrors.amount
                    : 'Please write the payment amount',
              ]"
            >
            </q-input>
          </div>
        </div>
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "EWIEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "emi",
      saveaction: "emi/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["cash", "bank"],
    };
  },
  computed: {
    ...mapFields("emi", [
      "editItem.collected_by",
      "editItem.collected_date",
      "editItem.payment_method",
      "editItem.amount",
      "editItem.emi_amount",
    ]),
  },
};
</script>
