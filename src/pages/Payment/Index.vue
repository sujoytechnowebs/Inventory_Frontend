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
            Payment Table
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
        <div :class="$q.platform.is.desktop ? 'payment-form' : ''">
          <CreatePayment v-bind:modal="true"></CreatePayment>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'payment-form' : ''">
          <EditPayment v-bind:modal="true"></EditPayment>
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

const EditPayment = defineAsyncComponent(() => import("./Edit.vue"));
const CreatePayment = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "PaymentIndexPage",

  components: {
    EditPayment,
    CreatePayment,
  },

  computed: {
    ...mapFields("payment", ["filter.search", "filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();
    const { showEditModal } = getGetters("payment", ["showEditModal"]);
    const { showCreateModal } = getGetters("payment", ["showCreateModal"]);

    return {
      hasEditPermission: true,
      dataStore: "payment",
      aditionalActions: false,
      showEditModal,
      showCreateModal,
    };
  },
});
</script>

<style scoped>
.payment-form {
  width: 70%;
  max-width: 70%;
}
</style>
