<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="user/createItem"
        :data-store="dataStore"
        title="Add Users"
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
                  (val && !validationErrors.names > 0) || validationErrors.names
                    ? validationErrors.names
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
            <q-field
              ref="role"
              v-model="role"
              input-debounce="0"
              borderless
              lazy-rules
              :rules="[
                (val) =>
                  (val && val != 0 && !validationErrors.role > 0) ||
                  validationErrors.role
                    ? validationErrors.role
                    : 'Please select role',
              ]"
            >
              <template v-slot:control>
                <QSearch
                  v-model="role"
                  label="Role"
                  option-value="id"
                  option-label="role"
                  :data-store="dataStore"
                  action="getRoles"
                  :multiple="false"
                />
              </template>
            </q-field>
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
  name: "UsersCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "user",
      validationErrors: ref({}),
    };
  },

  computed: {
    ...mapFields("user", ["newItem.name", "newItem.email", "newItem.role"]),
  },
};
</script>
