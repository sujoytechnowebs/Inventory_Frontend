<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit User"
      >
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Full Name"
              :rules="[
                (val) =>
                  (val && !validationErrors.name > 0) || validationErrors.name
                    ? validationErrors.name
                    : 'Please write something',
              ]"
            />
          </div>
          <div class="col-12">
            <q-input
              ref="email"
              outlined
              v-model="email"
              dense
              label="Email"
              :rules="[
                (val) =>
                  (val && !validationErrors.email > 0) || validationErrors.email
                    ? validationErrors.email
                    : 'Please write something',
              ]"
            />
          </div>
          <div class="col-12">
            <QSearch
              v-model="role"
              label="Role"
              option-value="id"
              option-label="role"
              :data-store="dataStore"
              action="getRoles"
              :multiple="false"
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
  computed: {
    ...mapFields("user", ["editItem.name", "editItem.email", "editItem.role"]),
  },
  setup() {
    return {
      modal: true,
      dataStore: "user",
      saveaction: "user/updateItem",
      validationErrors: ref({}),
    };
  },
};
</script>
