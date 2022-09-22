<template>
  <q-separator class="q-mt-md" />
  <p class="q-pt-sm incharge_form_title text-weight-medium">
    In-charge Details
  </p>
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
            @keydown="checkKeyDownAlphaNumeric($event)"
            :error-message="$getValidationErrors('account_name')"
            :error="$hasValidationErrors('account_name')"
          >
            <template v-slot:label>
              Incharge Name
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
            @keydown="checkKeyDownAlphaNumeric($event)"
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

        <div class="col-12 col-sm-6 col-md-6 col-lg-6">
          <span class="text-weight-medium incharge_form_title"
            >Present Address</span
          >
          <q-field
            :error-message="$getValidationErrors('address_1')"
            :error="$hasValidationErrors('address_1')"
          >
            <q-editor v-model="address_1" class="full-width"></q-editor>
          </q-field>
        </div>

        <div class="col-12 col-sm-6 col-md-6 col-lg-6">
          <span class="text-weight-medium incharge_form_title"
            >Permanent Address</span
          >
          <q-field
            :error-message="$getValidationErrors('address_2')"
            :error="$hasValidationErrors('address_2')"
          >
            <q-editor v-model="address_2" class="full-width"></q-editor>
          </q-field>
        </div>

        <div class="col-12 col-md-6 col-lg-6">
          <q-input
            ref="opening_balance"
            outlined
            v-model="opening_balance"
            label="Opening Balance"
            dense
            v-on:keypress="NumbersOnly"
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
  <q-separator />
  <p class="incharge_form_title q-pt-sm text-weight-medium">Bank Details</p>
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
        @keydown="checkKeyDownAlphaNumeric($event)"
        :error-message="$getValidationErrors('bank_branch')"
        :error="$hasValidationErrors('bank_branch')"
      />
    </div>
  </div>
  <q-separator />
  <p class="incharge_form_title q-pt-sm text-weight-medium">Other Details</p>
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
    <div class="col-12 col-md-6 col-lg-6">
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
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";

export default {
  name: "inchargePage",
  setup() {
    return {
      modal: ref(true),
      validationErrors: ref({}),
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
      "newItem.opening_balance",
      "newItem.opening_balance_type",
      "newItem.voter_card_no",
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
.incharge_form_title {
  font-size: 1rem;
}
</style>
