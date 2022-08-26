<template>
  <q-separator class="q-mb-md" />
  <p class="incharge_form_title">User Details</p>
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-4 col-lg-4">
          <q-input
            ref="account_name"
            outlined
            v-model="account_name"
            dense
            label="User Name"
            :rules="[
              (val) =>
                (val && !validationErrors.account_name > 0) ||
                validationErrors.account_name
                  ? validationErrors.account_name
                  : 'Please Write The Name',
            ]"
          />
        </div>
        <div class="col-12 col-md-4 col-lg-4">
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
                  : 'Please Write The User Name',
            ]"
          />
        </div>
        <div class="col-12 col-md-4 col-lg-4">
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
                  : 'Please Write The Password',
            ]"
          />
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
          />
        </div>
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
                  : 'Please Write The Email',
            ]"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6">
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
                  : 'Please choose the Branch Name',
            ]"
          ></QSearch>
        </div>

        <div class="col-12">
          <q-editor
            placeholder="Please Write The Present Address"
            v-model="address_1"
            min-height="10rem"
            :rules="[
              (val) =>
                (val && !validationErrors.address_1 > 0) ||
                validationErrors.address_1
                  ? validationErrors.address_1
                  : 'Please Write The Present Address',
            ]"
          ></q-editor>

          <q-card-section v-html="editor" />
        </div>

        <div class="col-12">
          <q-editor
            placeholder="Please Write The Permanent Address"
            v-model="address_2"
            min-height="10rem"
            :rules="[
              (val) =>
                (val && !validationErrors.address_2 > 0) ||
                validationErrors.address_2
                  ? validationErrors.address_2
                  : 'Please Write The Permanent Address',
            ]"
          ></q-editor>

          <q-card-section v-html="editor" />
        </div>
      </div>
    </div>
  </div>
  <q-separator class="q-mb-md" />
  <p class="incharge_form_title">Bank Details</p>
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
      />
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        ref="ifsc"
        outlined
        v-model="ifsc"
        dense
        label="IFSC Number"
        :rules="[ifsc]"
      />
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        ref="bank_branch"
        outlined
        v-model="bank_branch"
        dense
        label="Bank Branch"
        :rules="[bank_branch]"
      />
    </div>
  </div>
  <q-separator class="q-mb-md" />
  <p class="incharge_form_title">Other Details</p>
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
              : 'Please Write The Aadhar Card Number',
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
  name: "userPage",
  setup() {
    return {
      modal: ref(true),
      validationErrors: ref({}),
      options: ["Own", "Rent", "Tea Estate"],
    };
  },

  computed: {
    ...mapFields("user", [
      "newItem.name",
      "newItem.email",
      "newItem.password",
      "newItem.account_name",
      "newItem.phone",
      "newItem.city_id",
      "newItem.address_1",
      "newItem.address_2",
      "newItem.branch_id",
      "newItem.aadhar_card_no",
      "newItem.account_no",
      "newItem.ifsc",
      "newItem.bank_branch",
      // "newItem.aadhar_media_id",
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
            resolve(true);
          })
          .finally(() => {});
      });
    },
  },
};
</script>

<style scoped>
.incharge_form_title {
  font-size: 1.3rem;
  font-weight: 600;
}
</style>
