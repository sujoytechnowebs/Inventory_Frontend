<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="customer/createItem"
        :data-store="dataStore"
        title="Add Customer"
      >
        <p class="customer_form_title text-weight-medium q-pt-sm">
          Customer Details
        </p>
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
                  :error-message="$getValidationErrors('group_id')"
                  :error="$hasValidationErrors('group_id')"
                ></QSearch>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <q-select
                  outlined
                  v-model="group_role"
                  dense
                  :options="grp_role_options"
                  label
                  :error-message="$getValidationErrors('group_role')"
                  :error="$hasValidationErrors('group_role')"
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
                  :error-message="$getValidationErrors('account_name')"
                  :error="$hasValidationErrors('account_name')"
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
                  :error-message="$getValidationErrors('name')"
                  :error="$hasValidationErrors('name')"
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
                  :error-message="$getValidationErrors('DOB')"
                  :error="$hasValidationErrors('DOB')"
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
                  :error-message="$getValidationErrors('spouse_parent_name')"
                  :error="$hasValidationErrors('spouse_parent_name')"
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
                  :error-message="$getValidationErrors('phone')"
                  :error="$hasValidationErrors('phone')"
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
                  :error-message="$getValidationErrors('email')"
                  :error="$hasValidationErrors('email')"
                />
              </div>
              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="occupation"
                  outlined
                  v-model="occupation"
                  dense
                  label
                  :error-message="$getValidationErrors('occupation')"
                  :error="$hasValidationErrors('occupation')"
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
                  :error-message="$getValidationErrors('house')"
                  :error="$hasValidationErrors('house')"
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
                  :error-message="$getValidationErrors('monthly_income')"
                  :error="$hasValidationErrors('monthly_income')"
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
                  :error-message="$getValidationErrors('city_name')"
                  :error="$hasValidationErrors('city_name')"
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
                  :error-message="$getValidationErrors('postcode')"
                  :error="$hasValidationErrors('postcode')"
                >
                  <template v-slot:label>
                    Pin Code
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
                </q-input>
              </div>
              <div class="col-12">
                <span class="customer_form_title text-weight-medium"
                  >Current Address</span
                >
                <q-editor
                  placeholder="Please Write The Address"
                  v-model="address_1"
                  min-height="10rem"
                  :error-message="$getValidationErrors('address_1')"
                  :error="$hasValidationErrors('address_1')"
                >
                </q-editor>

                <q-card-section v-html="editor" />
              </div>

              <div class="col-12 col-md-6 col-lg-6">
                <q-input
                  ref="opening_balance"
                  outlined
                  v-model="opening_balance"
                  label="Opening Balance"
                  type="number"
                  dense
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
                  :options="options"
                  label="Opening Balance Type"
                  :error-message="$getValidationErrors('opening_balance_type')"
                  :error="$hasValidationErrors('opening_balance_type')"
                ></q-select>
              </div>
            </div>
          </div>
        </div>
        <q-separator />
        <p class="customer_form_title text-weight-medium q-pt-sm">
          Other Details
        </p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="aadhar_card_no"
              outlined
              v-model="aadhar_card_no"
              dense
              type="number"
              label
              :error-message="$getValidationErrors('aadhar_card_no')"
              :error="$hasValidationErrors('aadhar_card_no')"
            >
              <template v-slot:label>
                Aadhar Card Number
                <span class="text-weight-bold text-negative">*</span>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <q-uploader
              label="Upload Aadhar Document"
              square
              flat
              bordered
              class="full-width"
              :factory="factoryFn"
            />
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="aadhar_card_no"
              outlined
              v-model="aadhar_card_no"
              dense
              type="number"
              label
              :error-message="$getValidationErrors('aadhar_card_no')"
              :error="$hasValidationErrors('aadhar_card_no')"
            >
              <template v-slot:label>
                Voter Card Number
                <span class="text-weight-bold text-negative">*</span>
              </template>
            </q-input>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-6">
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
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";

export default {
  name: "CityCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "customer",
      validationErrors: ref({}),
      modelValue: ref(),
      house_options: ["own", "rent", "tea estate"],
      grp_role_options: ["leader", "member"],
      options: ["cr", "dr"],
    };
  },

  computed: {
    ...mapFields("customer", [
      "newItem.name",
      "newItem.email",
      "newItem.account_name",
      "newItem.spouse_parent_name",
      "newItem.phone",
      "newItem.city_id",
      "newItem.address_1",
      "newItem.postcode",
      "newItem.aadhar_card_no",
      "newItem.occupation",
      "newItem.house",
      "newItem.monthly_income",
      "newItem.group_id",
      "newItem.group_role",
      "newItem.DOB",
      "newItem.opening_balance",
      "newItem.opening_balance_type",
    ]),
  },

  methods: {
    ...mapActions("customer", ["media"]),

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
