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
            Sales Table
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

          <!-- Invoice Button -->

          <span
            v-if="
              actionRow.row?.status === 'received' ||
              actionRow.row?.status === 'delivered' ||
              actionRow.row?.status === 'deliverd'
            "
          >
            <q-btn
              label="Invoice"
              no-caps
              flat
              @click="invoicePrint(actionRow.row.id)"
            />
          </span>
        </template>
      </QDataTable>

      <q-dialog v-model="showCreateModal" fullscreen class="sale-form-dialog">
        <div :class="$q.platform.is.desktop ? 'sale-form' : ''">
          <CreateSale v-bind:modal="true"></CreateSale>
        </div>
      </q-dialog>

      <q-dialog v-model="showEditModal" fullscreen class="sale-form-dialog">
        <div :class="$q.platform.is.desktop ? 'sale-form' : ''">
          <EditSale v-bind:modal="true"></EditSale>
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
import { mapActions } from "vuex";

const EditSale = defineAsyncComponent(() => import("./Edit.vue"));
const CreateSale = defineAsyncComponent(() => import("./Create.vue"));

export default defineComponent({
  name: "SaleIndexPage",

  components: {
    EditSale,
    CreateSale,
    ViewProducts,
  },

  computed: {
    ...mapFields("sale", ["filter.search", "filter"]),
  },
  setup() {
    const { getGetters, getMutations } = useStoreModule();
    const { showEditModal } = getGetters("sale", ["showEditModal"]);
    const { showCreateModal } = getGetters("sale", ["showCreateModal"]);

    const ViewProducts = defineAsyncComponent(() =>
      import("./_components/ViewProducts.vue")
    );

    const { showViewProductsModal } = getGetters("saledetails", [
      "showViewProductsModal",
    ]);
    const { setViewProductsModal } = getMutations("saledetails", [
      "setViewProductsModal",
    ]);

    const { setViewProductsDetails } = getMutations("saledetails", [
      "setViewProductsDetails",
    ]);

    const { setModalItem } = getMutations("saledetails", ["setModalItem"]);

    const productEdit = (data) => {
      setViewProductsDetails(data);
      setViewProductsModal(true);
    };

    return {
      hasEditPermission: true,
      dataStore: "sale",
      aditionalActions: true,
      showEditModal,
      showCreateModal,
      productEdit,
      showViewProductsModal,
      setViewProductsModal,
    };
  },

  methods: {
    ...mapActions("sale", ["getItems"]),

    // Invoice Print

    invoicePrint(invoice_id) {
      this.$store
        .dispatch(`${this.dataStore}/getReport`, { invoice_id: invoice_id })
        .then((response) => {
          window.open(response.data.tempUrl, "_system");
        })
        .catch((error) => {});
    },
  },
});
</script>

<style scoped>
.sale-form {
  width: 100%;
  max-width: 100%;
}
</style>

<style>
.sale-form-dialog .q-dialog__inner {
  padding: 0 !important;
  background: white;
}
.sale-form-dialog .q-dialog__inner.q-dialog__inner--minimized > div {
  max-height: 100vh !important;
  overflow: scroll;
}
</style>
