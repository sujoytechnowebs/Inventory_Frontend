<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="tax/createItem"
        :data-store="dataStore"
        title="Add Tax"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12">
            <q-input ref="name" outlined v-model="name" dense label="Tax Name">
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input ref="SGST" outlined v-model="SGST" dense label="SGST">
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input ref="CGST" outlined v-model="CGST" dense label="CGST">
            </q-input>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input ref="IGST" outlined v-model="IGST" dense label="IGST">
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
  name: "TaxCreatePage",
  setup() {
    return {
      modal: ref(true),
      dataStore: "tax",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  computed: {
    ...mapFields("tax", [
      "newItem.name",
      "newItem.SGST",
      "newItem.CGST",
      "newItem.IGST",
    ]),
  },
};
</script>
