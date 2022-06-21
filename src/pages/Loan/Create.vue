<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="loan/createItem"
        :data-store="dataStore"
        title="Add Loans"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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

          <div class="col-12 col-md-3 col-lg-3">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
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
  name: "LoanCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "loan",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  computed: {
    ...mapFields("loan", ["newItem.city_name", "newItem.state_id"]),
  },
};
</script>
