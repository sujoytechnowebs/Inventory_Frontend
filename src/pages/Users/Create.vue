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
          <!-- <div class="col-12">
            <q-select
              ref="role_id"
              outlined
              v-model="role_id"
              :options="options"
              map-options
              emit-value
              dense
              label="Role"
              :rules="[
                (val) =>
                  (val && !validationErrors.role_id > 0) ||
                  validationErrors.role_id
                    ? validationErrors.role_id
                    : 'Please write something',
              ]"
            />
          </div> -->
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
    ...mapFields("user", ["newItem.name", "newItem.email", "newItem.role_id"]),
  },
};
</script>
