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
            <q-input
              ref="city_name"
              outlined
              v-model="city_name"
              dense
              label="City Name"
            >
            </q-input>
          </div>
          <div class="col-12">
            <QSearch
              v-model="state_id"
              label="State"
              option-value="id"
              option-label="state_name"
              data-store="state"
              action="getItems"
              :multiple="false"
            ></QSearch>
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
  name: "SaleReturnEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "salereturn",
      saveaction: "salereturn/updateItem",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },
  computed: {
    ...mapFields("salereturn", ["editItem.city_name", "editItem.state_id"]),
  },
};
</script>
