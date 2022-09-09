<template>
  <div class="col-12 q-pa-md">
    <DateRangePicker
      v-model="myDateRange"
      :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy' }"
    />
  </div>
  <div class="col-12 q-pa-md">
    <q-btn
      color="primary"
      label="Primary"
      type="submit"
      @click="getProfitLoss()"
    />
  </div>

  <div class="row q-col-gutter-md q-pa-md">
    <div class="col-12 col-md-4 col-lg-4">
      <q-card class="my-card">
        <q-card-section>
          {{ data.gross_profit }}
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-card class="my-card">
        <q-card-section>
          {{ data.totalExpense }}
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <q-card class="my-card">
        <q-card-section>
          {{ data.total_profitOrLoss }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

const EditUser = defineAsyncComponent(() => import("./Edit.vue"));
const CreateUser = defineAsyncComponent(() => import("./Create.vue"));

import DateRangePicker from "daterange-picker-vue3";
import "daterange-picker-vue3/dist/daterange-picker-vue3.css";

export default defineComponent({
  name: "ProfitLossIndexPage",

  components: {},

  computed: {
    ...mapFields("profitloss", ["filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();
    const { showEditModal } = getGetters("profitloss", ["showEditModal"]);
    const { showCreateModal } = getGetters("profitloss", ["showCreateModal"]);

    const { getAction } = useStoreModule();
    const { getItem } = getAction("profitloss", ["getItem"]);

    const myDateRange = ref({
      startDate: "",
      endDate: "",
    });

    const data = ref({});

    const getProfitLoss = () => {
      getItem(myDateRange.value)
        .then((response) => {
          console.log("Hello");
          data.value = response.data;
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          console.log("finally", "finally");
        });
    };

    // onMounted(() => {
    //   getProfitLoss();
    // });

    return {
      hasEditPermission: true,
      dataStore: "profitloss",
      aditionalActions: false,
      showEditModal,
      showCreateModal,
      myDateRange,
      data,
      getProfitLoss,
    };
  },
});
</script>
