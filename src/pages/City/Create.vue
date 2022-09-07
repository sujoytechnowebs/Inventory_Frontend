<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="city/createItem"
        :data-store="dataStore"
        title="Add Users"
      >
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12">
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
              :error-message="$getValidationErrors('city_name')"
              :error="$hasValidationErrors('city_name')"
            >
            </q-input>
          </div>

          <div class="col-12">
            <QSearch
              v-model="state_id"
              label="State"
              option-value="id"
              option-label="state_name"
              data-store="state"
              action="getItems"
              :multiple="false"
              :error-message="$getValidationErrors('state_id')"
              :error="$hasValidationErrors('state_id')"
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
  name: "CityCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "city",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  computed: {
    ...mapFields("city", ["newItem.city_name", "newItem.state_id"]),
  },
};
</script>
