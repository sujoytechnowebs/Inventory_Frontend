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
            :rules="[
              (val) =>
                (val && !validationErrors.branch_id > 0) ||
                validationErrors.branch_id
                  ? validationErrors.branch_id
                  : 'Please choose the Branch Name',
            ]"
          ></QSearch>
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="account_name"
            outlined
            v-model="account_name"
            dense
            label="Vendor Name"
            :rules="[
              (val) =>
                (val && !validationErrors.account_name > 0) ||
                validationErrors.account_name
                  ? validationErrors.account_name
                  : 'Please Write The Name',
            ]"
          ></q-input>
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
                  : 'Please Write The UserName',
            ]"
          ></q-input>
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
                  : 'Please Write The Phone Number',
            ]"
          ></q-input>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="email"
            outlined
            v-model="email"
            dense
            label="Email"
            :rules="[email]"
          ></q-input>
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
        :rules="[account_no]"
      ></q-input>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        ref="ifsc"
        outlined
        v-model="ifsc"
        dense
        label="IFSC Number"
        :rules="[ifsc]"
      ></q-input>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        ref="bank_branch"
        outlined
        v-model="bank_branch"
        dense
        label="Bank Branch"
        :rules="[bank_branch]"
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
