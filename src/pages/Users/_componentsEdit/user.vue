<template>
  <q-separator class="q-mb-md" />
  <p class="incharge_form_title">Staff Details</p>
  <div class="row q-col-gutter-md">
    <div class="col-12">
      <div class="row q-col-gutter-md">
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
              Name
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
              User Name
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
            :options="payments"
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
        @keydown="checkKeyDownAlphaNumeric($event)"
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
  name: "userPage",
  setup() {
    return {
      modal: ref(true),
      validationErrors: ref({}),
      options: ["Own", "Rent", "Tea Estate"],
      payments: [
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
      "editItem.name",
      "editItem.email",
      "editItem.account_name",
      "editItem.phone",
      "editItem.city_id",
      "editItem.branch_id",
      "editItem.aadhar_card_no",
      "editItem.account_no",
      "editItem.ifsc",
      "editItem.bank_branch",
      "editItem.voter_card_no",
      "editItem.opening_balance",
      "editItem.opening_balance_type",
      "editItem.address",
      "editItem.near",
      "editItem.village",
      "editItem.post",
      "editItem.block",
      "editItem.district",
      "editItem.pin",
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

    // Validation for Number and alphabet

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
  font-size: 1.3rem;
  font-weight: 600;
}

.address_head {
  font-size: 1rem;
  font-weight: 600;
}
</style>
