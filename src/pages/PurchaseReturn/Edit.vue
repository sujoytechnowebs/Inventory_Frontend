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
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="address_1"
              outlined
              v-model="address_1"
              dense
              label="Address 1"
              :error-message="$getValidationErrors('address_1')"
              :error="$hasValidationErrors('address_1')"
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
              :error-message="$getValidationErrors('address_2')"
              :error="$hasValidationErrors('address_2')"
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
  name: "PurchaseReturnEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "branch",
      saveaction: "branch/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },
  computed: {
    ...mapFields("branch", [
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
