<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Groups"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Group Name"
              :error-message="$getValidationErrors('name')"
              :error="$hasValidationErrors('name')"
            >
            </q-input>
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
              :error-message="$getValidationErrors('branch_id')"
              :error="$hasValidationErrors('branch_id')"
            ></QSearch>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <p class="address_head">Please Write The Address:</p>

            <q-field
              :error-message="$getValidationErrors('address')"
              :error="$hasValidationErrors('address')"
            >
              <q-editor v-model="address" class="full-width"></q-editor>
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
  name: "UsersEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "group",
      saveaction: "group/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },
  computed: {
    ...mapFields("group", [
      "editItem.name",
      "editItem.branch_id",
      "editItem.address",
    ]),
  },
};
</script>
