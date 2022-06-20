<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="group/createItem"
        :data-store="dataStore"
        title="Add Groups"
      >
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Group Name"
              :rules="[
                (val) =>
                  (val && !validationErrors.name > 0) || validationErrors.name
                    ? validationErrors.name
                    : 'Please write the group name',
              ]"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="code"
              outlined
              v-model="code"
              dense
              label="Code"
              :rules="[
                (val) =>
                  (val && !validationErrors.code > 0) || validationErrors.code
                    ? validationErrors.code
                    : 'Please write the group code',
              ]"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <QSearch
              v-model="branch_id"
              label="Branch"
              option-value="id"
              option-label="name"
              data-store="branch"
              action="getItems"
              :multiple="false"
              :rules="[
                (val) =>
                  (val && !validationErrors.state_id > 0) ||
                  validationErrors.state_id
                    ? validationErrors.state_id
                    : 'Please choose the Branch name',
              ]"
            ></QSearch>
          </div>
          <div class="col-12">
            <q-input
              ref="address"
              outlined
              v-model="address"
              dense
              label="Address"
              :rules="[
                (val) =>
                  (val && !validationErrors.address > 0) ||
                  validationErrors.address
                    ? validationErrors.address
                    : 'Please write the address',
              ]"
            >
            </q-input>
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
  name: "GroupCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "group",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  computed: {
    ...mapFields("group", [
      "newItem.name",
      "newItem.code",
      "newItem.branch_id",
      "newItem.address",
    ]),
  },
};
</script>
