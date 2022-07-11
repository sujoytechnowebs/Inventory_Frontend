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
            Purchase Management Table
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
        <!-- <template v-slot:aditionalActions>
          <q-btn
            flat
            color="primary"
            label="Product Details"
            @click="productEdit()"
          />
        </template> -->
      </QDataTable>

      <q-dialog v-model="showCreateModal">
        <div :class="$q.platform.is.desktop ? 'purchase-form' : ''">
          <CreateUser v-bind:modal="true"></CreateUser>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'purchase-form' : ''">
          <EditUser v-bind:modal="true"></EditUser>
        </div>
      </q-dialog>

      <q-dialog
        v-model="showProductDetailModel"
        persistent
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <div :class="$q.platform.is.desktop ? 'purchase-form' : ''">
          <Products />
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
    ...mapFields("purchase", ["filter"]),
  },
  setup() {
    const { getGetters, getMutations } = useStoreModule();
    const { showEditModal } = getGetters("purchase", ["showEditModal"]);
    const { showCreateModal } = getGetters("purchase", ["showCreateModal"]);
    const { showProductDetailModel } = getGetters("purchase", [
      "showProductDetailModel",
    ]);
    const { setProductDetailModel } = getMutations("purchase", [
      "setProductDetailModel",
    ]);

    const productEdit = (params) => {
      setProductDetailModel(true);
    };

    return {
      hasEditPermission: true,
      dataStore: "purchase",
      aditionalActions: true,
      showEditModal,
      showCreateModal,
      showProductDetailModel,
      productEdit,
    };
  },
});
</script>

<style scoped>
.purchase-form {
  width: 100%;
  max-width: 100%;
}
</style>