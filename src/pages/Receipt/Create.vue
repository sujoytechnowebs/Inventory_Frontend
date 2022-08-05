<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="receipt/createItem"
        :data-store="dataStore"
        title="Add Receipt Details"
      >
        <div class="row q-col-gutter-md">
          <div>
            <addReceipts v-model="receipt_details" />
          </div>
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineAsyncComponent } from "vue";

const addReceipts = defineAsyncComponent(() =>
  import("./_components/AddReceipts.vue")
);

export default {
  name: "ReceiptCreatePage",

  components: {
    addReceipts,
  },

  setup() {
    return {
      modal: ref(true),
      dataStore: "receipt",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  computed: {
    ...mapFields("receipt", ["newItem.receipt_details"]),
  },
};
</script>
