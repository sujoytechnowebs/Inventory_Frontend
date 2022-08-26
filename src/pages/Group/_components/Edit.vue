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
              :rules="[
                (val) =>
                  (val && !validationErrors.group_id > 0) ||
                  validationErrors.group_id
                    ? validationErrors.group_id
                    : 'Please Choose The Group Name',
              ]"
            ></QSearch>
          </div>
          <div class="col-12">
            <q-select
              outlined
              dense
              v-model="group_role"
              :options="role"
              label="Group Role"
              :rules="[
                (val) =>
                  (val && !validationErrors.group_role > 0) ||
                  validationErrors.group_role
                    ? validationErrors.group_role
                    : 'Please Choose The Group Role',
              ]"
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
  name: "UsersEditPage",
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
