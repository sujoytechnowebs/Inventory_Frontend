<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="payment/createItem"
        :data-store="dataStore"
        title="Add Payment Details"
      >
        <div class="row q-col-gutter-md">
          <div>
            <addPayments />
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

const addPayments = defineAsyncComponent(() =>
  import("./_components/AddPayments.vue")
);

export default {
  name: "PaymentCreatePage",

  components: {
    addPayments,
  },

  setup() {
    return {
      modal: ref(true),
      dataStore: "payment",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },

  computed: {
    ...mapFields("payment", ["newItem.city_name", "newItem.state_id"]),
  },
};
</script>
