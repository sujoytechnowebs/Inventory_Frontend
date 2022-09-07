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
              mask="#.##"
              fill-mask="0"
              reverse-fill-mask
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
