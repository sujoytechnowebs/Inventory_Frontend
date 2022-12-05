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
            Purchase Return Table
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
        class="return-form-dialog"
        full-width
        fullscreen
        v-model="showCreateModal"
      >
        <div :class="$q.platform.is.desktop ? 'purchase-return-form' : ''">
          <CreatePurchaseReturn v-bind:modal="true"></CreatePurchaseReturn>
        </div>
      </q-dialog>

      <!-- Purchase Return Details -->

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
import { defineComponent } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";
import ViewProducts from "./_components/ViewProducts.vue";

const CreatePurchaseReturn = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "IndexPage",

  components: {
    CreatePurchaseReturn,
    ViewProducts,
  },

  computed: {
    ...mapFields("purchasereturn", ["filter.search", "filter"]),
  },
  setup() {
    const { getGetters, getMutations } = useStoreModule();
    const { showEditModal } = getGetters("purchasereturn", ["showEditModal"]);
    const { showCreateModal } = getGetters("purchasereturn", [
      "showCreateModal",
    ]);

    // Test This is new

    const ViewProducts = defineAsyncComponent(() =>
      import("./_components/ViewProducts.vue")
    );

    const { showViewProductsModal } = getGetters("purchasereturndetails", [
      "showViewProductsModal",
    ]);
    const { setViewProductsModal } = getMutations("purchasereturndetails", [
      "setViewProductsModal",
    ]);

    const { setViewProductsDetails } = getMutations("purchasereturndetails", [
      "setViewProductsDetails",
    ]);

    const { setModalItem } = getMutations("purchasereturndetails", [
      "setModalItem",
    ]);

    const productEdit = (data) => {
      setViewProductsDetails(data);
      setViewProductsModal(true);
    };

    return {
      hasEditPermission: true,
      dataStore: "purchasereturn",
      aditionalActions: true,
      productEdit,
      showCreateModal,
      showViewProductsModal,
      setViewProductsModal,
    };
  },
});
</script>

<style scoped>
.purchase-return-form {
  width: 70%;
  max-width: 70%;
}

.my-card {
  width: 20%;
  max-width: 20%;
}
</style>

<style>
.return-form-dialog .q-dialog__inner {
  padding: 0 !important;
  background: white;
}

.return-form-dialog .q-dialog__inner .q-dialog__inner--minimized > div {
  max-height: 100% !important;
  overflow: scroll;
}
</style>
