<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="bankcash/createItem"
        :data-store="dataStore"
        title="Add Transaction"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-3 col-lg-3">
            <QSearch
              v-model="toAccount"
              label="To Account"
              option-value="id"
              option-label="account_name"
              data-store="account"
              action="getAccountsType"
              :multiple="false"
            ></QSearch>
          </div>
          <div class="col-12 col-md-3 col-lg-3">
            <QSearch
              v-model="fromAccount"
              label="From Account"
              option-value="id"
              option-label="account_name"
              data-store="account"
              action="getAccountsType"
              :multiple="false"
            ></QSearch>
          </div>
          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              outlined
              dense
              label="Date"
              v-model="date_of_transaction"
              mask="date"
              :rules="['date']"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date_of_transaction">
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
          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="amount"
              outlined
              v-model="amount"
              dense
              label="Amount"
              v-on:keypress="NumbersOnly"
            >
            </q-input>
          </div>
          <div class="col-12">
            <q-input ref="note" outlined v-model="note" dense label="Note">
            </q-input>
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
  name: "BankCashCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "bankcash",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  computed: {
    ...mapFields("bankcash", [
      "newItem.toAccount",
      "newItem.fromAccount",
      "newItem.date_of_transaction",
      "newItem.amount",
      "newItem.note",
    ]),
  },

  methods: {
    checkKeyDownAlphaNumeric(event) {
      if (!/[a-zA-Z\s]/.test(event.key)) {
        this.ignoredValue = event.key ? event.key : "";
        event.preventDefault();
      }
    },
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

<style scoped>
.address_head {
  font-size: 1rem;
  font-weight: 600;
}
</style>
