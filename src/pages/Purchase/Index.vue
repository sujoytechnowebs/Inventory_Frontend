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
          <CreateUser v-bind:modal="true"></CreateUser>
        </div>
      </q-dialog>

      <q-dialog class="purchase-form-dialog" v-model="showEditModal">
        <div :class="$q.platform.is.desktop ? 'purchase-form' : ''">
          <EditUser v-bind:modal="true"></EditUser>
        </div>
      </q-dialog>

      <q-dialog v-model="showViewProductsModal">
        <div :class="$q.platform.is.desktop ? 'my-card' : ''">
          <ViewProducts />
        </div>
      </q-dialog>

      <!-- <q-dialog
        v-model="showViewProductsModal"
        persistent
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <div :class="$q.platform.is.desktop ? 'purchase-form' : ''">
          <Products />
        </div>
      </q-dialog> -->
    </q-card-section>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { defineComponent, ref } from "vue";
import { defineAsyncComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";
import ViewProducts from "./_components/ViewProducts.vue";

const EditUser = defineAsyncComponent(() => import("./Edit.vue"));
const CreateUser = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "IndexPage",

  components: {
    EditUser,
    CreateUser,
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

    // Test This is new

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
  width: 60%;
  max-width: 60%;
}
</style>

<style>
.purchase-form-dialog .q-dialog__inner {
  padding: 0 !important;
  background: white;
}
.purchase-form-dialog .q-dialog__inner.q-dialog__inner--minimized > div {
  max-height: 100% !important;
  overflow: scroll;
}
</style>
