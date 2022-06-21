<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Accounts"
      >
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="account_name"
              outlined
              v-model="account_name"
              dense
              label="Account Name"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="phone"
              outlined
              v-model="phone"
              dense
              label="Phone Number"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input ref="email" outlined v-model="email" dense label="Email">
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
            ></QSearch>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="address_1"
              outlined
              v-model="address_1"
              dense
              label="Address 1"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="address_2"
              outlined
              v-model="address_2"
              dense
              label="Address 2"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="postcode"
              outlined
              v-model="postcode"
              dense
              label="PostCode"
            >
            </q-input>
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
            ></QSearch>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="adhaar_media_id"
              outlined
              v-model="adhaar_media_id"
              dense
              label="Aadhaar Card "
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input ref="type" outlined v-model="type" dense label="Type">
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="account_no"
              outlined
              v-model="account_no"
              dense
              label="Account Number"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input ref="ifsc" outlined v-model="ifsc" dense label="IFSC CODE">
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="bank_branch"
              outlined
              v-model="bank_branch"
              dense
              label="Bank Branch"
            >
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

export default {
  name: "AccountsEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "account",
      saveaction: "account/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },
  computed: {
    ...mapFields("account", [
      "editItem.account_name",
      "editItem.phone",
      "editItem.email",
      "editItem.city_id",
      "editItem.address_1",
      "editItem.address_2",
      "editItem.postcode",
      "editItem.branch_id",
      "editItem.adhaar_media_id",
      "editItem.type",
      "editItem.account_no",
      "editItem.ifsc",
      "editItem.bank_branch",
    ]),
  },
};
</script>
