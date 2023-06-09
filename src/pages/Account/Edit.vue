<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Account"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <q-input
              ref="account_name"
              outlined
              v-model="account_name"
              dense
              label="Account Name"
              @keydown="checkKeyDownAlphaNumeric($event)"
              :error-message="$getValidationErrors('account_name')"
              :error="$hasValidationErrors('account_name')"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-select
              outlined
              dense
              v-model="type"
              :options="account_type"
              label="Account Type"
              option-value="value"
              option-label="label"
              option-disable="inactive"
              emit-value
              map-options
              :error-message="$getValidationErrors('account_type')"
              :error="$hasValidationErrors('account_type')"
            ></q-select>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="branch_id"
              label="Branch"
              option-value="id"
              option-label="name"
              data-store="branch"
              action="getItems"
              :multiple="false"
              :error-message="$getValidationErrors('branch_id')"
              :error="$hasValidationErrors('branch_id')"
            ></QSearch>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="opening_balance"
              outlined
              v-model="opening_balance"
              dense
              v-on:keypress="NumbersOnly"
              label="Opening Balance"
              :error-message="$getValidationErrors('opening_balance')"
              :error="$hasValidationErrors('opening_balance')"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-select
              outlined
              dense
              v-model="balance_type"
              :options="balance_category"
              label="Opening Balance Type"
              :error-message="$getValidationErrors('balance_type')"
              :error="$hasValidationErrors('balance_type')"
            ></q-select>
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
  name: "BankEditCreatePage",
  setup() {
    return {
      modal: true,
      dataStore: "account",
      saveaction: "account/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
      account_type: [
        {
          value: "income",
          label: "Income",
        },
        {
          value: "expense",
          label: "Expense",
        },
        {
          value: "cash",
          label: "Cash",
        },
        {
          value: "bank",
          label: "Bank",
        },
        {
          value: "purchase",
          label: "Purchase",
        },
        {
          value: "dr",
          label: "Debit",
        },
      ],
      balance_category: [
        {
          value: "cr",
          label: "Credit",
        },
        {
          value: "dr",
          label: "Debit",
        },
      ],
    };
  },
  computed: {
    ...mapFields("account", [
      "editItem.account_name",
      "editItem.type",
      "editItem.branch_id",
      "editItem.opening_balance",
      "editItem.balance_type",
      "editItem.is_nominal",
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

    checkKeyDownAlphaNumeric(event) {
      if (!/[a-zA-Z\s]/.test(event.key)) {
        this.ignoredValue = event.key ? event.key : "";
        event.preventDefault();
      }
    },
  },
};
</script>
