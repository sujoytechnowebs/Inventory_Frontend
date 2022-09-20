<template>
  <q-separator class="q-mb-md" />
  <p class="investor_form_title">Investor Details</p>
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <div class="row q-col-gutter-md">
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
              Investor Name
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
            label="User Name"
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
            label="Mobile Number"
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
            label="Email"
            :error-message="$getValidationErrors('email')"
            :error="$hasValidationErrors('email')"
          />
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
            option-value="value"
            option-label="label"
            option-disable="inactive"
            emit-value
            map-options
            label="Opening Balance Type"
            :error-message="$getValidationErrors('opening_balance_type')"
            :error="$hasValidationErrors('opening_balance_type')"
          ></q-select>
        </div>
      </div>
    </div>
  </div>
  <q-separator class="q-mb-md" />
  <p class="investor_form_title">Bank Details</p>
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
      />
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
      />
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
      />
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
      options: ["Own", "Rent", "Tea Estate"],
      payments: [
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
    ...mapFields("user", [
      "editItem.name",
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
.investor_form_title {
  font-size: 1.3rem;
  font-weight: 600;
}
</style>
