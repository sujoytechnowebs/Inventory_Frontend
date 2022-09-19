<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="branch/createItem"
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
              @keydown="checkKeyDownAlphaNumeric($event)"
              :error-message="$getValidationErrors('name')"
              :error="$hasValidationErrors('name')"
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
              :error-message="$getValidationErrors('code')"
              :error="$hasValidationErrors('code')"
            >
            </q-input>
          </div>
          <div class="col-12">
            <p class="address_head">Please Write Address:</p>
            <q-field
              :error-message="$getValidationErrors('address_1')"
              :error="$hasValidationErrors('address_1')"
            >
              <q-editor v-model="address_1" class="full-width"></q-editor>
            </q-field>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="postcode"
              outlined
              v-model="postcode"
              dense
              type="number"
              label="PostCode"
              :error-message="$getValidationErrors('postcode')"
              :error="$hasValidationErrors('postcode')"
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
              :error-message="$getValidationErrors('city_id')"
              :error="$hasValidationErrors('city_id')"
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
      dataStore: "branch",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  computed: {
    ...mapFields("branch", [
      "newItem.name",
      "newItem.code",
      "newItem.address_1",
      "newItem.postcode",
      "newItem.city_id",
    ]),
  },

  methods: {
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
.address_head {
  font-size: 1rem;
  font-weight: 600;
}
</style>
