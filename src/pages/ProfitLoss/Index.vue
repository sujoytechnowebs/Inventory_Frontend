<template>
  <div>
    <!-- <div>
      <DateRangePicker v-model="myDateRange" />
    </div> -->

    <q-card-section>
      <QDataTable
        class="no-shadow"
        :data-store="dataStore"
        :hasEditPermission="hasEditPermission"
        :aditionalActions="aditionalActions"
        :columns="columns"
        :filter="filter"
        :customBodySlot="true"
      >
        <template v-slot:top>
          <div
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-6 col-md-6"
          >
            Profit & Loss Table
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 row justify-end items-center">
            <!-- <div class="col-8">
              <q-input
                outlined
                dense
                debounce="300"
                v-model="filter.search"
                clearable
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div> -->

            <div class="col-12">
              <DateRangePicker v-model="myDateRange" />
            </div>
          </div>
        </template>

        <!-- <template v-slot:customBodySlot="bodyRow">
          <q-tr :props="bodyRow">
            <q-td key="test"> Hello </q-td>
          </q-tr>
        </template> -->
      </QDataTable>

      <div>
        <q-table
          flat
          title="New Row"
          :rows="test"
          :columns="test_columns"
          row-key="id"
          :rows-per-page-options="[0]"
        >
          <template v-slot:customBodySlot="bodyRow">
            <q-tr :props="bodyRow">
              <q-td key="company"> Hello </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>

      <q-dialog v-model="showCreateModal">
        <div :class="$q.platform.is.desktop ? 'branch-form' : ''">
          <CreateUser v-bind:modal="true"></CreateUser>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'branch-form' : ''">
          <EditUser v-bind:modal="true"></EditUser>
        </div>
      </q-dialog>
    </q-card-section>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
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

  components: {
    EditUser,
    CreateUser,
    // DateRangePicker,
  },

  computed: {
    ...mapFields("profitloss", ["filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();
    const { showEditModal } = getGetters("profitloss", ["showEditModal"]);
    const { showCreateModal } = getGetters("profitloss", ["showCreateModal"]);

    const myDateRange = ref({
      startDate: "",
      endDate: "",
    });

    return {
      hasEditPermission: true,
      dataStore: "profitloss",
      aditionalActions: false,
      showEditModal,
      showCreateModal,
      myDateRange,

      test_columns: [
        {
          name: "seat_number",
          label: "Testing",
          field: "Test",
          align: "left",
        },
        {
          name: "seat_number",
          label: "Testing",
          field: "Test",
          align: "left",
        },
      ],
    };
  },
});
</script>

<style scoped>
.branch-form {
  width: 80%;
  max-width: 80%;
}
</style>
