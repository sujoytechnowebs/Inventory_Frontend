<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Customer"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6 col-lg-6">
                <QSearch
                  v-model="group_id"
                  label="Group Name"
                  option-value="id"
                  option-label="name"
                  data-store="group"
                  action="getItems"
                  :multiple="false"
                  :rules="[
                    (val) =>
                      (val && !validationErrors.group_id > 0) ||
                      validationErrors.group_id
                        ? validationErrors.group_id
                        : 'Please Choose The Group Name',
                  ]"
                ></QSearch>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <q-select
                  outlined
                  v-model="group_role"
                  dense
                  :options="grp_role_options"
                  label
                  :rules="[
                    (val) =>
                      (val && !validationErrors.group_role > 0) ||
                      validationErrors.group_role
                        ? validationErrors.group_role
                        : 'Please Choose The Group Role',
                  ]"
                >
                  <template v-slot:label>
                    Group Role
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
                </q-select>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <q-input
                  ref="account_name"
                  outlined
                  v-model="account_name"
                  dense
                  label
                  :rules="[
                    (val) =>
                      (val && !validationErrors.account_name > 0) ||
                      validationErrors.account_name
                        ? validationErrors.account_name
                        : 'Please Write The Customer Name',
                  ]"
                >
                  <template v-slot:label>
                    Customer Name
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
                  :rules="[
                    (val) =>
                      (val && !validationErrors.name > 0) ||
                      validationErrors.name
                        ? validationErrors.name
                        : 'Please Write The User Name',
                  ]"
                >
                  <template v-slot:label>
                    UserName
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  outlined
                  dense
                  v-model="DOB"
                  label
                  mask="date"
                  :rules="[
                    (val) =>
                      (val && !validationErrors.DOB > 0) || validationErrors.DOB
                        ? validationErrors.DOB
                        : 'Please Pick The Date',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="DOB">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                  <template v-slot:label>
                    Date of Birth
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="spouse_parent_name"
                  outlined
                  v-model="spouse_parent_name"
                  dense
                  label
                  :rules="[
                    (val) =>
                      (val && !validationErrors.spouse_parent_name > 0) ||
                      validationErrors.spouse_parent_name
                        ? validationErrors.spouse_parent_name
                        : 'Please Write The Spouse / Parent Name',
                  ]"
                >
                  <template v-slot:label>
                    Spouse Name/Parent Name
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="phone"
                  outlined
                  v-model="phone"
                  dense
                  label
                  type="number"
                  :rules="[
                    (val) =>
                      (val && !validationErrors.phone > 0) ||
                      validationErrors.phone
                        ? validationErrors.phone
                        : 'Please Write The Phone Number',
                  ]"
                >
                  <template v-slot:label>
                    Mobile Number
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="email"
                  outlined
                  v-model="email"
                  dense
                  label="Email"
                  :rules="[email]"
                />
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="occupation"
                  outlined
                  v-model="occupation"
                  dense
                  label
                  :rules="[
                    (val) =>
                      (val && !validationErrors.occupation > 0) ||
                      validationErrors.occupation
                        ? validationErrors.occupation
                        : 'Please Write The Occupation',
                  ]"
                >
                  <template v-slot:label>
                    Occupation
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <q-select
                  outlined
                  v-model="house"
                  dense
                  :options="house_options"
                  label
                  :rules="[
                    (val) =>
                      (val && !validationErrors.house > 0) ||
                      validationErrors.house
                        ? validationErrors.house
                        : 'Please Choose The House Type',
                  ]"
                >
                  <template v-slot:label>
                    House
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
                </q-select>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="monthly_income"
                  outlined
                  v-model="monthly_income"
                  dense
                  label
                  type="number"
                  :rules="[
                    (val) =>
                      (val && !validationErrors.monthly_income > 0) ||
                      validationErrors.monthly_income
                        ? validationErrors.monthly_income
                        : 'Please Write The Monthly Income',
                  ]"
                >
                  <template v-slot:label>
                    Monthly Income
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
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
                        : 'Please Write The City Name',
                  ]"
                ></QSearch>
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="postcode"
                  outlined
                  v-model="postcode"
                  dense
                  label
                  type="number"
                  :rules="[
                    (val) =>
                      (val && !validationErrors.postcode > 0) ||
                      validationErrors.postcode
                        ? validationErrors.postcode
                        : 'Please Write The Pincode',
                  ]"
                >
                  <template v-slot:label>
                    Pin Code
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
                </q-input>
              </div>
              <div class="col-12">
                <q-editor
                  placeholder="Please Write The Address"
                  v-model="address_1"
                  min-height="10rem"
                  :rules="[
                    (val) =>
                      (val && !validationErrors.address_1 > 0) ||
                      validationErrors.address_1
                        ? validationErrors.address_1
                        : 'Please Write The Address',
                  ]"
                >
                </q-editor>

                <q-card-section v-html="editor" />
              </div>
            </div>
          </div>
        </div>
        <q-separator class="q-mb-md" />
        <p class="customer_form_title">Other Details</p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="aadhar_card_no"
              outlined
              v-model="aadhar_card_no"
              dense
              type="number"
              label
              :rules="[
                (val) =>
                  (val && !validationErrors.aadhar_card_no > 0) ||
                  validationErrors.aadhar_card_no
                    ? validationErrors.aadhar_card_no
                    : 'Please Write The aadhar card number',
              ]"
            >
              <template v-slot:label>
                Aadhar Card Number
                <span class="text-weight-bold text-negative">*</span>
              </template>
            </q-input>
          </div>
          <div class="col-12">
            <q-uploader
              label="Upload Aadhar Document"
              square
              flat
              bordered
              class="full-width"
              :factory="factoryFn"
            />
          </div>
        </div>
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";

export default {
  name: "UsersEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "customer",
      saveaction: "customer/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
      house_options: ["own", "rent", "tea estate"],
      grp_role_options: ["leader", "member"],
    };
  },
  computed: {
    ...mapFields("customer", [
      "newItem.name",
      "editItem.email",
      "editItem.account_name",
      "editItem.spouse_parent_name",
      "editItem.phone",
      "editItem.city_id",
      "editItem.address_1",
      "editItem.postcode",
      "editItem.aadhar_card_no",
      "editItem.occupation",
      "editItem.house",
      "editItem.monthly_income",
      "editItem.group_id",
      "editItem.group_role",
      "editItem.DOB",
      "editItem.opening_balance",
      "editItem.opening_balance_type",
      "editItem.voter_card_no",
    ]),
  },

  methods: {
    ...mapActions("user", ["media"]),

    factoryFn(files) {
      let formData = new FormData();
      formData.append("attachment_type", "document");
      formData.append("file", files[0]);
      return new Promise((resolve) => {
        this.media(formData)
          .then((res) => {
            resolve({
              url: res.data.media.url,
            });
          })
          .finally(() => {});
      });
    },
  },
};
</script>
