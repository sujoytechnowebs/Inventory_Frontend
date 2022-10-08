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
                <q-input
                  ref="group_id"
                  outlined
                  v-model="group_id"
                  dense
                  label
                  readonly
                  :error-message="$getValidationErrors('group_id')"
                  :error="$hasValidationErrors('group_id')"
                >
                  <template v-slot:label>
                    Group Name
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <q-input
                  ref="group_role"
                  outlined
                  v-model="group_role"
                  dense
                  label
                  readonly
                  :error-message="$getValidationErrors('group_role')"
                  :error="$hasValidationErrors('group_role')"
                >
                  <template v-slot:label>
                    Group Role
                    <span class="text-weight-bold text-negative">*</span>
                  </template>
                </q-input>
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <q-input
                  ref="account_name"
                  outlined
                  v-model="account_name"
                  dense
                  label
                  @keydown="checkKeyDownAlphaNumeric($event)"
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
                  @keydown="checkKeyDownAlphaNumeric($event)"
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
                  @keydown="checkKeyDownAlphaNumeric($event)"
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
                  option-value="value"
                  option-label="label"
                  option-disable="inactive"
                  emit-value
                  map-options
                  :error-message="$getValidationErrors('house_options')"
                  :error="$hasValidationErrors('house_options')"
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
                  v-on:keypress="NumbersOnly"
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
                  :error-message="$getValidationErrors('city_id')"
                  :error="$hasValidationErrors('city_id')"
                ></QSearch>
              </div>
              <div class="col-12">
                <q-input
                  outlined
                  dense
                  v-model="address_1"
                  label="Address"
                  :error-message="$getValidationErrors('address_1')"
                  :error="$hasValidationErrors('address_1')"
                ></q-input>
              </div>

              <div class="col-12 col-md-6 col-lg-6">
                <q-input
                  ref="opening_balance"
                  outlined
                  v-model="opening_balance"
                  label="Opening Balance"
                  v-on:keypress="NumbersOnly"
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
        <p class="customer_form_title">Other Details</p>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
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
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="voter_card_no"
              outlined
              v-model="voter_card_no"
              dense
              label
              :error-message="$getValidationErrors('voter_card_no')"
              :error="$hasValidationErrors('voter_card_no')"
            >
              <template v-slot:label>
                Voter Card Number
                <span class="text-weight-bold text-negative">*</span>
              </template>
            </q-input>
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
  name: "CustomerEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "customer",
      saveaction: "customer/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
      house_options: [
        {
          value: "own house",
          label: "Own House",
        },
        {
          value: "rent",
          label: "Rent",
        },
        {
          value: "tea estate",
          label: "Tea Estate",
        },
      ],
      grp_role_options: [
        {
          value: "leader",
          label: "Leader",
        },
        {
          value: "member",
          label: "Member",
        },
      ],
      options: [
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
    ...mapFields("customer", [
      "editItem.name",
      "editItem.email",
      "editItem.account_name",
      "editItem.spouse_parent_name",
      "editItem.phone",
      "editItem.city_id",
      "editItem.address_1",
      "editItem.village",
      "editItem.pin",
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
    // Validation

    NumbersOnly(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    checkKeyDownAlphaNumeric(event) {
      if (!/[a-zA-Z\s]/.test(event.key)) {
        this.ignoredValue = event.key ? event.key : "";
        event.preventDefault();
      }
    },
  },
};
</script>
