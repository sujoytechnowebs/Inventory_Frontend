<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="state/createItem"
        :data-store="dataStore"
        title="Add State"
      >
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12">
            <q-input
              ref="state_name"
              outlined
              v-model="state_name"
              dense
              label="State Name"
              :rules="[
                (val) =>
                  (val && !validationErrors.state_name > 0) ||
                  validationErrors.state_name
                    ? validationErrors.state_name
                    : 'Please write the state name',
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
  name: "StateCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "state",
      validationErrors: ref({}),
    };
  },

  computed: {
    ...mapFields("state", ["newItem.state_name"]),
  },
};
</script>
