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
                  option-value="value"
                  option-label="label"
                  option-disable="inactive"
                  emit-value
                  map-options
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
                  :error-message="$getValidationErrors('city_name')"
                  :error="$hasValidationErrors('city_name')"
                ></QSearch>
              </div>
              <div class="col-12">
                <p class="incharge_form_title text-weight-medium">Address:</p>
                <q-input
                  ref="address"
                  outlined
                  v-model="address"
                  label="Address"
                  dense
                  :error-message="$getValidationErrors('address')"
                  :error="$hasValidationErrors('address')"
                >
                </q-input>
              </div>

              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="near"
                  outlined
                  v-model="near"
                  label="Near"
                  dense
                  :error-message="$getValidationErrors('near')"
                  :error="$hasValidationErrors('near')"
                >
                </q-input>
              </div>

              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="village"
                  outlined
                  v-model="village"
                  label="Village"
                  dense
                  :error-message="$getValidationErrors('village')"
                  :error="$hasValidationErrors('village')"
                >
                </q-input>
              </div>

              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="post"
                  outlined
                  v-model="post"
                  label="Post Office"
                  dense
                  :error-message="$getValidationErrors('post')"
                  :error="$hasValidationErrors('post')"
                >
                </q-input>
              </div>

              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="block"
                  outlined
                  v-model="block"
                  label="Block"
                  dense
                  :error-message="$getValidationErrors('block')"
                  :error="$hasValidationErrors('block')"
                >
                </q-input>
              </div>

              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="district"
                  outlined
                  v-model="district"
                  label="District"
                  dense
                  :error-message="$getValidationErrors('district')"
                  :error="$hasValidationErrors('district')"
                >
                </q-input>
              </div>

              <div class="col-12 col-md-4 col-lg-4">
                <q-input
                  ref="pin"
                  outlined
                  v-model="pin"
                  label="Pin code"
                  dense
                  v-on:keypress="NumbersOnly"
                  :error-message="$getValidationErrors('pin')"
                  :error="$hasValidationErrors('pin')"
                >
                </q-input>
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
            <q-field
              :error-message="$getValidationErrors('aadhar_media_id')"
              :error="$hasValidationErrors('aadhar_media_id')"
            >
              <q-uploader
                label="Upload Aadhar Document"
                square
                flat
                bordered
                class="full-width"
                :factory="factoryFn"
              />
            </q-field>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
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
          <div class="col-12 col-sm-6 col-md-6 col-lg-6">
            <q-field
              :error-message="$getValidationErrors('voter_media_id')"
              :error="$hasValidationErrors('voter_media_id')"
            >
              <q-uploader
                label="Upload Voter Document"
                square
                flat
                bordered
                class="full-width"
                :factory="factoryFnVoter"
              />
            </q-field>
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
  name: "CustomerCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "customer",
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
      "newItem.name",
      "newItem.email",
      "newItem.account_name",
      "newItem.spouse_parent_name",
      "newItem.phone",
      "newItem.city_id",
      "newItem.postcode",
      "newItem.aadhar_card_no",
      "newItem.occupation",
      "newItem.house",
      "newItem.monthly_income",
      "newItem.group_id",
      "newItem.group_role",
      "newItem.DOB",
      "newItem.voter_card_no",
      "newItem.address",
      "newItem.near",
      "newItem.village",
      "newItem.post",
      "newItem.block",
      "newItem.district",
      "newItem.pin",
    ]),
  },

  methods: {
    ...mapActions("customer", ["media", "mediaVoter"]),

    factoryFn(files) {
      let formData = new FormData();
      formData.append("attachment_type", "image");
      formData.append("file", files[0]);
      return new Promise((resolve) => {
        this.media(formData)
          .then((res) => {
            resolve(true);
          })
          .finally(() => {});
      });
    },

    factoryFnVoter(files) {
      let formDatas = new FormData();
      formDatas.append("attachment_type", "image");
      formDatas.append("file", files[0]);
      return new Promise((resolve) => {
        this.mediaVoter(formDatas)
          .then((res) => {
            resolve(true);
          })
          .finally(() => {});
      });
    },

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

<style scoped>
.grp_adr {
  font-size: 1rem;
  font-weight: 600;
}
</style>
