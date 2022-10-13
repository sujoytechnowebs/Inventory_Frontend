<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="investordetails/createItem"
        :data-store="dataStore"
        title="Add Branch"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <QSearch
              v-model="to_account"
              label="Investor Name"
              option-value="id"
              option-label="name"
              data-store="user"
              action="getItems"
              :multiple="false"
              dataType="object"
              :rules="[
                (val) =>
                  (val && !validationErrors.id > 0) || validationErrors.id
                    ? validationErrors.id
                    : 'Please choose the city name',
              ]"
            ></QSearch>
          </div>
          <div class="col-12">
            <q-select
              outlined
              dense
              v-model="model"
              :options="action_options"
              label="Action"
              :rules="[
                (val) =>
                  (val && !validationErrors.id > 0) || validationErrors.id
                    ? validationErrors.id
                    : 'Please choose the city name',
              ]"
            ></q-select>
          </div>
          <div class="col-12">
            <q-input
              dense
              outlined
              v-model="date"
              mask="date"
              :rules="['date']"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date">
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
            </q-input>
          </div>
          <div class="col-12">
            <q-input
              outlined
              dense
              type="number"
              v-model="text"
              label="Amount"
              :rules="[
                (val) =>
                  (val && !validationErrors.id > 0) || validationErrors.id
                    ? validationErrors.id
                    : 'Please choose the city name',
              ]"
            ></q-input>
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
  name: "InvestorDetailsCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "investordetails",
      validationErrors: ref({}),
      modelValue: ref(),
      action_options: ["invest", "withdral", "loan"],
    };
  },

  computed: {
    ...mapFields("investordetails", [
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
