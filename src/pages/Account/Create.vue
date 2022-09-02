<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="account/createItem"
        :data-store="dataStore"
        title="Add Accounts"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <q-input
              ref="account_name"
              outlined
              v-model="account_name"
              dense
              label="Account Name"
              :rules="[
                (val) =>
                  (val && !validationErrors.account_name > 0) ||
                  validationErrors.account_name
                    ? validationErrors.account_name
                    : 'Please Write The Account Name',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.type > 0) || validationErrors.type
                    ? validationErrors.type
                    : 'Please Choose The Account Type',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.branch_id > 0) ||
                  validationErrors.branch_id
                    ? validationErrors.branch_id
                    : 'Please choose the Branch name',
              ]"
            ></QSearch>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="opening_balance"
              outlined
              v-model="opening_balance"
              dense
              mask="#.##"
              fill-mask="0"
              reverse-fill-mask
              label="Opening Balance"
              :rules="[
                (val) =>
                  (val && !validationErrors.opening_balance > 0) ||
                  validationErrors.opening_balance
                    ? validationErrors.opening_balance
                    : 'Please Write The Opening Balance',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.balance_type > 0) ||
                  validationErrors.balance_type
                    ? validationErrors.balance_type
                    : 'Please Choose The Opening Balance Type',
              ]"
            ></q-select>
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
  name: "AccountCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "account",
      validationErrors: ref({}),
      modelValue: ref(),
      account_type: ["bank", "cash"],
      balance_category: ["cr", "dr"],
    };
  },

  computed: {
    ...mapFields("account", [
      "newItem.account_name",
      "newItem.type",
      "newItem.branch_id",
      "newItem.opening_balance",
      "newItem.balance_type",
    ]),
  },
};
</script>
