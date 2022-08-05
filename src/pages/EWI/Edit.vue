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
          <div class="col-12">
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
              ref="numberOfInstallment"
              outlined
              v-model="numberOfInstallment"
              dense
              type="number"
              label="Number of Installation"
              :rules="[
                (val) =>
                  (val && !validationErrors.numberOfInstallment > 0) ||
                  validationErrors.numberOfInstallment
                    ? validationErrors.numberOfInstallment
                    : 'Please write the number of installation',
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
      "editItem.numberOfInstallment",
    ]),
  },
};
</script>
