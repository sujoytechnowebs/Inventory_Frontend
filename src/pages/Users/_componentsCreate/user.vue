<template>
  <q-separator class="q-mt-md" />
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
            label
            :error-message="$getValidationErrors('account_name')"
            :error="$hasValidationErrors('account_name')"
          >
            <template v-slot:label>
              Name
              <span class="text-weight-bold text-negative">*</span>
            </template>
          </q-input>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
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
              User Name
              <span class="text-weight-bold text-negative">*</span>
            </template>
          </q-input>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <q-input
            ref="password"
            outlined
            v-model="password"
            dense
            type="password"
            label
            :error-message="$getValidationErrors('password')"
            :error="$hasValidationErrors('password')"
          >
            <template v-slot:label>
              Password
              <span class="text-weight-bold text-negative">*</span>
            </template>
          </q-input>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
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
        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="email"
            outlined
            v-model="email"
            dense
            label
            :error-message="$getValidationErrors('email')"
            :error="$hasValidationErrors('email')"
          >
            <template v-slot:label>
              Email
              <span class="text-weight-bold text-negative">*</span>
            </template>
          </q-input>
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
            :error-message="$getValidationErrors('city_id')"
            :error="$hasValidationErrors('city_id')"
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
            :error-message="$getValidationErrors('branch_id')"
            :error="$hasValidationErrors('branch_id')"
          ></QSearch>
        </div>

        <div class="col-12">
          <q-editor
            placeholder="Please Write The Present Address"
            v-model="address_1"
            min-height="10rem"
            :error-message="$getValidationErrors('address_1')"
            :error="$hasValidationErrors('address_1')"
          ></q-editor>

          <q-card-section v-html="editor" />
        </div>

        <div class="col-12">
          <q-editor
            placeholder="Please Write The Permanent Address"
            v-model="address_2"
            min-height="10rem"
            :error-message="$getValidationErrors('address_2')"
            :error="$hasValidationErrors('address_2')"
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
        :error-message="$getValidationErrors('account_no')"
        :error="$hasValidationErrors('account_no')"
      />
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        ref="ifsc"
        outlined
        v-model="ifsc"
        dense
        label="IFSC Number"
        :error-message="$getValidationErrors('ifsc')"
        :error="$hasValidationErrors('ifsc')"
      />
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-input
        ref="bank_branch"
        outlined
        v-model="bank_branch"
        dense
        label="Bank Branch"
        :error-message="$getValidationErrors('bank_branch')"
        :error="$hasValidationErrors('bank_branch')"
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
