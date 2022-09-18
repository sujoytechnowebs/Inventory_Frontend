<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="stockholder/createItem"
        :data-store="dataStore"
        o
        title="Add Investor Amount"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <QSearch
              v-model="investorAccountId"
              label="Investor"
              option-value="id"
              option-label="name"
              data-store="user"
              action="getInvestor"
              :multiple="false"
              :error-message="$getValidationErrors('investorAccountId')"
              :error="$hasValidationErrors('investorAccountId')"
            ></QSearch>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <QSearch
              v-model="to_account_id"
              label="From Account"
              option-value="id"
              option-label="account_name"
              data-store="account"
              action="getAccountsType"
              :multiple="false"
              :error-message="$getValidationErrors('to_account_id')"
              :error="$hasValidationErrors('to_account_id')"
            ></QSearch>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-select
              dense
              outlined
              v-model="action_name"
              :options="options"
              label="Investment Type"
              :error-message="$getValidationErrors('action_name')"
              :error="$hasValidationErrors('action_name')"
            />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              dense
              label="Date"
              outlined
              v-model="date"
              mask="date"
              :error-message="$getValidationErrors('date')"
              :error="$hasValidationErrors('date')"
            >
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
              v-on:keypress="NumbersOnly"
              :error-message="$getValidationErrors('amount')"
              :error="$hasValidationErrors('amount')"
            ></q-input>
          </div>
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "StackHolderCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "stockholder",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["invest", "withdral", "loan"],
    };
  },

  computed: {
    ...mapFields("stockholder", [
      "newItem.investorAccountId",
      "newItem.action_name",
      "newItem.date",
      "newItem.amount",
      "newItem.toAccount",
    ]),
  },

  methods: {
    NumbersOnly(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
};
</script>
