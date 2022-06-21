<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="checkin/createItem"
        :data-store="dataStore"
        title="Add CheckIn Details"
      >
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
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
                  (val && !validationErrors.state_id > 0) ||
                  validationErrors.state_id
                    ? validationErrors.state_id
                    : 'Please choose the Branch name',
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
                  (val && !validationErrors.state_id > 0) ||
                  validationErrors.state_id
                    ? validationErrors.state_id
                    : 'Please choose the Branch name',
              ]"
            ></QSearch>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <q-input dense outlined v-model="checkin_datetime">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="checkin_datetime" mask="YYYY-MM-DD HH:mm">
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

              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <q-input dense outlined v-model="Checkout_datetime">
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="Checkout_datetime" mask="YYYY-MM-DD HH:mm">
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

              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              type="number"
              label="Opening Balance"
              :rules="[
                (val) =>
                  (val && !validationErrors.city_name > 0) ||
                  validationErrors.city_name
                    ? validationErrors.city_name
                    : 'Please write the city name',
              ]"
            >
            </q-input>
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              type="number"
              label="Closing Balance"
              :rules="[
                (val) =>
                  (val && !validationErrors.city_name > 0) ||
                  validationErrors.city_name
                    ? validationErrors.city_name
                    : 'Please write the city name',
              ]"
            >
            </q-input>
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
  name: "CheckInCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "checkin",
      validationErrors: ref({}),
      modelValue: ref(),
      checkin_datetime: ref("2019-02-01 12:44"),
      Checkout_datetime: ref("2019-02-01 12:44"),
    };
  },

  computed: {
    ...mapFields("checkin", [
      "newItem.branch_id",
      "newItem.staff_id",
      "newItem.checkin_datetime",
      "newItem.Checkout_datetime",
      "newItem.Opening_balance",
      "newItem.Closing_balance",
    ]),
  },
};
</script>
