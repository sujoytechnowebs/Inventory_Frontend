<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="profitloss/createItem"
        :data-store="dataStore"
        title="Add Branch"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Branch Name"
              :rules="[
                (val) =>
                  (val && !validationErrors.name > 0) || validationErrors.name
                    ? validationErrors.name
                    : 'Please write the branch name',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.code > 0) || validationErrors.code
                    ? validationErrors.code
                    : 'Please write the branch code',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.address_1 > 0) ||
                  validationErrors.address_1
                    ? validationErrors.address_1
                    : 'Please write the address 1',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.address_2 > 0) ||
                  validationErrors.address_2
                    ? validationErrors.address_2
                    : 'Please write the address 2',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.postcode > 0) ||
                  validationErrors.postcode
                    ? validationErrors.postcode
                    : 'Please write the postcode',
              ]"
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
              :rules="[
                (val) =>
                  (val && !validationErrors.id > 0) || validationErrors.id
                    ? validationErrors.id
                    : 'Please choose the city name',
              ]"
            ></QSearch>
          </div>
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "ProfitLossCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "profitloss",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  computed: {
    ...mapFields("profitloss", [
      "newItem.name",
      "newItem.code",
      "newItem.address_1",
      "newItem.address_2",
      "newItem.postcode",
      "newItem.city_id",
    ]),
  },
};
</script>
