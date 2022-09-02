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
            Purchase Return Table
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

      <q-dialog
        class="return-form-dialog"
        full-width
        fullscreen
        v-model="showCreateModal"
      >
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
import { mapFields } from "vuex-map-fields";
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

const EditUser = defineAsyncComponent(() => import("./Edit.vue"));
const CreateUser = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "IndexPage",

  components: {
    EditUser,
    CreateUser,
  },

  computed: {
    ...mapFields("purchasereturn", ["filter"]),
  },
  setup() {
    const { getGetters } = useStoreModule();
    const { showEditModal } = getGetters("purchasereturn", ["showEditModal"]);
    const { showCreateModal } = getGetters("purchasereturn", [
      "showCreateModal",
    ]);

    return {
      hasEditPermission: true,
      dataStore: "purchasereturn",
      aditionalActions: false,
      showEditModal,
      showCreateModal,
    };
  },
});
</script>

<style scoped>
.branch-form {
  width: 70%;
  max-width: 70%;
}
</style>

<style>
.return-form-dialog .q-dialog__inner {
  padding: 0 !important;
  background: white;
}

.return-form-dialog .q-dialog__inner .q-dialog__inner--minimized > div {
  max-height: 100% !important;
  overflow: hidden;
}
</style>
