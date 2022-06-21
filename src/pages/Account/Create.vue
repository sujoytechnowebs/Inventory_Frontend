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
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
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
                    : 'Please write the Account Name',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="phone"
              outlined
              v-model="phone"
              dense
              label="Phone Number"
              :rules="[
                (val) =>
                  (val && !validationErrors.phone > 0) || validationErrors.phone
                    ? validationErrors.phone
                    : 'Please write the Phone Number',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="email"
              outlined
              v-model="email"
              dense
              label="Email"
              :rules="[
                (val) =>
                  (val && !validationErrors.email > 0) || validationErrors.email
                    ? validationErrors.email
                    : 'Please write the Email',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <QSearch
              v-model="city_id"
              label="City Name"
              option-value="id"
              option-label="city_name"
              data-store="city"
              action="getItems"
              :multiple="false"
              :rules="[
                (val) =>
                  (val && !validationErrors.city_id > 0) ||
                  validationErrors.city_id
                    ? validationErrors.city_id
                    : 'Please choose the City Name',
              ]"
            ></QSearch>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="address_1"
              outlined
              v-model="address_1"
              dense
              label="Address 1"
              :rules="[
                (val) =>
                  (val && !validationErrors.address_1 > 0) ||
                  validationErrors.address_1
                    ? validationErrors.address_1
                    : 'Please write the Address 1',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="address_2"
              outlined
              v-model="address_2"
              dense
              label="Address 2"
              :rules="[
                (val) =>
                  (val && !validationErrors.address_2 > 0) ||
                  validationErrors.address_2
                    ? validationErrors.address_2
                    : 'Please write the Address 2',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="postcode"
              outlined
              v-model="postcode"
              dense
              label="PostCode"
              :rules="[
                (val) =>
                  (val && !validationErrors.postcode > 0) ||
                  validationErrors.postcode
                    ? validationErrors.postcode
                    : 'Please write the Postcode',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
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

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="adhaar_media_id"
              outlined
              v-model="adhaar_media_id"
              dense
              label="Aadhaar Card "
              :rules="[
                (val) =>
                  (val && !validationErrors.adhaar_media_id > 0) ||
                  validationErrors.adhaar_media_id
                    ? validationErrors.adhaar_media_id
                    : 'Please write the aadhaar card number',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="type"
              outlined
              v-model="type"
              dense
              label="Type"
              :rules="[
                (val) =>
                  (val && !validationErrors.type > 0) || validationErrors.type
                    ? validationErrors.type
                    : 'Please write the type',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="account_no"
              outlined
              v-model="account_no"
              dense
              label="Account Number"
              :rules="[
                (val) =>
                  (val && !validationErrors.account_no > 0) ||
                  validationErrors.account_no
                    ? validationErrors.account_no
                    : 'Please write the Account Number',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="ifsc"
              outlined
              v-model="ifsc"
              dense
              label="IFSC CODE"
              :rules="[
                (val) =>
                  (val && !validationErrors.ifsc > 0) || validationErrors.ifsc
                    ? validationErrors.ifsc
                    : 'Please write the IFSC CODE',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="bank_branch"
              outlined
              v-model="bank_branch"
              dense
              label="Bank Branch"
              :rules="[
                (val) =>
                  (val && !validationErrors.bank_branch > 0) ||
                  validationErrors.bank_branch
                    ? validationErrors.bank_branch
                    : 'Please write the Bank Branch',
              ]"
            >
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
  name: "AccountCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "account",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  computed: {
    ...mapFields("account", [
      "newItem.account_name",
      "newItem.phone",
      "newItem.email",
      "newItem.city_id",
      "newItem.address_1",
      "newItem.address_2",
      "newItem.postcode",
      "newItem.branch_id",
      "newItem.adhaar_media_id",
      "newItem.type",
      "newItem.account_no",
      "newItem.ifsc",
      "newItem.bank_branch",
    ]),
  },
};
</script>
