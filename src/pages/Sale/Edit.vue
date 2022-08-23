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
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Group Name"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-input ref="code" outlined v-model="code" dense label="Code">
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
            ></QSearch>
          </div>
          <div class="col-12">
            <q-input
              ref="address"
              outlined
              v-model="address"
              dense
              label="Address"
            >
            </q-input>
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
      dataStore: "sale",
      saveaction: "sale/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },
  computed: {
    ...mapFields("sale", [
      "editItem.name",
      "editItem.code",
      "editItem.branch_id",
      "editItem.address",
    ]),
  },
};
</script>
