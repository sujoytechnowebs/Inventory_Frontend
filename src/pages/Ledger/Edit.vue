<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit State"
      >
        <div class="row q-mt-md q-mb-md q-col-gutter-md">
          <div class="col-12">
            <q-input
              ref="state_name"
              outlined
              v-model="state_name"
              dense
              label="State Name"
              @keydown="checkKeyDownAlphaNumeric($event)"
              :error-message="$getValidationErrors('state_name')"
              :error="$hasValidationErrors('state_name')"
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
  name: "StateEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "state",
      saveaction: "state/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },
  computed: {
    ...mapFields("state", ["editItem.state_name"]),
  },

  methods: {
    checkKeyDownAlphaNumeric(event) {
      if (!/[a-zA-Z\s]/.test(event.key)) {
        this.ignoredValue = event.key ? event.key : "";
        event.preventDefault();
      }
    },
  },
};
</script>
