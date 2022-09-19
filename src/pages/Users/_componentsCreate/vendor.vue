<template>
  <q-separator class="q-mt-md" />
  <p class="vendor_form_title text-weight-medium q-pt-sm">Vendor Details</p>
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <div class="row q-col-gutter-md">
        <div class="col-12">
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
          >
          </QSearch>
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="account_name"
            outlined
            v-model="account_name"
            dense
            label
            @keydown="checkKeyDownAlphaNumeric($event)"
            :error-message="$getValidationErrors('account_name')"
            :error="$hasValidationErrors('account_name')"
          >
            <template v-slot:label>
              Vendor Name
              <span class="text-weight-bold text-negative">*</span>
            </template>
          </q-input>
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="name"
            outlined
            v-model="name"
            dense
            label
            @keydown="checkKeyDownAlphaNumeric($event)"
            :error-message="$getValidationErrors('name')"
            :error="$hasValidationErrors('name')"
          >
            <template v-slot:label>
              User Name
              <span class="text-weight-bold text-negative">*</span>
            </template>
          </q-input>
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="phone"
            outlined
            v-model="phone"
            dense
            label
            type="number"
            :error-message="$getValidationErrors('phone')"
            :error="$hasValidationErrors('phone')"
          >
            <template v-slot:label>
              Mobile Number
              <span class="text-weight-bold text-negative">*</span>
            </template>
          </q-input>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="email"
            outlined
            v-model="email"
            dense
            label
            :error-message="$getValidationErrors('email')"
            :error="$hasValidationErrors('email')"
          >
            <template v-slot:label> Email </template>
          </q-input>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="opening_balance"
            outlined
            v-model="opening_balance"
            label="Opening Balance"
            dense
            v-on:keypress="NumbersOnly"
            :error-message="$getValidationErrors('opening_balance')"
            :error="$hasValidationErrors('opening_balance')"
          >
          </q-input>
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <q-select
            outlined
            dense
            v-model="opening_balance_type"
            :options="payments"
            label="Opening Balance Type"
            :error-message="$getValidationErrors('opening_balance_type')"
            :error="$hasValidationErrors('opening_balance_type')"
          ></q-select>
        </div>
      </div>
    </div>
  </div>
  <q-separator />
  <p class="vendor_form_title text-weight-medium q-pt-sm">Bank Details</p>
  <div class="row q-col-gutter-md">
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        ref="account_no"
        outlined
        v-model="account_no"
        dense
        type="number"
        label="Account Number"
        :error-message="$getValidationErrors('account_no')"
        :error="$hasValidationErrors('account_no')"
      ></q-input>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        ref="ifsc"
        outlined
        v-model="ifsc"
        dense
        label="IFSC Number"
        :error-message="$getValidationErrors('ifsc')"
        :error="$hasValidationErrors('ifsc')"
      ></q-input>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        ref="bank_branch"
        outlined
        v-model="bank_branch"
        dense
        label="Bank Branch"
        @keydown="checkKeyDownAlphaNumeric($event)"
        :error-message="$getValidationErrors('bank_branch')"
        :error="$hasValidationErrors('bank_branch')"
      ></q-input>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "customerPage",
  setup() {
    return {
      modal: ref(true),
      validationErrors: ref({}),
      payments: ["cr", "dr"],
    };
  },

  computed: {
    ...mapFields("user", [
      "newItem.name",
      "newItem.branch_id",
      "newItem.account_name",
      "newItem.phone",
      "newItem.email",
      "newItem.account_no",
      "newItem.ifsc",
      "newItem.bank_branch",
      "newItem.opening_balance",
      "newItem.opening_balance_type",
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

<style scoped>
.vendor_form_title {
  font-size: 1rem;
}
</style>
