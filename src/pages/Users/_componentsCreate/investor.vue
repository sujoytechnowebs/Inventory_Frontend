<template>
  <q-separator class="q-mt-md" />
  <p class="investor_form_title text-weight-medium q-pt-sm">Investor Details</p>
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
      </div>
    </div>
  </div>
  <q-separator />
  <p class="investor_form_title text-weight-medium q-pt-sm">Bank Details</p>
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
        type="number"
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
    };
  },

  computed: {
    ...mapFields("user", [
      "newItem.name",
      "newItem.account_name",
      "newItem.phone",
      "newItem.email",
      "newItem.account_no",
      "newItem.ifsc",
      "newItem.bank_branch",
    ]),
  },
};
</script>

<style scoped>
.investor_form_title {
  font-size: 1rem;
}
</style>
