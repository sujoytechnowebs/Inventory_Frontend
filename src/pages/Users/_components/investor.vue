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
            label="Investor Name"
            :rules="[
              (val) =>
                (val && !validationErrors.account_name > 0) ||
                validationErrors.account_name
                  ? validationErrors.account_name
                  : 'Please Write The Investor Name',
            ]"
          />
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="name"
            outlined
            v-model="name"
            dense
            label="User Name"
            :rules="[
              (val) =>
                (val && !validationErrors.name > 0) || validationErrors.name
                  ? validationErrors.name
                  : 'Please Write The User Name',
            ]"
          />
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="phone"
            outlined
            v-model="phone"
            dense
            label="Mobile Number"
            type="number"
            :rules="[
              (val) =>
                (val && !validationErrors.phone > 0) || validationErrors.phone
                  ? validationErrors.phone
                  : 'Please Write The Mobile Number',
            ]"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="email"
            outlined
            v-model="email"
            dense
            label="Email"
            :rules="[email]"
          />
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
        :rules="[account_no]"
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
        :rules="[ifsc]"
      />
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        ref="bank_branch"
        outlined
        v-model="bank_branch"
        dense
        label="Bank Branch"
        :rules="[bank_branch]"
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
  font-size: 1.3rem;
  font-weight: 600;
}
</style>
