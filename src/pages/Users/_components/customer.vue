<template>
  <q-separator class="q-mb-md" />
  <p class="customer_form_title">Customer Details</p>
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
            label="Group Role"
            :rules="[
              (val) =>
                (val && !validationErrors.group_role > 0) ||
                validationErrors.group_role
                  ? validationErrors.group_role
                  : 'Please Choose The Group Role',
            ]"
          ></q-select>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="account_name"
            outlined
            v-model="account_name"
            dense
            label="Customer Name"
            :rules="[
              (val) =>
                (val && !validationErrors.account_name > 0) ||
                validationErrors.account_name
                  ? validationErrors.account_name
                  : 'Please Write The Customer Name',
            ]"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="name"
            outlined
            v-model="name"
            dense
            label="UserName"
            :rules="[
              (val) =>
                (val && !validationErrors.name > 0) || validationErrors.name
                  ? validationErrors.name
                  : 'Please Write The User Name',
            ]"
          />
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <q-input
            outlined
            dense
            v-model="DOB"
            label="Date of Birth"
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
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <q-input
            ref="spouse_parent_name"
            outlined
            v-model="spouse_parent_name"
            dense
            label="Spouse Name/Parent Name"
            :rules="[
              (val) =>
                (val && !validationErrors.spouse_parent_name > 0) ||
                validationErrors.spouse_parent_name
                  ? validationErrors.spouse_parent_name
                  : 'Please Write The Spouse / Parent Name',
            ]"
          />
        </div>
        <div class="col-12 col-md-4 col-lg-4">
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
          />
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
            label="Occupation"
            :rules="[
              (val) =>
                (val && !validationErrors.occupation > 0) ||
                validationErrors.occupation
                  ? validationErrors.occupation
                  : 'Please Write The Occupation',
            ]"
          />
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <q-select
            outlined
            v-model="house"
            dense
            :options="house_options"
            label="House"
            :rules="[
              (val) =>
                (val && !validationErrors.house > 0) || validationErrors.house
                  ? validationErrors.house
                  : 'Please Choose The House Type',
            ]"
          ></q-select>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <q-input
            ref="monthly_income"
            outlined
            v-model="monthly_income"
            dense
            label="Monthly Income"
            type="number"
            :rules="[
              (val) =>
                (val && !validationErrors.monthly_income > 0) ||
                validationErrors.monthly_income
                  ? validationErrors.monthly_income
                  : 'Please Write The Monthly Income',
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
            label="Pin Code"
            type="number"
            :rules="[
              (val) =>
                (val && !validationErrors.postcode > 0) ||
                validationErrors.postcode
                  ? validationErrors.postcode
                  : 'Please Write The Pincode',
            ]"
          />
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
          ></q-editor>

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
        label="Aadhar Card Number"
        :rules="[
          (val) =>
            (val && !validationErrors.aadhar_card_no > 0) ||
            validationErrors.aadhar_card_no
              ? validationErrors.aadhar_card_no
              : 'Please Write The aadhar card number',
        ]"
      />
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
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";

export default {
  name: "customerPage",
  setup() {
    return {
      house_options: ["own", "rent", "tea estate"],
      grp_role_options: ["leader", "member"],
      modal: ref(true),
      validationErrors: ref({}),
    };
  },

  computed: {
    ...mapFields("user", [
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

<style scoped>
.customer_form_title {
  font-size: 1.3rem;
  font-weight: 600;
}
</style>
