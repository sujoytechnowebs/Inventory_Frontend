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
        :canEdit="false"
      >
        <template v-slot:top>
          <div
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-6 col-md-6"
          >
            Bank cash Table
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 row justify-end items-center">
            <div class="col-8">
              <q-input
                outlined
                dense
                debounce="300"
                v-model="search"
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
        <div :class="$q.platform.is.desktop ? 'bank-cash-form' : ''">
          <CreateBankCash v-bind:modal="true"></CreateBankCash>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'bank-cash-form' : ''">
          <EditBankCash v-bind:modal="true"></EditBankCash>
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

const EditBankCash = defineAsyncComponent(() => import("./Edit.vue"));
const CreateBankCash = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "BankCashIndexPage",

  components: {
    EditBankCash,
    CreateBankCash,
  },

  computed: {
    ...mapFields("bankcash", ["filter.search", "filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();
    const { showEditModal } = getGetters("bankcash", ["showEditModal"]);
    const { showCreateModal } = getGetters("bankcash", ["showCreateModal"]);

    return {
      hasEditPermission: true,
      dataStore: "bankcash",
      aditionalActions: false,
      showEditModal,
      showCreateModal,
    };
  },
});
</script>

<style scoped>
.bank-cash-form {
  width: 60%;
  max-width: 60%;
}
</style>
