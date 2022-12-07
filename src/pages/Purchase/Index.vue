<template>
  <div>
    <q-card-section>
      <QDataTable
        class="no-shadow"
        :data-store="dataStore"
        :hasEditPermission="hasEditPermission"
        :aditionalActions="aditionalActions"
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

      <q-dialog
        fullscreen
        v-model="showCreateModal"
        class="purchase-form-dialog"
      >
        <div :class="$q.platform.is.desktop ? 'purchase-form' : ''">
          <CreatePurchase v-bind:modal="true"></CreatePurchase>
        </div>
      </q-dialog>

      <q-dialog class="purchase-form-dialog" v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'purchase-form' : ''">
          <EditPurchase v-bind:modal="true"></EditPurchase>
        </div>
      </q-dialog>

      <q-dialog v-model="showViewProductsModal">
        <div :class="$q.platform.is.desktop ? 'my-card' : ''">
          <ViewProducts />
        </div>
      </q-dialog>
    </q-card-section>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { defineComponent, ref } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";
import ViewProducts from "./_components/ViewProducts.vue";

const EditPurchase = defineAsyncComponent(() => import("./Edit.vue"));
const CreatePurchase = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "PurchaseIndexPage",

  components: {
    EditPurchase,
    CreatePurchase,
    ViewProducts,
  },

  computed: {
    ...mapFields("purchase", ["filter.search", "filter"]),
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

    const ViewProducts = defineAsyncComponent(() =>
      import("./_components/ViewProducts.vue")
    );

    const { showViewProductsModal } = getGetters("purchasedetails", [
      "showViewProductsModal",
    ]);
    const { setViewProductsModal } = getMutations("purchasedetails", [
      "setViewProductsModal",
    ]);

    const { setViewProductsDetails } = getMutations("purchasedetails", [
      "setViewProductsDetails",
    ]);

    const { setModalItem } = getMutations("purchasedetails", ["setModalItem"]);

    const productEdit = (data) => {
      setViewProductsDetails(data);
      setViewProductsModal(true);
    };

    return {
      hasEditPermission: true,
      dataStore: "purchase",
      aditionalActions: true,
      showEditModal,
      showCreateModal,
      showProductDetailModel,
      productEdit,
      alert: ref(false),
      showViewProductsModal,
      setViewProductsModal,
    };
  },
});
</script>

<style scoped>
.purchase-form {
  width: 100%;
  max-width: 100%;
}

.my-card {
  width: 20%;
  max-width: 20%;
}
</style>

<style>
.purchase-form-dialog .q-dialog__inner {
  padding: 0 !important;
  /* background: white; */
}
.purchase-form-dialog .q-dialog__inner.q-dialog__inner--minimized > div {
  max-height: 100% !important;
  overflow: scroll;
}
</style>
