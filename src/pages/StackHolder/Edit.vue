<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Investor Amount"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <QSearch
              v-model="investorAccountId"
              label="Investor"
              option-value="id"
              option-label="account_name"
              data-store="account"
              action="getItems"
              :multiple="false"
            ></QSearch>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <QSearch
              v-model="toAccount"
              label="From Account"
              option-value="id"
              option-label="account_name"
              data-store="account"
              action="getItems"
              :multiple="false"
            ></QSearch>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-select
              dense
              outlined
              v-model="action_name"
              :options="options"
              label="Investment Type"
            />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input dense label="Date" outlined v-model="date" mask="date">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date">
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
            <q-input
              outlined
              type
              dense
              v-model="amount"
              label="Amount"
            ></q-input>
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
  name: "StackHolderEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "stackholder",
      saveaction: "stackholder/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },
  computed: {
    ...mapFields("stackholder", [
      "editItem.investorAccountId",
      "editItem.action_name",
      "editItem.date",
      "editItem.amount",
      "editItem.toAccount",
    ]),
  },
};
</script>
