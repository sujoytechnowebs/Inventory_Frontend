<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="user/createItem"
        :data-store="dataStore"
        title="Add Users"
      >
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Full Name"
              :rules="[
                (val) =>
                  (val && !validationErrors.names > 0) || validationErrors.names
                    ? validationErrors.names
                    : 'Please write something',
              ]"
            />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="password"
              outlined
              v-model="password"
              dense
              type="password"
              label="Password"
              :rules="[
                (val) =>
                  (val && !validationErrors.password > 0) ||
                  validationErrors.password
                    ? validationErrors.password
                    : 'Please Write Your Password',
              ]"
            />
          </div>
          <!-- <div class="col-12 col-md-6 col-lg-6">
            <q-field
              ref="role"
              v-model="role"
              input-debounce="0"
              borderless
              lazy-rules
              :rules="[
                (val) =>
                  (val && val != 0 && !validationErrors.role > 0) ||
                  validationErrors.role
                    ? validationErrors.role
                    : 'Please select role',
              ]"
            >
              <template v-slot:control>
                <QSearch
                  v-model="role"
                  label="Role"
                  option-value="id"
                  option-label="role"
                  :data-store="dataStore"
                  action="getRoles"
                  :multiple="false"
                />
              </template>
            </q-field>
          </div> -->
          <div class="col-12 col-md-6 col-lg-6">
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
                    : 'Please write something',
              ]"
            />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="role"
              label="Role"
              option-value="code"
              option-label="role"
              data-store="state"
              action="getRoles"
              :multiple="false"
              :rules="[
                (val) =>
                  (val && !validationErrors.state_id > 0) ||
                  validationErrors.state_id
                    ? validationErrors.state_id
                    : 'Please choose the state name',
              ]"
            ></QSearch>
          </div>
        </div>

        <q-separator />

        <p class="other-section-head">Accounts Details</p>

        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
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
                    : 'Please Write Your Account Name',
              ]"
            />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="phone"
              outlined
              v-model="phone"
              dense
              label="Phone"
              type="phone"
              :rules="[
                (val) =>
                  (val && !validationErrors.phone > 0) || validationErrors.phone
                    ? validationErrors.phone
                    : 'Please Write Your Phone Number',
              ]"
            />
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
                  (val && !validationErrors.id > 0) || validationErrors.id
                    ? validationErrors.id
                    : 'Please Choose The City Name',
              ]"
            ></QSearch>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="address_1"
              outlined
              v-model="address_1"
              dense
              label="Current Address"
              :rules="[
                (val) =>
                  (val && !validationErrors.address_1 > 0) ||
                  validationErrors.address_1
                    ? validationErrors.address_1
                    : 'Please Write The Current Address',
              ]"
            />
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="address_2"
              outlined
              v-model="address_2"
              dense
              label="Permanent Address"
              :rules="[
                (val) =>
                  (val && !validationErrors.address_2 > 0) ||
                  validationErrors.address_2
                    ? validationErrors.address_2
                    : 'Please Write The Permanent Address',
              ]"
            />
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
                    : 'Please Write The PostCode',
              ]"
            />
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
              label="Aadhaar Card Number"
              :rules="[
                (val) =>
                  (val && !validationErrors.adhaar_media_id > 0) ||
                  validationErrors.adhaar_media_id
                    ? validationErrors.adhaar_media_id
                    : 'Please Write The Aadhaar Number',
              ]"
            />
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
                    : 'Please Write The Account Number',
              ]"
            />
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="ifsc"
              outlined
              v-model="ifsc"
              dense
              label="IFSC Number"
              :rules="[
                (val) =>
                  (val && !validationErrors.ifsc > 0) || validationErrors.ifsc
                    ? validationErrors.ifsc
                    : 'Please Write The IFSC Number',
              ]"
            />
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
                    : 'Please Write The Bank Branch',
              ]"
            />
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
  name: "UsersCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "user",
      validationErrors: ref({}),
    };
  },

  computed: {
    ...mapFields("user", [
      "newItem.name",
      "newItem.email",
      "newItem.password",
      "newItem.role",
      "newItem.account_name",
      "newItem.phone",
      "newItem.city_id",
      "newItem.address_1",
      "newItem.address_2",
      "newItem.postcode",
      "newItem.branch_id",
      "newItem.adhaar_media_id",
      "newItem.account_no",
      "newItem.ifsc",
      "newItem.bank_branch",
    ]),
  },
};
</script>

<style scoped>
.other-section-head {
  font-size: 1.5rem;
}
</style>
