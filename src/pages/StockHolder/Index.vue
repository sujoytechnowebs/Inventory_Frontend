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
        <div :class="$q.platform.is.desktop ? 'investor-amount-form' : ''">
          <CreateStack v-bind:modal="true"></CreateStack>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'investor-amount-form' : ''">
          <EditStack v-bind:modal="true"></EditStack>
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

const EditStack = defineAsyncComponent(() => import("./Edit.vue"));
const CreateStack = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "StackHolderIndexPage",

  components: {
    EditStack,
    CreateStack,
  },

  computed: {
    ...mapFields("stockholder", ["filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();
    const { showEditModal } = getGetters("stockholder", ["showEditModal"]);
    const { showCreateModal } = getGetters("stockholder", ["showCreateModal"]);

    return {
      hasEditPermission: true,
      dataStore: "stockholder",
      aditionalActions: false,
      showEditModal,
      showCreateModal,
    };
  },
});
</script>

<style scoped>
.investor-amount-form {
  width: 70%;
  max-width: 70%;
}
</style>
