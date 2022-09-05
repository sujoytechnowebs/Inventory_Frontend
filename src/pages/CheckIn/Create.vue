<template>
  <div>
    <q-card>
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="checkin/createItem"
        :data-store="dataStore"
        title="CheckIn"
      >
        <div class="column">
          <div class="">
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
                  (val && !validationErrors.branch_id > 0) ||
                  validationErrors.branch_id
                    ? validationErrors.branch_id
                    : 'Please choose the Branch name',
              ]"
            ></QSearch>
          </div>

          <div class="">
            <q-input
              ref="opening_balance"
              outlined
              v-model="opening_balance"
              dense
              type="number"
              label="Opening Balance"
              :rules="[
                (val) =>
                  (val && !validationErrors.opening_balance > 0) ||
                  validationErrors.opening_balance
                    ? validationErrors.opening_balance
                    : 'Please write the opening balance',
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
  name: "CheckInCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "checkin",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  computed: {
    ...mapFields("checkin", ["newItem.branch_id", "newItem.opening_balance"]),
  },
};
</script>
