<template>
  <q-separator class="q-mb-md" />
  <p class="vendor_form_title">Vendor Details</p>
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
            emit-value
            label="Opening Balance Type"
            :error-message="$getValidationErrors('opening_balance_type')"
            :error="$hasValidationErrors('opening_balance_type')"
          ></q-select>
        </div>
      </div>
    </div>
  </div>
  <q-separator class="q-mb-md" />
  <p class="vendor_form_title">Bank Details</p>
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
      payments: [
        {
          label: "Credit",
          value: "cr",
        },
        {
          label: "Debit",
          value: "dr",
        },
      ],
    };
  },

  computed: {
    ...mapFields("user", [
      "editItem.name",
      "editItem.branch_id",
      "editItem.account_name",
      "editItem.phone",
      "editItem.email",
      "editItem.account_no",
      "editItem.ifsc",
      "editItem.bank_branch",
      "editItem.opening_balance",
      "editItem.opening_balance_type",
    ]),
  },
};
</script>

<style scoped>
.vendor_form_title {
  font-size: 1.3rem;
  font-weight: 600;
}
</style>
