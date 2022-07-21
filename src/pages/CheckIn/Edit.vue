<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit City"
      >
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12">
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
              ref="opening_balance"
              outlined
              v-model="opening_balance"
              dense
              type="number"
              label="Opening Balance"
            >
            </q-input>
          </div>

          <div class="col-12">
            <q-input
              ref="closing_balance"
              outlined
              v-model="closing_balance"
              dense
              type="number"
              label="Closing Balance"
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
  name: "CheckInEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "checkin",
      saveaction: "checkin/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },
  computed: {
    ...mapFields("checkin", [
      "editItem.branch_id",
      "editItem.opening_balance",
      "editItem.closing_balance",
    ]),
  },
};
</script>
