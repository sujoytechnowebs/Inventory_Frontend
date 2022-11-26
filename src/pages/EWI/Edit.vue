<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="EWI Collection"
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
              ref="ewi"
              outlined
              v-model="ewi"
              dense
              type="number"
              readonly
              label="EWi Amount"
              :rules="[
                (val) =>
                  (val && !validationErrors.ewi > 0) || validationErrors.ewi
                    ? validationErrors.ewi
                    : 'Please write the payment amount',
              ]"
            >
            </q-input>
          </div>
          <div class="col-12">
            <q-input
              ref="paymentAmount"
              outlined
              v-model="paymentAmount"
              dense
              type="number"
              label="Payment Amount"
              :rules="[
                (val) =>
                  (val && !validationErrors.paymentAmount > 0) ||
                  validationErrors.paymentAmount
                    ? validationErrors.paymentAmount
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
      dataStore: "ewi",
      saveaction: "ewi/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["cash", "bank"],
    };
  },
  computed: {
    ...mapFields("ewi", [
      "editItem.collected_by",
      "editItem.collected_date",
      "editItem.payment_method",
      "editItem.paymentAmount",
      "editItem.ewi",
    ]),
  },
};
</script>
