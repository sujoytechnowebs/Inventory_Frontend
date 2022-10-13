<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Branch"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Branch Name"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="code"
              outlined
              v-model="code"
              dense
              label="Branch Code"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="address_1"
              outlined
              v-model="address_1"
              dense
              label="Address 1"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="address_2"
              outlined
              v-model="address_2"
              dense
              label="Address 2"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="postcode"
              outlined
              v-model="postcode"
              dense
              label="PostCode"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="city_id"
              label="City"
              option-value="id"
              option-label="city_name"
              data-store="city"
              action="getItems"
              :multiple="false"
            ></QSearch>
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
  name: "InvestorDetailsEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "investordetails",
      saveaction: "investordetails/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },
  computed: {
    ...mapFields("investordetails", [
      "editItem.name",
      "editItem.code",
      "editItem.address_1",
      "editItem.address_2",
      "editItem.postcode",
      "editItem.city_id",
    ]),
  },
};
</script>
