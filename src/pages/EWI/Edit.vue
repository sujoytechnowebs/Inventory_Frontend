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
            <QSearch
              v-model="collected_by"
              label="Collected By"
              option-value="id"
              option-label="name"
              data-store="user"
              action="getItems"
              :multiple="false"
              :rules="[
                (val) =>
                  (val && !validationErrors.collected_by > 0) ||
                  validationErrors.collected_by
                    ? validationErrors.collected_by
                    : 'Please Chose The User Name',
              ]"
            ></QSearch>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              outlined
              label="Collected Date"
              dense
              v-model="collected_date"
              mask="date"
              :rules="[
                (val) =>
                  (val && !validationErrors.collected_date > 0) ||
                  validationErrors.collected_date
                    ? validationErrors.collected_date
                    : 'Please Chose The Collected Date',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="collected_date">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
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
          <div class="col-12 col-md-6 col-lg-6">
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
          <div class="col-12 col-md-6 col-lg-6">
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
