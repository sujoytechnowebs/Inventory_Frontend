<template>
  <div>
    <q-card-section>
      <QDataTable
        class="no-shadow"
        :data-store="dataStore"
        :hasEditPermission="hasEditPermission"
        :aditionalActions="aditionalActions"
        :filter="filter"
        :canEdit="false"
      >
        <template v-slot:top>
          <div
            class="text-h6 text-weight-bold text-grey-8 col-xs-12 col-sm-6 col-md-6"
          >
            Sales Return Management Table
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
        <template v-slot:aditionalActions="actionRow">
          <q-btn
            label="See Products"
            no-caps
            flat
            @click="productEdit(actionRow.row)"
          />
        </template>
      </QDataTable>

      <q-dialog v-model="showCreateModal">
        <div :class="$q.platform.is.desktop ? 'sale-return-form' : ''">
          <CreateSaleReturn v-bind:modal="true"></CreateSaleReturn>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'sale-return-form' : ''">
          <EditSaleReturn v-bind:modal="true"></EditSaleReturn>
        </div>
      </q-dialog>

      <q-dialog v-model="showViewProductsModal">
        <div :class="$q.platform.is.desktop ? 'purchase-form' : ''">
          <ViewProducts />
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
import ViewProducts from "./_components/ViewProducts.vue";

const EditSaleReturn = defineAsyncComponent(() => import("./Edit.vue"));
const CreateSaleReturn = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "SaleReturnIndexPage",

  components: {
    EditSaleReturn,
    CreateSaleReturn,
    ViewProducts,
  },

  computed: {
    ...mapFields("salereturn", ["filter.search", "filter"]),
  },
  setup() {
    const { getGetters, getMutations } = useStoreModule();
    const { showEditModal } = getGetters("salereturn", ["showEditModal"]);
    const { showCreateModal } = getGetters("salereturn", ["showCreateModal"]);

    // Test This is new

    const ViewProducts = defineAsyncComponent(() =>
      import("./_components/ViewProducts.vue")
    );

    const { showViewProductsModal } = getGetters("salereturndetails", [
      "showViewProductsModal",
    ]);
    const { setViewProductsModal } = getMutations("salereturndetails", [
      "setViewProductsModal",
    ]);

    const { setViewProductsDetails } = getMutations("salereturndetails", [
      "setViewProductsDetails",
    ]);

    const { setModalItem } = getMutations("salereturndetails", [
      "setModalItem",
    ]);

    const productEdit = (data) => {
      setViewProductsDetails(data);
      setViewProductsModal(true);
    };

    return {
      hasEditPermission: true,
      dataStore: "salereturn",
      aditionalActions: true,
      showEditModal,
      showCreateModal,
      productEdit,
      showViewProductsModal,
      setViewProductsModal,
    };
  },
});
</script>

<style scoped>
.sale-return-form {
  width: 100%;
  max-width: 100%;
}
</style>
