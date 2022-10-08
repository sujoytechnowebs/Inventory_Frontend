<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Group Member"
      >
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12">
            <QSearch
              v-model="group_id"
              label="Group Name"
              option-value="id"
              option-label="name"
              data-store="group"
              action="getItems"
              :multiple="false"
              :error-message="$getValidationErrors('group_id')"
              :error="$hasValidationErrors('group_id')"
            ></QSearch>
          </div>
          <div class="col-12">
            <q-select
              outlined
              dense
              v-model="group_role"
              :options="role"
              label="Group Role"
              :error-message="$getValidationErrors('group_role')"
              :error="$hasValidationErrors('group_role')"
            />
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
  name: "GroupUserEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "groupuser",
      saveaction: "groupuser/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
      role: ["leader", "member"],
    };
  },
  computed: {
    ...mapFields("groupuser", ["editItem.group_id", "editItem.group_role"]),
  },
};
</script>
