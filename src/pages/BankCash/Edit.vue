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
          <div class="col-12 col-md-4 col-lg-4">
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
          <!-- <div class="col-12 col-md-6 col-lg-6">
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
          </div> -->
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="postcode"
              outlined
              v-model="postcode"
              dense
              label="PostCode"
              :error-message="$getValidationErrors('postcode')"
              :error="$hasValidationErrors('postcode')"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
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
          <div class="col-12">
            <p class="address_head">Please Write Address:</p>
            <q-field
              :error-message="$getValidationErrors('address_1')"
              :error="$hasValidationErrors('address_1')"
            >
              <q-editor v-model="address_1" class="full-width"></q-editor>
            </q-field>
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
  name: "BranchEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "bankcash",
      saveaction: "bankcash/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },
  computed: {
    ...mapFields("bankcash", [
      "editItem.name",
      "editItem.code",
      "editItem.address_1",
      "editItem.postcode",
      "editItem.city_id",
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
