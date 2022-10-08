<template>
  <div>
    <q-card-section>
      <QDataTable
        class="no-shadow"
        :data-store="dataStore"
        :hasEditPermission="hasEditPermission"
        :aditionalActions="aditionalActions"
        :columns="columns"
        :filter="filter"
      >
        <template v-slot:top>
          <div
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-6 col-md-6"
          >
            Investor Management Table
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 row justify-end items-center">
            <div class="col-8">
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
            </div>
          </div>
        </template>
      </QDataTable>

      <q-dialog v-model="showCreateModal">
        <div :class="$q.platform.is.desktop ? 'investor-details-form' : ''">
          <CreateInvestorDetails v-bind:modal="true"></CreateInvestorDetails>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'investor-details-form' : ''">
          <EditInvestorDetails v-bind:modal="true"></EditInvestorDetails>
        </div>
      </q-dialog>
    </q-card-section>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

const EditInvestorDetails = defineAsyncComponent(() => import("./Edit.vue"));
const CreateInvestorDetails = defineAsyncComponent(() =>
  import("./Create.vue")
);

export default defineComponent({
  name: "InvestorDetailsIndexPage",

  components: {
    EditInvestorDetails,
    CreateInvestorDetails,
  },

  computed: {
    ...mapFields("investordetails", ["filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();
    const { showEditModal } = getGetters("investordetails", ["showEditModal"]);
    const { showCreateModal } = getGetters("investordetails", [
      "showCreateModal",
    ]);

    return {
      hasEditPermission: true,
      dataStore: "investordetails",
      aditionalActions: false,
      showEditModal,
      showCreateModal,
    };
  },
});
</script>

<style scoped>
.investor-details-form {
  width: 40%;
  max-width: 40%;
}
</style>
